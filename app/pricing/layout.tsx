import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing — Free, Plus & Ultra Max Plans",
  description:
    "Simple, transparent pricing for JenesisAI. Start free with lifetime credits and daily top-ups, or upgrade to Plus ($20/mo) or Ultra Max ($100/mo) for more credits, exports, and team collaboration.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "JenesisAI Pricing — Free, Plus & Ultra Max Plans",
    description:
      "Start free, no credit card required. Upgrade to Plus or Ultra Max for more credits, exports, and team collaboration.",
    url: "/pricing",
  },
}

// FAQ structured data — keep the questions and answers in sync with the FAQ
// section rendered in page.tsx.
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
      name: "What is the difference between the Free, Plus, and Ultra Max plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Free plan includes 1,000 lifetime starter credits with small daily top-ups when you run low, plus agentic chat, boards, spaces, and publishing. Plus ($20/month) adds 100,000 monthly credits, 10,000 daily top-up credits, unlimited spaces and extensions, and exports. Ultra Max ($100/month) includes 1,000,000 monthly credits, team collaboration and shared editing, custom extensions, and priority support.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I run out of credits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On the Free plan, you receive a small daily top-up when your credits are low. Plus includes 100K monthly credits with 10K daily top-ups, and Ultra Max includes 1M monthly credits with daily, lifetime, and on-demand top-up options.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my subscription at any time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can cancel your Plus or Ultra Max subscription at any time. Your benefits will continue until the end of your current billing cycle.",
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
