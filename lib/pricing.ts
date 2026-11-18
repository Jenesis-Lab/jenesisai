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
  /** Credits the plan may use in any five hours (0 from an API older than 2026-11-18). */
  five_hour_credits: number
  /** Credits one message may use. */
  message_credits: number
  /** Credits one message that writes a document (a deck, a PDF) may use; 0 from an older API. */
  document_message_credits: number
  /** Responses that may run at once. */
  responses_at_once: number
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
    five_hour_credits: typeof plan.five_hour_credits === "number" ? plan.five_hour_credits : 0,
    message_credits: typeof plan.message_credits === "number" ? plan.message_credits : 0,
    document_message_credits:
      typeof plan.document_message_credits === "number" ? plan.document_message_credits : 0,
    responses_at_once: typeof plan.responses_at_once === "number" ? plan.responses_at_once : 0,
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
          ". On every plan, Free included, Auto picks the right model for each message, Claude Opus 5.5 included. Pro and Ultra add scheduled goals, browser automation, and higher image, voice and translation quotas, and Ultra adds the top-tier models Claude Fable 5.2 and GPT-6 Astra."
        ),
    },
    {
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
          }, and many more short questions.`
        : "Grants are sized against measured usage so a plan lasts the whole month.",
    },
    {
      // Generated from the limits the server enforces (``usage_limits``):
      // until 2026-11-18 this answer said there were none, and that stopped
      // being true the day every plan got a five-hour allowance.
      q: "Are there usage limits besides the monthly credits?",
      a: (() => {
        const paced = [free, pro, ultra].filter(
          (plan): plan is PricingPlan => Boolean(plan && plan.five_hour_credits > 0)
        )
        if (!paced.length) {
          return "Every plan's usage is paced so one account can't use up the service for everyone else."
        }
        const windows = paced
          .map(
            (plan) =>
              `${plan.name}: up to ${plan.five_hour_credits.toLocaleString("en-US")} credits in any five hours and ` +
              `${plan.message_credits.toLocaleString("en-US")} on one message` +
              (plan.document_message_credits > plan.message_credits
                ? ` (${plan.document_message_credits.toLocaleString("en-US")} on one that writes a document)`
                : "")
          )
          .join("; ")
        return (
          "Yes. Like most AI products, every plan is paced in rolling five-hour windows so one account can't use up the service for everyone else, " +
          "and one message can use only so much before the assistant stops and shows the work it has done. " +
          `${windows}. A month never uses more than the plan's monthly credits. ` +
          "When a limit is reached, the message says exactly when it frees up."
        )
      })(),
    },
    {
      q: "What happens if I run out of credits?",
      a:
        "Your credits refill every 30 days, and the message you see says exactly when" +
        (pro ? `. Upgrading to ${pro.name} raises the monthly grant to ${pro.monthly_credits.toLocaleString("en-US")} credits.` : "."),
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
