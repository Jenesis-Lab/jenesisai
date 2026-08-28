#!/usr/bin/env node
/**
 * Verify (or refresh) the local pricing snapshot against the live catalogue.
 *
 * The site renders prices from `GET /billing/plans`, but it is a static
 * export, so `lib/pricing-snapshot.json` is baked in as the value used
 * before the client fetch resolves and if a build cannot reach the API.
 * That snapshot is the one remaining copy of the numbers, and a copy that
 * nothing checks is exactly how the site came to advertise a 100K free tier
 * against a server granting 5M.
 *
 *   npm run pricing:check      exit 1 if the snapshot has drifted
 *   npm run pricing:snapshot   rewrite it from the live API
 *
 * Point at a different backend with PLATFORM_API_URL or
 * NEXT_PUBLIC_PLATFORM_API_URL.
 */

import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"

const HERE = dirname(fileURLToPath(import.meta.url))
const SNAPSHOT_PATH = resolve(HERE, "../lib/pricing-snapshot.json")

const API =
  process.env.PLATFORM_API_URL ||
  process.env.NEXT_PUBLIC_PLATFORM_API_URL ||
  "https://api.jenesisai.org"

const ENDPOINT = `${API.replace(/\/$/, "")}/billing/plans`
const write = process.argv.includes("--write")

// Compared field by field rather than by deep-equality on the whole
// document, so the failure message names the plan and field that moved.
const COMPARED = [
  "id",
  "name",
  "price",
  "description",
  "monthly_credits",
  "deep_research_per_month",
  "agent_messages_per_month",
  "quick_questions_per_month",
  "features",
]

function describe(value) {
  return Array.isArray(value) ? JSON.stringify(value) : String(value)
}

// Top-level rates, outside the plans array. These translate a grant into
// "about N agent messages", so they drift independently of the grants
// themselves whenever the deduction model or provider pricing moves.
const COMPARED_RATES = ["credits_per_agent_message", "credits_per_quick_question"]

function diff(localDoc, liveDoc) {
  const problems = []
  const local = localDoc.plans ?? []
  const live = liveDoc.plans ?? []
  const liveById = new Map(live.map((plan) => [plan.id, plan]))
  const localById = new Map(local.map((plan) => [plan.id, plan]))

  for (const field of COMPARED_RATES) {
    const a = describe(localDoc[field])
    const b = describe(liveDoc[field])
    if (a !== b) problems.push(`${field}\n    snapshot: ${a}\n    server:   ${b}`)
  }

  for (const id of liveById.keys()) {
    if (!localById.has(id)) problems.push(`plan "${id}" exists on the server but not in the snapshot`)
  }
  for (const id of localById.keys()) {
    if (!liveById.has(id)) problems.push(`plan "${id}" is in the snapshot but not on the server`)
  }

  for (const [id, livePlan] of liveById) {
    const localPlan = localById.get(id)
    if (!localPlan) continue
    for (const field of COMPARED) {
      const a = describe(localPlan[field])
      const b = describe(livePlan[field])
      if (a !== b) problems.push(`${id}.${field}\n    snapshot: ${a}\n    server:   ${b}`)
    }
  }
  return problems
}

async function main() {
  let live
  try {
    const response = await fetch(ENDPOINT)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    live = await response.json()
  } catch (error) {
    console.error(`Could not reach ${ENDPOINT}: ${error.message}`)
    // A pricing check that silently passes when it cannot verify anything
    // is worse than no check, so this is a hard failure.
    process.exit(2)
  }

  if (!Array.isArray(live?.plans) || live.plans.length === 0) {
    console.error(`${ENDPOINT} returned no plans`)
    process.exit(2)
  }

  if (write) {
    writeFileSync(SNAPSHOT_PATH, `${JSON.stringify(live, null, 2)}\n`)
    console.log(`Refreshed pricing snapshot from ${ENDPOINT}`)
    for (const plan of live.plans) {
      console.log(`  ${plan.name.padEnd(6)} $${String(plan.price).padEnd(4)} ${plan.monthly_credits.toLocaleString("en-US")} credits/mo`)
    }
    return
  }

  const local = JSON.parse(readFileSync(SNAPSHOT_PATH, "utf8"))
  const problems = diff(local, live)

  if (problems.length) {
    console.error(`Pricing snapshot has drifted from ${ENDPOINT}:\n`)
    for (const problem of problems) console.error(`  - ${problem}`)
    console.error(`\nRun "npm run pricing:snapshot" to refresh it.`)
    process.exit(1)
  }

  console.log(`Pricing snapshot matches ${ENDPOINT}`)
}

main()
