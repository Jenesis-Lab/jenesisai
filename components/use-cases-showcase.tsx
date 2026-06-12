"use client"

import { Sparkles, BookOpenCheck, Presentation, Globe2, GraduationCap, Users2, Share2 } from "lucide-react"

const useCases = [
  {
    icon: BookOpenCheck,
    title: "Market research, fully sourced",
    body: "Ask one question and get a structured research board — agents search the web, compile findings, and cite every source so you can verify anything in one click.",
  },
  {
    icon: Presentation,
    title: "Reports that become presentations",
    body: "Drag research, charts, and media onto the canvas and arrange them into a deck or report. The layout work that used to take an afternoon happens as you think.",
  },
  {
    icon: Globe2,
    title: "Live data, pulled for you",
    body: "Browser agents navigate real websites on your behalf — you watch every step — and bring live numbers and pages straight into your workspace.",
  },
  {
    icon: GraduationCap,
    title: "Study boards that stick",
    body: "Combine PDFs, YouTube videos, notes, and AI explanations on one board. Learn visually instead of scrolling a chat thread.",
  },
  {
    icon: Users2,
    title: "One space for the whole team",
    body: "Work on shared boards where each person has their own AI agents. Research once, build together, stay in sync.",
  },
  {
    icon: Share2,
    title: "Publish in one click",
    body: "Turn any board into a public link others can explore and play through — your work becomes something people can actually walk through, not a file attachment.",
  },
]

export function UseCasesShowcase() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-muted/80 border border-border/60 px-3 py-1.5 rounded-full text-xs font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            Use Cases
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            What people build with JenesisAI
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Researchers, creators, students, and teams use the workspace to go from question to finished, shareable work.
          </p>
        </div>

        {/* Use case grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 ring-1 ring-indigo-500/20 mb-4 group-hover:bg-indigo-500/15 transition-colors">
                <useCase.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold mb-2 text-foreground">{useCase.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{useCase.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
