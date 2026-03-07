"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Sparkles, Layers, Workflow, Bot, Globe, Shield, Zap, Check, LayoutGrid } from "lucide-react"
import Navbar from "@/components/navbar"
import { LogoCarousel } from "@/components/logo-carousel"
import { HeroCarousel } from "@/components/hero-carousel"
import { VideoDemoModal } from "@/components/video-demo-modal"
import { TestimonialsMarquee } from "@/components/testimonials-marquee"
import { FRONTEND_PLATFORM_URL } from "@/lib/config"
import { trackGetStarted, trackBoardsClick, trackContactClick } from "@/lib/analytics"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ─── Hero Section ─── */}
      <section className="pt-32 pb-28 md:pb-32 relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none animate-glow" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-cyan-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none animate-glow" style={{ animationDelay: "2s" }} />

        {/* Announcement Banner */}
        <div className="flex justify-center mb-12">
          <Link
            href="#"
            className="group inline-flex items-center gap-2 bg-muted/80 hover:bg-accent border border-border/60 rounded-full px-4 py-2 text-sm transition-all hover:shadow-lg hover:shadow-indigo-500/5"
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
          <div className="max-w-4xl mx-auto text-center mb-14 md:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Research. Create. Share.
              <br />
              All with{" "}
              <span className="gradient-text-brand dark:gradient-text-brand gradient-text-brand-light">
                AI
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              The AI workspace that turns a question into a polished report,
              presentation, or visual board — in minutes, not hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 rounded-full px-8 h-12 text-sm font-medium transition-all" 
                asChild
              >
                <Link href={FRONTEND_PLATFORM_URL} onClick={() => trackGetStarted('hero')}>
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <VideoDemoModal />
            </div>
          </div>

          {/* Hero Product Carousel */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <HeroCarousel />
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
                title: "Smart Research",
                desc: "Agents search the web, extract key data, and compile structured findings — every source cited and ready to use.",
                svg: (
                  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                    <rect x="10" y="15" width="100" height="8" rx="2" fill="#818cf8" />
                    <rect x="10" y="30" width="80" height="8" rx="2" fill="#a78bfa" />
                    <rect x="10" y="45" width="90" height="8" rx="2" fill="#818cf8" />
                    <circle cx="95" cy="19" r="4" fill="#6366f1" />
                    <circle cx="95" cy="34" r="4" fill="#6366f1" />
                    <circle cx="95" cy="49" r="4" fill="#6366f1" />
                    <path d="M20 60 L30 70 L40 60" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M50 60 L60 70 L70 60" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                icon: <Layers className="h-6 w-6" />,
                title: "Drag-and-Drop Canvas",
                desc: "Drag research, images, and AI outputs onto a freeform board. Build presentations, reports, and plans visually.",
                svg: (
                  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                    <rect x="15" y="10" width="35" height="25" rx="3" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
                    <rect x="70" y="10" width="35" height="25" rx="3" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
                    <rect x="15" y="45" width="35" height="25" rx="3" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
                    <rect x="70" y="45" width="35" height="25" rx="3" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
                    <path d="M52.5 22.5 L67.5 22.5" stroke="#a78bfa" strokeWidth="2" strokeDasharray="2 2" />
                    <path d="M52.5 57.5 L67.5 57.5" stroke="#a78bfa" strokeWidth="2" strokeDasharray="2 2" />
                    <circle cx="60" cy="40" r="3" fill="#6366f1" />
                  </svg>
                ),
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Live Web & Code",
                desc: "Agents browse the web and run code on your behalf — pulling live data and computed results directly into your workspace.",
                svg: (
                  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                    {/* Browser window - left */}
                    <rect x="15" y="20" width="45" height="30" rx="3" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
                    <rect x="17" y="23" width="41" height="3" rx="1" fill="#a78bfa" />
                    <circle cx="55" cy="24.5" r="1.5" fill="#6366f1" />
                    <rect x="18" y="28" width="38" height="2.5" rx="0.5" fill="#c4b5fd" />
                    <rect x="18" y="32" width="32" height="2" rx="0.5" fill="#c4b5fd" />
                    <rect x="18" y="36" width="28" height="2" rx="0.5" fill="#c4b5fd" />
                    <rect x="18" y="40" width="25" height="2" rx="0.5" fill="#c4b5fd" />
                    {/* Web icon - small globe above browser */}
                    <circle cx="37.5" cy="15" r="4" fill="none" stroke="#6366f1" strokeWidth="1.5" />
                    <path d="M33.5 15 Q35.5 13 37.5 15 Q39.5 17 41.5 15" stroke="#6366f1" strokeWidth="1" fill="none" />
                    <path d="M33.5 15 Q35.5 17 37.5 15 Q39.5 13 41.5 15" stroke="#6366f1" strokeWidth="1" fill="none" />
                    {/* Code symbols - right */}
                    <rect x="75" y="25" width="30" height="20" rx="2" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
                    <path d="M78 28 L88 28" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M78 32 L85 32" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M78 36 L87 36" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M78 40 L82 40" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Code brackets */}
                    <path d="M72 30 L68 30 L68 40 L72 40" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M105 30 L109 30 L109 40 L105 40" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" fill="none" />
                    {/* Arrow connecting */}
                    <path d="M63 35 L72 35" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
                    <path d="M68 31 L72 35 L68 39" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                ),
              },
              {
                icon: <Workflow className="h-6 w-6" />,
                title: "One-Click Sharing",
                desc: "Publish boards as shareable links or export to documents. Built for teams that move fast.",
                svg: (
                  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                    {/* Board in center */}
                    <rect x="40" y="25" width="40" height="30" rx="2" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
                    <rect x="45" y="30" width="30" height="3" rx="1" fill="#a78bfa" />
                    <rect x="45" y="36" width="25" height="2" rx="1" fill="#c4b5fd" />
                    <rect x="45" y="41" width="20" height="2" rx="1" fill="#c4b5fd" />
                    <circle cx="70" cy="32" r="2" fill="#6366f1" />
                    {/* People/users around */}
                    <circle cx="20" cy="30" r="4" fill="#a78bfa" />
                    <path d="M20 34 L20 38 L18 40" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M20 34 L20 38 L22 40" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="100" cy="30" r="4" fill="#a78bfa" />
                    <path d="M100 34 L100 38 L98 40" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M100 34 L100 38 L102 40" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="15" cy="55" r="4" fill="#a78bfa" />
                    <path d="M15 59 L15 63 L13 65" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M15 59 L15 63 L17 65" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="105" cy="55" r="4" fill="#a78bfa" />
                    <path d="M105 59 L105 63 L103 65" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M105 59 L105 63 L107 65" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Connection lines */}
                    <path d="M24 30 Q30 35 40 35" stroke="#c4b5fd" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                    <path d="M96 30 Q90 35 80 35" stroke="#c4b5fd" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                    <path d="M19 55 Q30 60 40 55" stroke="#c4b5fd" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                    <path d="M101 55 Q90 60 80 55" stroke="#c4b5fd" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                  </svg>
                ),
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Best AI, Auto-Routed",
                desc: "GPT-4o, Gemini, Claude — tasks are routed to the optimal model automatically, or you choose per query.",
                svg: (
                  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                    {/* AI Models */}
                    <circle cx="20" cy="20" r="7" fill="#a78bfa" />
                    <text x="20" y="24" textAnchor="middle" fontSize="8" fill="#6366f1" fontWeight="600">G</text>
                    <circle cx="50" cy="20" r="7" fill="#a78bfa" />
                    <text x="50" y="24" textAnchor="middle" fontSize="8" fill="#6366f1" fontWeight="600">G</text>
                    <circle cx="80" cy="20" r="7" fill="#a78bfa" />
                    <text x="80" y="24" textAnchor="middle" fontSize="8" fill="#6366f1" fontWeight="600">C</text>
                    {/* Routing lines */}
                    <path d="M20 27 Q30 35 50 50" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M50 27 Q50 35 50 50" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M80 27 Q70 35 50 50" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" fill="none" />
                    {/* Central hub */}
                    <circle cx="50" cy="50" r="10" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
                    <circle cx="50" cy="50" r="5" fill="#6366f1" />
                    {/* Output */}
                    <rect x="35" y="65" width="30" height="10" rx="2" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
                    <path d="M50 60 L50 65" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
                    <rect x="38" y="68" width="24" height="2" rx="1" fill="#a78bfa" />
                  </svg>
                ),
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Plug-In Anything",
                desc: "Add browser control, code execution, and custom tools. The platform grows with your workflow.",
                svg: (
                  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                    {/* Main platform/core */}
                    <rect x="35" y="30" width="50" height="30" rx="3" fill="#e0e7ff" stroke="#818cf8" strokeWidth="2" />
                    <rect x="40" y="35" width="40" height="4" rx="1" fill="#a78bfa" />
                    <rect x="40" y="42" width="30" height="3" rx="1" fill="#c4b5fd" />
                    <rect x="40" y="48" width="35" height="3" rx="1" fill="#c4b5fd" />
                    <rect x="40" y="54" width="25" height="3" rx="1" fill="#c4b5fd" />
                    {/* Plugin modules - top */}
                    <rect x="20" y="15" width="20" height="12" rx="2" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
                    <rect x="23" y="18" width="14" height="2" rx="0.5" fill="#a78bfa" />
                    <rect x="23" y="22" width="10" height="1.5" rx="0.5" fill="#c4b5fd" />
                    <path d="M30 30 L35 35" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
                    {/* Plugin modules - bottom */}
                    <rect x="80" y="53" width="20" height="12" rx="2" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
                    <rect x="83" y="56" width="14" height="2" rx="0.5" fill="#a78bfa" />
                    <rect x="83" y="60" width="10" height="1.5" rx="0.5" fill="#c4b5fd" />
                    <path d="M85 53 L80 48" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
                    {/* Plugin modules - right */}
                    <rect x="90" y="35" width="12" height="20" rx="2" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
                    <rect x="93" y="38" width="6" height="2" rx="0.5" fill="#a78bfa" />
                    <rect x="93" y="42" width="6" height="1.5" rx="0.5" fill="#c4b5fd" />
                    <rect x="93" y="46" width="6" height="1.5" rx="0.5" fill="#c4b5fd" />
                    <path d="M90 45 L85 45" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
                    {/* Plus signs on plugins */}
                    <circle cx="30" cy="21" r="3" fill="#6366f1" />
                    <path d="M30 21 L30 18 M30 21 L30 24 M30 21 L27 21 M30 21 L33 21" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
                    <circle cx="90" cy="59" r="3" fill="#6366f1" />
                    <path d="M90 59 L90 56 M90 59 L90 62 M90 59 L87 59 M90 59 L93 59" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
                    <circle cx="96" cy="45" r="3" fill="#6366f1" />
                    <path d="M96 45 L96 42 M96 45 L96 48 M96 45 L93 45 M96 45 L99 45" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((f, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-card border border-border rounded-xl transition-all duration-300 group hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5"
              >
                {/* SVG Illustration */}
                <div className="absolute top-0 right-0 w-32 h-24 overflow-hidden opacity-40 group-hover:opacity-60 transition-opacity">
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 text-primary">
                    {f.svg}
                  </div>
                </div>
                
                {/* Icon */}
                <div className="absolute top-6 left-6 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-muted/50 border border-border/50 group-hover:bg-[#e0e7ff] group-hover:border-primary/40 transition-colors z-10">
                  <div className="text-muted-foreground group-hover:text-[#818cf8] transition-colors">
                    {f.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="pt-24 pb-6 px-6">
                  <h3 className="text-base font-semibold mb-2 text-foreground">{f.title}</h3>
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

      {/* ─── Testimonials ─── */}
      <TestimonialsMarquee />

      {/* ─── Community Boards Preview ─── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-muted/80 border border-border/60 px-3 py-1.5 rounded-full text-xs font-medium mb-6">
              <LayoutGrid className="h-3.5 w-3.5 text-indigo-400" />
              Community Showcase
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              See What Others Are Building
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Explore boards created by our community. From research reports to visual presentations, see what&apos;s possible with JenesisAI.
            </p>
          </div>

          {/* Clickable Screenshot */}
          <Link
            href={`${FRONTEND_PLATFORM_URL}/boards`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block max-w-6xl mx-auto"
            onClick={() => trackBoardsClick()}
          >
            <div className="relative rounded-2xl border border-border/60 overflow-hidden shadow-2xl bg-gradient-to-br from-muted/30 to-muted/60 hover:border-primary/50 transition-all duration-500 hover:shadow-indigo-500/20 hover:-translate-y-1">
              {/* Screenshot placeholder */}
              <div className="relative w-full aspect-[16/9] bg-muted/50">
                {/* Light mode image */}
                <Image
                  src="/slides/slide4_light.png"
                  alt="JenesisAI Community Boards Gallery"
                  fill
                  className="object-cover dark:hidden transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                {/* Dark mode image */}
                <Image
                  src="/slides/slide4_dark.png"
                  alt="JenesisAI Community Boards Gallery"
                  fill
                  className="object-cover hidden dark:block transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="text-center space-y-4 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                    <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                      <LayoutGrid className="h-5 w-5" />
                      <span className="font-semibold">Browse All Boards</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-md border border-border/60 px-3.5 py-2 rounded-full text-xs font-medium shadow-xl group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                <span>Click to explore →</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.05] to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-indigo-500/8 via-purple-500/8 to-indigo-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-muted/80 border border-border/60 px-3 py-1.5 rounded-full text-xs font-medium mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Ready to go
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              Your next project starts here
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Start free — no credit card required. Join thousands of builders using JenesisAI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 rounded-full px-8 h-12 text-sm font-medium transition-all" 
                asChild
              >
                <Link href={FRONTEND_PLATFORM_URL} onClick={() => trackGetStarted('cta')}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-accent/80 hover:border-primary/40 rounded-full px-8 h-12 text-sm font-medium bg-transparent transition-all"
                asChild
              >
                <Link href="/contact" onClick={() => trackContactClick('cta')}>
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
                ],
              },
              {
                title: "Company",
                links: [
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
              <Link href="https://x.com/jenesisai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
                X
              </Link>
              <Link href="https://github.com/Jenesis-Lab" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
                GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/jenesis-ai-2517253ab/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
