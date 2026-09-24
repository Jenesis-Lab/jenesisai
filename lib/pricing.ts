/**
 * Pricing data for the public site.
 *
 * Every plan number shown to a visitor comes from the platform API's
 * `GET /billing/plans`, which is generated from the server's plan catalogue
 * — the same declaration the server bills against. This page used to keep
 * its own hand-written copy, and by Aug 2026 the site advertised a 100K
 * free tier (in indexed metadata, no less) while the app said 1M and the
 * server granted 5M. A visitor cannot trust a price they see three
 * versions of.
 *
 * The site is a static export, so plans are fetched twice:
 *
 *   1. at build time, for `<head>` metadata and the FAQ structured data
 *      Google indexes;
 *   2. on mount in the browser, so a pricing change reaches visitors
 *      without waiting for a redeploy.
 *
 * `SNAPSHOT_PLANS` exists only so a transient API failure during a build
 * cannot ship an empty pricing page. It is a cache, not a source of truth —
 * run `npm run pricing:check` to assert it still matches the live API.
 */

import { PLATFORM_API_URL } from "@/lib/config"
import snapshot from "@/lib/pricing-snapshot.json"

export interface PricingPlan {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  monthly_credits: number
  deep_research_per_month: number
  agent_messages_per_month: number
  quick_questions_per_month: number
}

export interface PricingFeed {
  plans: PricingPlan[]
  credits_per_agent_message?: number
  credits_per_quick_question?: number
  /** True when these numbers came from the API rather than the snapshot. */
  live: boolean
}

/**
 * Last known good response from `GET /billing/plans`.
 *
 * Kept as data, not code, so it is obvious that nobody should be editing
 * prices here — change them in
 * `server/app_service/auth/billing/plan_catalog.py` and refresh this file
 * with `npm run pricing:snapshot`. `npm run pricing:check` fails the build
 * if the two have diverged.
 */
export const SNAPSHOT_PLANS: PricingPlan[] = snapshot.plans as PricingPlan[]

export const PLANS_ENDPOINT = `${PLATFORM_API_URL.replace(/\/$/, "")}/billing/plans`

/**
 * Measured cost of a typical interaction, used to express a grant in units
 * a human can judge ("about 900 agent messages"). Read from the snapshot
 * rather than written here, so `npm run pricing:check` guards them the same
 * way it guards the grants — they move whenever the deduction model or
 * provider pricing changes, and a stale copy misprices the pitch even while
 * every grant on the page is correct.
 */
export const CREDITS_PER_AGENT_MESSAGE = snapshot.credits_per_agent_message
export const CREDITS_PER_QUICK_QUESTION = snapshot.credits_per_quick_question

/**
 * Coerce one plan from the API into a fully-populated {@link PricingPlan}.
 *
 * Deliberately tolerant of an older backend. During a deploy the site and
 * the API are briefly different versions, and the fields describing a grant
 * in messages postdate the fields describing it in credits — so they are
 * derived when absent rather than assumed present. Returns `null` when the
 * essentials are missing, so a malformed entry is dropped instead of
 * rendering as a broken card.
 */
function normalizePlan(
  value: unknown,
  creditsPerAgentMessage: number,
  creditsPerQuickQuestion: number
): PricingPlan | null {
  const plan = value as Partial<PricingPlan> | null
  if (
    !plan ||
    typeof plan.id !== "string" ||
    typeof plan.name !== "string" ||
    typeof plan.price !== "number" ||
    typeof plan.monthly_credits !== "number" ||
    plan.monthly_credits <= 0 ||
    !Array.isArray(plan.features)
  ) {
    return null
  }

  const perAgent = creditsPerAgentMessage > 0 ? creditsPerAgentMessage : CREDITS_PER_AGENT_MESSAGE
  const perQuick = creditsPerQuickQuestion > 0 ? creditsPerQuickQuestion : CREDITS_PER_QUICK_QUESTION

  return {
    id: plan.id,
    name: plan.name,
    price: plan.price,
    description: typeof plan.description === "string" ? plan.description : "",
    features: plan.features.filter((f): f is string => typeof f === "string"),
    monthly_credits: plan.monthly_credits,
    deep_research_per_month:
      typeof plan.deep_research_per_month === "number" ? plan.deep_research_per_month : 0,
    agent_messages_per_month:
      typeof plan.agent_messages_per_month === "number"
        ? plan.agent_messages_per_month
        : Math.floor(plan.monthly_credits / perAgent),
    quick_questions_per_month:
      typeof plan.quick_questions_per_month === "number"
        ? plan.quick_questions_per_month
        : Math.floor(plan.monthly_credits / perQuick),
  }
}

/**
 * Fetch the live plan catalogue.
 *
 * Falls back to {@link SNAPSHOT_PLANS} rather than throwing, because a
 * pricing page that fails to render helps nobody — but the caller is told
 * via `live` so it can decide whether to warn.
 */
export async function fetchPricing(signal?: AbortSignal): Promise<PricingFeed> {
  try {
    const response = await fetch(PLANS_ENDPOINT, { signal })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const body = await response.json()
    const perAgent = Number(body?.credits_per_agent_message) || CREDITS_PER_AGENT_MESSAGE
    const perQuick = Number(body?.credits_per_quick_question) || CREDITS_PER_QUICK_QUESTION

    const raw: unknown[] = Array.isArray(body?.plans) ? body.plans : []
    const plans: PricingPlan[] = raw
      .map((plan) => normalizePlan(plan, perAgent, perQuick))
      .filter((plan): plan is PricingPlan => plan !== null)

    if (!plans.length) throw new Error("no usable plans in response")

    return {
      plans: plans.sort((a, b) => a.price - b.price),
      credits_per_agent_message: perAgent,
      credits_per_quick_question: perQuick,
      live: true,
    }
  } catch {
    return { plans: SNAPSHOT_PLANS, live: false }
  }
}

export interface PricingFaqEntry {
  q: string
  a: string
}

/**
 * The pricing FAQ, generated from the live plans.
 *
 * Rendered twice — as visible copy on the pricing page and as
 * `FAQPage` structured data in the document head — and both callers use
 * this one builder. They used to be two hand-maintained copies, which is
 * how the indexed answer came to claim "Pro includes 5M credits per month
 * and Ultra includes 15M" while the visible page on the same route said
 * 20M and 120M.
 */
export function buildPricingFaq(plans: PricingPlan[]): PricingFaqEntry[] {
  const byId = new Map(plans.map((plan) => [plan.id, plan]))
  const free = byId.get("free")
  const pro = byId.get("plus")
  const ultra = byId.get("pro")

  const describe = (plan: PricingPlan | undefined) => {
    if (!plan) return ""
    // The trailing clause is conditional because a backend older than the
    // deep-research field reports 0, and "— about 35 agent messages —."
    // reads like a truncation bug in the answer Google quotes.
    const research = plan.deep_research_per_month
      ? ` and ${plan.deep_research_per_month} Deep Researches`
      : ""
    return (
      `${plan.name}${plan.price ? ` ($${plan.price}/month)` : ""} includes ` +
      `${plan.monthly_credits.toLocaleString("en-US")} credits per month ` +
      `(about ${plan.agent_messages_per_month.toLocaleString("en-US")} agent messages)` +
      research
    )
  }

  return [
    {
      q: "What are Credits?",
      a:
        "Credits are the currency used within JenesisAI to perform AI actions. Every time you chat with an agent, run a task, or use an extension, it consumes credits. " +
        "What you are charged is derived from what the request actually cost to run, so a short question costs a fraction of a long research task, and a cheaper model costs less than a frontier one. " +
        "Reusing context you have already sent costs less too, because the saving our providers give us for it is passed on rather than kept.",
    },
    {
      q: "What is the difference between the Free, Pro, and Ultra plans?",
      a: [describe(free), describe(pro), describe(ultra)]
        .filter(Boolean)
        .join(". ")
        .concat(
          ". Paid plans add top-tier models such as Claude Opus and GPT-6 Sol, scheduled goals, browser automation, and higher image, voice and translation quotas."
        ),
    },
    {
      // Answered in whole-month totals on purpose. This used to divide the
      // grant by 30 and quote a per-day figure, which read as a daily quota
      // and made the Free plan sound like five messages a day. No such rule
      // exists — see the "daily limits" answer below — and describing a pool
      // as a rate invented a restriction the product does not have.
      q: "How much can I actually do with a month of credits?",
      a: pro
        ? `Grants are sized against measured usage, not round numbers. A short question costs about ${CREDITS_PER_QUICK_QUESTION.toLocaleString(
            "en-US"
          )} credits, and a full agent task — where the assistant plans, searches and writes — costs about ${CREDITS_PER_AGENT_MESSAGE.toLocaleString(
            "en-US"
          )}. That is about ${pro.agent_messages_per_month.toLocaleString(
            "en-US"
          )} full agent tasks a month on ${pro.name}${
            free
              ? `, and ${free.agent_messages_per_month.toLocaleString("en-US")} on Free`
              : ""
          } — yours to spend at whatever pace you like.`
        : "Grants are sized against measured usage so a plan lasts the whole month.",
    },
    {
      q: "Are there daily limits or a cap on how many messages I can send?",
      a:
        "No. There is no daily limit, no hourly limit and no message cap on any plan, including Free. " +
        "Your monthly credits are a pool, not a rate — spend the whole month's worth in a single afternoon if that is what the work needs. " +
        "The only thing that ever stops a request is running the pool itself down to zero.",
    },
    {
      q: "What happens if I run out of credits?",
      a:
        "Your credits reset every month. If you do run the balance down, a small daily top-up lands so you can finish what you were doing rather than waiting for the reset" +
        (pro ? `, and upgrading to ${pro.name} raises the monthly grant to ${pro.monthly_credits.toLocaleString("en-US")}.` : "."),
    },
    {
      q: "Can I cancel my subscription at any time?",
      a: "Yes, you can cancel your Pro or Ultra subscription at any time. Your benefits will continue until the end of your current billing cycle.",
    },
    {
      q: "What are Spaces and Extensions?",
      a: "Spaces are dedicated workspaces where you can organize your agents and tasks. Extensions are powerful tools that give your agents extra capabilities, like browsing the web, reading files, or connecting to external apps.",
    },
  ]
}

/** Grant formatted for prose: 25000000 -> "25 million". */
export function creditsInWords(credits: number): string {
  if (credits >= 1_000_000_000) {
    const billions = credits / 1_000_000_000
    return `${Number.isInteger(billions) ? billions : billions.toFixed(1)} billion`
  }
  if (credits >= 1_000_000) {
    const millions = credits / 1_000_000
    return `${Number.isInteger(millions) ? millions : millions.toFixed(1)} million`
  }
  return credits.toLocaleString("en-US")
}
