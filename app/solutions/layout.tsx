import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solutions — Research, Canvas & Team AI",
  description:
    "How JenesisAI fits your workflow: agentic research with cited sources, visual presentations on a drag-and-drop canvas, browser and code agents, and shareable team boards.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "JenesisAI Solutions — Research, Canvas & Team AI",
    description:
      "From solo research to team collaboration — one agentic workspace for research, creation, and sharing.",
    url: "/solutions",
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

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
