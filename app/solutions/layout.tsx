import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solutions — AI Research, Visual Canvas & Team Workspaces",
  description:
    "See how JenesisAI fits your workflow: agentic deep research with cited sources, visual presentations on a drag-and-drop canvas, browser and code agents, multi-model AI, and shareable team boards.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "JenesisAI Solutions — AI Research, Visual Canvas & Team Workspaces",
    description:
      "From solo research to team collaboration — one agentic workspace for research, creation, and sharing.",
    url: "/solutions",
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
