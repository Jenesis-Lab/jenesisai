import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing — Free, Pro & Ultra Plans",
  description:
    "Simple, transparent JenesisAI pricing. Start free with 100K monthly credits, or upgrade to Pro ($20/mo) or Ultra ($100/mo) for premium models and team features.",
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

// FAQ structured data — keep the questions and answers in sync with the FAQ
// section rendered in page.tsx, which mirrors the backend plan catalog
// (server/app_service/auth/billing/models.py PLAN_PRICES).
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Credits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Credits are the currency used within JenesisAI to perform AI actions. Every time you chat with an agent, run a task, or use an extension, it consumes credits. Different models and complexities consume different amounts of credits.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between the Free, Pro, and Ultra plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Free plan includes 100,000 credits per month, 2 Deep Researches, web search, and community support. Pro ($20/month) unlocks 5,000,000 credits per month, 5 Deep Researches, the latest models (Claude, GPT), unlimited conversations, all integrations, and priority support. Ultra ($100/month) includes 15,000,000 credits per month, 10 Deep Researches, team collaboration, shared workspaces, admin controls, and dedicated support.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I run out of credits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On the Free plan, you receive a small daily top-up when your credits run low. Credits reset every month: Pro includes 5M credits per month and Ultra includes 15M credits per month, with more Deep Researches and team features.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my subscription at any time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can cancel your Pro or Ultra subscription at any time. Your benefits will continue until the end of your current billing cycle.",
      },
    },
    {
      "@type": "Question",
      name: "What are Spaces and Extensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spaces are dedicated workspaces where you can organize your agents and tasks. Extensions are powerful tools that give your agents extra capabilities, like browsing the web, reading files, or connecting to external apps.",
      },
    },
  ],
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
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
