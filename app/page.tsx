import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Sparkles, Layers, Workflow, Bot, Globe, Shield, Zap, Check } from "lucide-react"
import Navbar from "@/components/navbar"
import { LogoCarousel } from "@/components/logo-carousel"
import { FRONTEND_PLATFORM_URL } from "@/lib/config"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ─── Hero Section ─── */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none animate-glow" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-cyan-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none animate-glow" style={{ animationDelay: "2s" }} />

        {/* Announcement Banner */}
        <div className="flex justify-center mb-14">
          <Link
            href="#"
            className="group inline-flex items-center gap-2 bg-muted hover:bg-accent border border-border rounded-full px-4 py-2 text-sm transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-muted-foreground">New</span>
            <span className="text-muted-foreground/30">|</span>
            <span className="text-foreground/90">Agentic AI & Visual Canvas — now in public beta</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="container mx-auto px-6">
          {/* Centered Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              Research. Create. Share.
              <br />
              All with{" "}
              <span className="gradient-text-brand dark:gradient-text-brand gradient-text-brand-light">
                AI
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              The AI workspace that turns a question into a polished report,
              presentation, or visual board — in minutes, not hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-sm font-medium" asChild>
                <Link href={FRONTEND_PLATFORM_URL}>
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-accent rounded-full px-8 h-12 text-sm font-medium bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Product Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl border border-border overflow-hidden shadow-2xl image-glow">
              {/* Light mode image */}
              <Image
                src="/image_light.png"
                alt="JenesisAI Platform — Agentic AI Dashboard"
                width={1200}
                height={675}
                className="w-full h-auto dark:hidden"
                priority
              />
              {/* Dark mode image */}
              <Image
                src="/image_dark.png"
                alt="JenesisAI Platform — Agentic AI Dashboard"
                width={1200}
                height={675}
                className="w-full h-auto hidden dark:block"
                priority
              />
            </div>
            {/* Subtle glow underneath */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ─── Logo Carousel ─── */}
      <LogoCarousel />

      {/* ─── Core Platform Capabilities ─── */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              One surface, every capability
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Deep research, visual creation, and multi-model AI — unified in a single workspace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Agentic AI */}
            <div className="group bg-card hover:bg-accent border border-border hover:border-border/80 rounded-2xl p-8 transition-all duration-300">
              <div className="mb-6 h-48 bg-gradient-to-br from-muted/50 to-muted rounded-xl flex items-center justify-center overflow-hidden">
                <svg
                  width="180"
                  height="140"
                  viewBox="0 0 200 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:scale-105 transition-transform duration-300"
                >
                  <circle cx="100" cy="75" r="45" fill="rgba(99, 102, 241, 0.1)" />
                  <circle cx="100" cy="75" r="32" fill="rgba(99, 102, 241, 0.15)" />
                  <circle cx="100" cy="75" r="18" fill="rgba(99, 102, 241, 0.2)" />
                  <path d="M100 45 L100 105" stroke="rgba(129, 140, 248, 0.8)" strokeWidth="2" strokeDasharray="4 2" />
                  <path d="M70 75 L130 75" stroke="rgba(129, 140, 248, 0.8)" strokeWidth="2" strokeDasharray="4 2" />
                  <circle cx="100" cy="75" r="8" fill="rgba(129, 140, 248, 1)" />
                  <circle cx="65" cy="50" r="6" fill="rgba(129, 140, 248, 0.7)" />
                  <circle cx="135" cy="50" r="6" fill="rgba(129, 140, 248, 0.7)" />
                  <circle cx="65" cy="100" r="6" fill="rgba(129, 140, 248, 0.7)" />
                  <circle cx="135" cy="100" r="6" fill="rgba(129, 140, 248, 0.7)" />
                  <line x1="100" y1="75" x2="65" y2="50" stroke="rgba(129, 140, 248, 0.6)" strokeWidth="1.5" />
                  <line x1="100" y1="75" x2="135" y2="50" stroke="rgba(129, 140, 248, 0.6)" strokeWidth="1.5" />
                  <line x1="100" y1="75" x2="65" y2="100" stroke="rgba(129, 140, 248, 0.6)" strokeWidth="1.5" />
                  <line x1="100" y1="75" x2="135" y2="100" stroke="rgba(129, 140, 248, 0.6)" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-foreground">Deep Research, Delivered</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                Get structured, sourced answers in seconds. AI agents search the web, compile findings, and cite every source — so you can skip the tab-switching.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 text-sm group/link"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Seamless Integration */}
            <div className="group bg-card hover:bg-accent border border-border hover:border-border/80 rounded-2xl p-8 transition-all duration-300">
              <div className="mb-6 h-48 bg-gradient-to-br from-muted/50 to-muted rounded-xl flex items-center justify-center overflow-hidden">
                <svg
                  width="180"
                  height="140"
                  viewBox="0 0 200 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:scale-105 transition-transform duration-300"
                >
                  <rect x="35" y="25" width="130" height="20" rx="4" fill="rgba(99, 102, 241, 0.15)" />
                  <rect x="35" y="55" width="100" height="20" rx="4" fill="rgba(99, 102, 241, 0.1)" />
                  <rect x="35" y="85" width="130" height="20" rx="4" fill="rgba(99, 102, 241, 0.15)" />
                  <rect x="35" y="115" width="70" height="20" rx="4" fill="rgba(99, 102, 241, 0.1)" />
                  <circle cx="175" cy="35" r="8" fill="rgba(16, 185, 129, 0.8)" />
                  <path
                    d="M171 35 L174 38 L179 32"
                    className="stroke-background"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="25" cy="125" r="8" fill="rgba(16, 185, 129, 0.8)" />
                  <path
                    d="M21 125 L24 128 L29 122"
                    className="stroke-background"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-foreground">Visual Canvas</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                Turn research into presentations, reports, and plans on an infinite canvas. Drag, arrange, and let AI handle the layout.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 text-sm group/link"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* AI Orchestration */}
            <div className="group bg-card hover:bg-accent border border-border hover:border-border/80 rounded-2xl p-8 transition-all duration-300">
              <div className="mb-6 h-48 bg-gradient-to-br from-muted/50 to-muted rounded-xl flex items-center justify-center overflow-hidden">
                <svg
                  width="180"
                  height="140"
                  viewBox="0 0 200 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:scale-105 transition-transform duration-300"
                >
                  <rect
                    x="30"
                    y="30"
                    width="60"
                    height="40"
                    rx="8"
                    fill="rgba(99, 102, 241, 0.15)"
                    stroke="rgba(129, 140, 248, 0.6)"
                    strokeWidth="2"
                  />
                  <rect
                    x="110"
                    y="30"
                    width="60"
                    height="40"
                    rx="8"
                    fill="rgba(99, 102, 241, 0.15)"
                    stroke="rgba(129, 140, 248, 0.6)"
                    strokeWidth="2"
                  />
                  <rect
                    x="30"
                    y="80"
                    width="60"
                    height="40"
                    rx="8"
                    fill="rgba(99, 102, 241, 0.15)"
                    stroke="rgba(129, 140, 248, 0.6)"
                    strokeWidth="2"
                  />
                  <rect
                    x="110"
                    y="80"
                    width="60"
                    height="40"
                    rx="8"
                    fill="rgba(99, 102, 241, 0.15)"
                    stroke="rgba(129, 140, 248, 0.6)"
                    strokeWidth="2"
                  />
                  <path d="M90 50 L110 50" stroke="rgba(129, 140, 248, 0.6)" strokeWidth="2" strokeDasharray="4 2" />
                  <path d="M60 70 L60 80" stroke="rgba(129, 140, 248, 0.6)" strokeWidth="2" strokeDasharray="4 2" />
                  <path d="M140 70 L140 80" stroke="rgba(129, 140, 248, 0.6)" strokeWidth="2" strokeDasharray="4 2" />
                  <path d="M90 100 L110 100" stroke="rgba(129, 140, 248, 0.6)" strokeWidth="2" strokeDasharray="4 2" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-foreground">Team Workspaces</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                Work together in real time. Everyone edits the same board while personal AI agents assist each team member independently.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 text-sm group/link"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Product Showcase ─── */}
      <section className="py-32 bg-gradient-to-b from-transparent via-muted/20 to-transparent relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6">
          {/* Top: Image + Intro side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center mb-20">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-border shadow-xl image-glow">
                <Image
                  src="/ai-orchestration.png"
                  alt="JenesisAI Workspace"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-muted border border-border px-3 py-1.5 rounded-full text-xs font-medium mb-6">
                <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                Platform Overview
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
                Research meets creation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                JenesisAI combines conversational AI with a visual canvas — giving you a single surface to go from question to finished output. Research flows directly into your board, and every step is powered by autonomous agents.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Whether you&apos;re analyzing markets, building a report, or preparing a presentation — the platform handles the research, organization, and layout so you can focus on the thinking.
              </p>
            </div>
          </div>

          {/* Bottom: 6-feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Bot className="h-6 w-6" />,
                color: "indigo",
                gradient: "from-indigo-500/20 via-indigo-500/5 to-transparent",
                borderHover: "hover:border-indigo-500/30",
                shadowHover: "hover:shadow-indigo-500/5",
                iconBg: "bg-indigo-500/15 text-indigo-400 ring-1 ring-indigo-500/20",
                title: "Smart Research",
                desc: "Agents search the web, extract key data, and compile structured findings — every source cited and ready to use.",
                visual: (
                  <div className="absolute top-3 right-3 opacity-20">
                    <div className="flex gap-1.5">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="flex flex-col gap-1.5">
                          {[...Array(4)].map((_, k) => (
                            <div key={k} className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                icon: <Layers className="h-6 w-6" />,
                color: "purple",
                gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
                borderHover: "hover:border-purple-500/30",
                shadowHover: "hover:shadow-purple-500/5",
                iconBg: "bg-purple-500/15 text-purple-400 ring-1 ring-purple-500/20",
                title: "Drag-and-Drop Canvas",
                desc: "Drag research, images, and AI outputs onto a freeform board. Build presentations, reports, and plans visually.",
                visual: (
                  <div className="absolute top-4 right-4 opacity-15">
                    <div className="w-12 h-8 border-2 border-purple-400 rounded-lg relative">
                      <div className="absolute -bottom-2 -right-2 w-10 h-6 border-2 border-purple-400/60 rounded-lg" />
                      <div className="absolute -bottom-4 -right-4 w-8 h-4 border-2 border-purple-400/30 rounded-lg" />
                    </div>
                  </div>
                ),
              },
              {
                icon: <Shield className="h-6 w-6" />,
                color: "emerald",
                gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
                borderHover: "hover:border-emerald-500/30",
                shadowHover: "hover:shadow-emerald-500/5",
                iconBg: "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/20",
                title: "Live Web & Code",
                desc: "Agents browse the web and run code on your behalf — pulling live data and computed results directly into your workspace.",
                visual: (
                  <div className="absolute top-4 right-4 opacity-15">
                    <div className="space-y-1.5">
                      <div className="w-14 h-1.5 bg-emerald-400 rounded-full" />
                      <div className="w-10 h-1.5 bg-emerald-400/70 rounded-full" />
                      <div className="w-12 h-1.5 bg-emerald-400/50 rounded-full" />
                      <div className="w-8 h-1.5 bg-emerald-400/30 rounded-full" />
                    </div>
                  </div>
                ),
              },
              {
                icon: <Workflow className="h-6 w-6" />,
                color: "cyan",
                gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
                borderHover: "hover:border-cyan-500/30",
                shadowHover: "hover:shadow-cyan-500/5",
                iconBg: "bg-cyan-500/15 text-cyan-400 ring-1 ring-cyan-500/20",
                title: "One-Click Sharing",
                desc: "Publish boards as shareable links or export to documents. Built for teams that move fast.",
                visual: (
                  <div className="absolute top-3 right-3 opacity-15">
                    <div className="relative">
                      <div className="w-8 h-8 border-2 border-cyan-400 rounded-full" />
                      <div className="absolute top-1/2 left-full w-4 h-px bg-cyan-400 -translate-y-1/2" />
                      <div className="absolute top-0 left-1/2 h-4 w-px bg-cyan-400/60 -translate-x-1/2 -translate-y-full" />
                    </div>
                  </div>
                ),
              },
              {
                icon: <Globe className="h-6 w-6" />,
                color: "amber",
                gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
                borderHover: "hover:border-amber-500/30",
                shadowHover: "hover:shadow-amber-500/5",
                iconBg: "bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/20",
                title: "Best AI, Auto-Routed",
                desc: "GPT-4o, Gemini, Claude — tasks are routed to the optimal model automatically, or you choose per query.",
                visual: (
                  <div className="absolute top-3 right-3 opacity-15">
                    <div className="flex gap-2">
                      <div className="w-4 h-4 rounded-md bg-amber-400 rotate-45" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/70 mt-1" />
                      <div className="w-4 h-4 rounded-sm bg-amber-400/50" />
                    </div>
                  </div>
                ),
              },
              {
                icon: <Zap className="h-6 w-6" />,
                color: "rose",
                gradient: "from-rose-500/20 via-rose-500/5 to-transparent",
                borderHover: "hover:border-rose-500/30",
                shadowHover: "hover:shadow-rose-500/5",
                iconBg: "bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/20",
                title: "Plug-In Anything",
                desc: "Add browser control, code execution, and custom tools. The platform grows with your workflow.",
                visual: (
                  <div className="absolute top-3 right-4 opacity-15">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-rose-400" />
                      <div className="absolute -top-3 left-4 w-2.5 h-2.5 rounded-full bg-rose-400/70" />
                      <div className="absolute top-2 left-6 w-2 h-2 rounded-full bg-rose-400/50" />
                      <div className="absolute top-0 left-1.5 w-3 h-px bg-rose-400/40 rotate-45 origin-left" />
                    </div>
                  </div>
                ),
              },
            ].map((f, i) => (
              <div
                key={i}
                className={`relative overflow-hidden bg-card border border-border rounded-2xl transition-all duration-300 group hover:-translate-y-1 ${f.borderHover} ${f.shadowHover} hover:shadow-lg`}
              >
                {/* Gradient header area */}
                <div className={`relative h-20 bg-gradient-to-br ${f.gradient} border-b border-border/50`}>
                  {/* Abstract visual pattern */}
                  {f.visual}
                  {/* Icon badge overlapping the header */}
                  <div className={`absolute -bottom-5 left-6 inline-flex items-center justify-center h-10 w-10 rounded-xl ${f.iconBg} shadow-sm`}>
                    {f.icon}
                  </div>
                </div>
                {/* Content */}
                <div className="pt-8 pb-6 px-6">
                  <h3 className="text-base font-medium mb-2 text-foreground">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Intelligence Layer ─── */}
      <section className="py-32 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/8 via-purple-500/5 to-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-muted border border-border px-3 py-1.5 rounded-full text-xs font-medium mb-6">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              The Intelligence Layer
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              One brain. Every tool.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your research, models, and outputs — connected by AI into a single, seamless workspace.
            </p>
          </div>

          {/* Center image with corner-overlapping feature cards */}
          <div className="max-w-5xl mx-auto">
            {/* Mobile layout: stacked */}
            <div className="block lg:hidden space-y-6">
              <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80">
                <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-3 rounded-full border border-purple-500/15 animate-[spin_25s_linear_infinite_reverse]" />
                <div className="absolute inset-6 rounded-full overflow-hidden border border-border/50 shadow-2xl">
                  <Image
                    src="/workflow-visualization.png"
                    alt="JenesisAI Intelligence Layer"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Bot className="h-5 w-5" />, color: "text-indigo-400", title: "Agentic Research", desc: "Agents search, aggregate, and synthesize data from across the web with full source attribution." },
                  { icon: <Layers className="h-5 w-5" />, color: "text-purple-400", title: "Visual Board", desc: "Assemble research, images, and AI outputs into presentations, plans, and documents on a freeform canvas." },
                  { icon: <Globe className="h-5 w-5" />, color: "text-cyan-400", title: "Multi-Model AI", desc: "Route tasks to GPT-4o, Gemini, or Claude automatically — or choose the model yourself per query." },
                  { icon: <Zap className="h-5 w-5" />, color: "text-amber-400", title: "Live Agents", desc: "Browser control, code execution, and extensible plugins — agents that act on your behalf in real time." },
                ].map((f, i) => (
                  <div key={i} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5">
                    <div className={`${f.color} mb-3`}>{f.icon}</div>
                    <h3 className="text-sm font-medium mb-1.5 text-foreground">{f.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop layout: cards flanking circle with connectors */}
            <div className="hidden lg:block">
              <div className="flex items-center justify-center gap-8 max-w-6xl mx-auto">
                {/* Left column — 2 cards */}
                <div className="flex flex-col gap-6 w-[260px] flex-shrink-0">
                  {/* Card 1 */}
                  <div className="relative bg-card/90 backdrop-blur-md border border-border rounded-2xl p-5 shadow-lg hover:border-indigo-500/30 hover:shadow-indigo-500/5 transition-all duration-300">
                    <div className="text-indigo-400 mb-3">
                      <Bot className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-medium mb-1.5 text-foreground">Agentic Research</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">Agents search, aggregate, and synthesize data from across the web with full source attribution.</p>
                    {/* Connector line */}
                    <div className="absolute top-1/2 -right-8 w-8 h-px border-t border-dashed border-indigo-500/30" />
                    <div className="absolute top-1/2 -right-8 translate-x-full -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-indigo-400/50" />
                  </div>
                  {/* Card 2 */}
                  <div className="relative bg-card/90 backdrop-blur-md border border-border rounded-2xl p-5 shadow-lg hover:border-cyan-500/30 hover:shadow-cyan-500/5 transition-all duration-300">
                    <div className="text-cyan-400 mb-3">
                      <Globe className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-medium mb-1.5 text-foreground">Multi-Model AI</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">Route tasks to GPT-4o, Gemini, or Claude automatically — or choose the model yourself per query.</p>
                    {/* Connector line */}
                    <div className="absolute top-1/2 -right-8 w-8 h-px border-t border-dashed border-cyan-500/30" />
                    <div className="absolute top-1/2 -right-8 translate-x-full -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-cyan-400/50" />
                  </div>
                </div>

                {/* Center circle */}
                <div className="relative w-[400px] h-[400px] flex-shrink-0">
                  {/* Outer orbital ring */}
                  <div className="absolute -inset-8 rounded-full border border-indigo-500/20 animate-[spin_20s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-indigo-400/60" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full bg-purple-400/40" />
                  </div>
                  {/* Middle orbital ring */}
                  <div className="absolute -inset-4 rounded-full border border-purple-500/15 animate-[spin_30s_linear_infinite_reverse]">
                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-cyan-400/50" />
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-amber-400/40" />
                  </div>
                  {/* Inner ring glow */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 blur-sm" />
                  {/* Image circle */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border/40 shadow-2xl">
                    <Image
                      src="/workflow-visualization.png"
                      alt="JenesisAI Intelligence Layer — Sources to Outputs"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Center glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />
                </div>

                {/* Right column — 2 cards */}
                <div className="flex flex-col gap-6 w-[260px] flex-shrink-0">
                  {/* Card 3 */}
                  <div className="relative bg-card/90 backdrop-blur-md border border-border rounded-2xl p-5 shadow-lg hover:border-purple-500/30 hover:shadow-purple-500/5 transition-all duration-300">
                    <div className="text-purple-400 mb-3">
                      <Layers className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-medium mb-1.5 text-foreground">Visual Board</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">Assemble research, images, and AI outputs into presentations, plans, and documents on a freeform canvas.</p>
                    {/* Connector line */}
                    <div className="absolute top-1/2 -left-8 w-8 h-px border-t border-dashed border-purple-500/30" />
                    <div className="absolute top-1/2 -left-8 -translate-x-full -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-purple-400/50" />
                  </div>
                  {/* Card 4 */}
                  <div className="relative bg-card/90 backdrop-blur-md border border-border rounded-2xl p-5 shadow-lg hover:border-amber-500/30 hover:shadow-amber-500/5 transition-all duration-300">
                    <div className="text-amber-400 mb-3">
                      <Zap className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-medium mb-1.5 text-foreground">Live Agents</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">Browser control, code execution, and extensible plugins — agents that act on your behalf in real time.</p>
                    {/* Connector line */}
                    <div className="absolute top-1/2 -left-8 w-8 h-px border-t border-dashed border-amber-500/30" />
                    <div className="absolute top-1/2 -left-8 -translate-x-full -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-amber-400/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/15 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/5 via-purple-500/3 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              How it works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Go from a blank prompt to a polished, shareable board in three steps.
            </p>
          </div>

          {/* Horizontal step flow */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {[
                {
                  num: "1",
                  title: "Ask",
                  description:
                    "Enter a prompt or question. Agents autonomously search the web, aggregate sources, and return structured, cited results.",
                  color: "indigo",
                },
                {
                  num: "2",
                  title: "Build",
                  description:
                    "Research outputs, images, and data flow directly onto your visual board. Arrange and annotate freely to create documents, plans, or decks.",
                  color: "purple",
                },
                {
                  num: "3",
                  title: "Share",
                  description:
                    "Publish your board as a link, export to PDF, or collaborate live with your team. Every iteration is saved and versioned.",
                  color: "emerald",
                },
              ].map((step, i) => (
                <div key={i} className="relative flex">
                  <div className="flex-1 p-8">
                    {/* Number circle */}
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center text-lg font-semibold mb-5 ${step.color === "indigo"
                      ? "bg-indigo-500/15 text-indigo-400 ring-1 ring-indigo-500/30"
                      : step.color === "purple"
                        ? "bg-purple-500/15 text-purple-400 ring-1 ring-purple-500/30"
                        : "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30"
                      }`}>
                      {step.num}
                    </div>
                    <h3 className="text-xl font-medium mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {/* Vertical divider between steps */}
                  {i < 2 && (
                    <div className="hidden md:block w-px bg-border self-stretch" />
                  )}
                </div>
              ))}
            </div>
            {/* Outcome anchoring */}
            <p className="text-center text-muted-foreground mt-12 text-sm italic">
              What used to take a team hours now takes one person minutes.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.05] to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-indigo-500/8 via-purple-500/8 to-indigo-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-muted border border-border px-3 py-1.5 rounded-full text-xs font-medium mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Ready to go
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              Your next project starts here
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Start free — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-sm font-medium" asChild>
                <Link href={FRONTEND_PLATFORM_URL}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-accent rounded-full px-8 h-12 text-sm font-medium bg-transparent"
                asChild
              >
                <Link href="/contact">
                  Talk to Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <Image
                  src="/JenesisAI.png"
                  alt="JenesisAI Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-lg"
                />
                <span className="font-semibold text-lg">JenesisAI</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                A workspace where Imagination meets Intelligence
              </p>
            </div>

            {[
              {
                title: "Product",
                links: [
                  { name: "Pricing", href: "/pricing" },
                  { name: "Solutions", href: "/solutions" },
                  { name: "Documentation", href: "#" },
                ],
              },
              {
                title: "Company",
                links: [
                  { name: "Blog", href: "#" },
                  { name: "Careers", href: "#" },
                  { name: "Contact", href: "/contact" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { name: "Privacy", href: "#" },
                  { name: "Terms", href: "#" },
                  { name: "Security", href: "#" },
                ],
              },
            ].map((section, i) => (
              <div key={i}>
                <h3 className="font-medium text-sm mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link href={link.href} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs">© 2026 JenesisAI. All rights reserved.</p>
            <div className="flex gap-4">
              {["X", "GitHub", "LinkedIn"].map((social, i) => (
                <Link key={i} href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
