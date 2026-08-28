import type React from "react"
import type { Metadata } from "next"

import { buildPricingFaq, fetchPricing, creditsInWords } from "@/lib/pricing"

// This file is where the pricing inconsistency did the most damage. The
// metadata description advertised "100K monthly credits" and the FAQ
// structured data told Google that "Pro includes 5M credits per month and
// Ultra includes 15M" — figures three resizes out of date, on the one
// surface users could not see to correct and search engines quote verbatim.
//
// Nothing here is written by hand any more. The site is a static export, so
// these run at build time against the platform API and bake the enforced
// numbers into the published HTML.

export async function generateMetadata(): Promise<Metadata> {
  const { plans } = await fetchPricing()
  const free = plans.find((plan) => plan.id === "free")
  const pro = plans.find((plan) => plan.id === "plus")
  const ultra = plans.find((plan) => plan.id === "pro")

  const description = free
    ? `Simple, transparent JenesisAI pricing. Start free with ${creditsInWords(
        free.monthly_credits
      )} monthly credits — about ${free.agent_messages_per_month.toLocaleString(
        "en-US"
      )} agent messages — or upgrade to ${pro?.name ?? "Pro"} ($${
        pro?.price ?? 20
      }/mo) or ${ultra?.name ?? "Ultra"} ($${
        ultra?.price ?? 100
      }/mo) for premium models and team features.`
    : "Simple, transparent JenesisAI pricing. Start free, upgrade as you grow."

  return {
    title: "Pricing — Free, Pro & Ultra Plans",
    description,
    alternates: {
      canonical: "/pricing",
    },
    openGraph: {
      title: "JenesisAI Pricing — Free, Pro & Ultra Plans",
      description:
        "Start free, no credit card required. Upgrade to Pro or Ultra for more credits, premium models, and team collaboration.",
      url: "/pricing",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "The JenesisAI visual workspace — agentic research, canvas boards, and live previews",
        },
      ],
    },
  }
}

export default async function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { plans } = await fetchPricing()

  // Same builder the visible FAQ uses, so the answer Google indexes and the
  // answer a visitor reads are the same string.
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: buildPricingFaq(plans).map((entry) => ({
      "@type": "Question",
      name: entry.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {children}
    </>
  )
}
