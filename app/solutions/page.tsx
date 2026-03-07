"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Layers, Globe, Zap, Users, Workflow } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FRONTEND_PLATFORM_URL } from "@/lib/config"
import { trackGetStarted, trackContactClick } from "@/lib/analytics"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-muted border border-border px-3 py-1.5 rounded-full text-xs font-medium mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Built for every{" "}
              <span className="gradient-text-brand dark:gradient-text-brand gradient-text-brand-light">
                workflow
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re a solo researcher, a creative team, or an enterprise — JenesisAI adapts to how you work.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Bot className="h-6 w-6" />,
                title: "Research & Analysis",
                desc: "AI agents search the web, aggregate sources, and deliver structured reports with full citations — in seconds, not hours.",
                audience: "Analysts, Consultants, Students",
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
                title: "Visual Presentations",
                desc: "Turn research into polished visual boards, presentations, and documents on a drag-and-drop canvas — with AI that helps layout and design.",
                audience: "Marketers, Designers, Product Teams",
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
                icon: <Users className="h-6 w-6" />,
                title: "Team Collaboration",
                desc: "Real-time shared workspaces where everyone edits together. AI agents assist each team member independently while the whole team stays in sync.",
                audience: "Teams, Agencies, Departments",
                svg: (
                  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                    <circle cx="25" cy="25" r="8" fill="#a78bfa" />
                    <circle cx="60" cy="25" r="8" fill="#a78bfa" />
                    <circle cx="95" cy="25" r="8" fill="#a78bfa" />
                    <path d="M15 35 Q30 45 45 35" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M45 35 Q60 45 75 35" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M75 35 Q90 45 105 35" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <rect x="20" y="50" width="80" height="20" rx="3" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
                    <rect x="25" y="55" width="70" height="3" rx="1" fill="#a78bfa" />
                    <rect x="25" y="61" width="50" height="3" rx="1" fill="#c4b5fd" />
                  </svg>
                ),
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Multi-Model Intelligence",
                desc: "Route tasks to the best AI model automatically — GPT-4o, Gemini, Claude — or choose manually. One workspace, every model.",
                audience: "AI Engineers, Power Users",
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
                icon: <Workflow className="h-6 w-6" />,
                title: "Browser & Code Agents",
                desc: "Agents browse the web and run code on your behalf — pulling live data, executing scripts, and feeding results directly into your workspace.",
                audience: "Developers, Automators",
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
                icon: <Zap className="h-6 w-6" />,
                title: "Publish & Share",
                desc: "Export your boards as shareable links, PDFs, or documents. Present your work to stakeholders with one click — every version saved automatically.",
                audience: "Everyone",
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
            ].map((solution, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-card border border-border rounded-xl transition-all duration-300 group hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5"
              >
                {/* SVG Illustration */}
                <div className="absolute top-0 right-0 w-32 h-24 overflow-hidden opacity-40 group-hover:opacity-60 transition-opacity">
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 text-primary">
                    {solution.svg}
                  </div>
                </div>
                
                {/* Icon */}
                <div className="absolute top-6 left-6 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-muted/50 border border-border/50 group-hover:bg-[#e0e7ff] group-hover:border-primary/40 transition-colors z-10">
                  <div className="text-muted-foreground group-hover:text-[#818cf8] transition-colors">
                    {solution.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="pt-24 pb-6 px-6">
                  <h3 className="text-base font-semibold mb-2 text-foreground">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{solution.desc}</p>
                  <p className="text-xs text-muted-foreground/60 font-medium uppercase tracking-wider">
                    {solution.audience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (brief) */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/15 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              From question to output in minutes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              No matter the use case, the workflow is simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto">
            {[
              { num: "1", title: "Ask", desc: "Enter a question or upload context. Agents research, gather data, and return structured results." },
              { num: "2", title: "Build", desc: "Drag results onto the canvas. Arrange, annotate, and let AI handle the layout and formatting." },
              { num: "3", title: "Share", desc: "Publish as a link, export to PDF, or collaborate live with your team. Every version is saved." },
            ].map((step, i) => (
              <div key={i} className="relative flex">
                <div className="flex-1 p-8">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center text-lg font-semibold mb-5 bg-muted/50 border border-border/50 text-foreground">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block w-px bg-border self-stretch" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.05] to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Ready to try it?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Start free — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-sm font-medium" asChild>
                <Link href={FRONTEND_PLATFORM_URL} onClick={() => trackGetStarted('solutions')}>
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-accent rounded-full px-8 h-12 text-sm font-medium bg-transparent"
                asChild
              >
                <Link href="/contact" onClick={() => trackContactClick('solutions')}>
                  Talk to Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
