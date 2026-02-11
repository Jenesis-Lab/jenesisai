import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Layers, Globe, Zap, Users, Workflow } from "lucide-react"
import Navbar from "@/components/navbar"
import { FRONTEND_PLATFORM_URL } from "@/lib/config"

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
                color: "indigo",
                iconBg: "bg-indigo-500/15 text-indigo-400 ring-1 ring-indigo-500/20",
                gradient: "from-indigo-500/20 via-indigo-500/5 to-transparent",
                borderHover: "hover:border-indigo-500/30",
                title: "Research & Analysis",
                desc: "AI agents search the web, aggregate sources, and deliver structured reports with full citations — in seconds, not hours.",
                audience: "Analysts, Consultants, Students",
              },
              {
                icon: <Layers className="h-6 w-6" />,
                color: "purple",
                iconBg: "bg-purple-500/15 text-purple-400 ring-1 ring-purple-500/20",
                gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
                borderHover: "hover:border-purple-500/30",
                title: "Visual Presentations",
                desc: "Turn research into polished visual boards, presentations, and documents on a drag-and-drop canvas — with AI that helps layout and design.",
                audience: "Marketers, Designers, Product Teams",
              },
              {
                icon: <Users className="h-6 w-6" />,
                color: "cyan",
                iconBg: "bg-cyan-500/15 text-cyan-400 ring-1 ring-cyan-500/20",
                gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
                borderHover: "hover:border-cyan-500/30",
                title: "Team Collaboration",
                desc: "Real-time shared workspaces where everyone edits together. AI agents assist each team member independently while the whole team stays in sync.",
                audience: "Teams, Agencies, Departments",
              },
              {
                icon: <Globe className="h-6 w-6" />,
                color: "amber",
                iconBg: "bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/20",
                gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
                borderHover: "hover:border-amber-500/30",
                title: "Multi-Model Intelligence",
                desc: "Route tasks to the best AI model automatically — GPT-4o, Gemini, Claude — or choose manually. One workspace, every model.",
                audience: "AI Engineers, Power Users",
              },
              {
                icon: <Workflow className="h-6 w-6" />,
                color: "emerald",
                iconBg: "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/20",
                gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
                borderHover: "hover:border-emerald-500/30",
                title: "Browser & Code Agents",
                desc: "Agents browse the web and run code on your behalf — pulling live data, executing scripts, and feeding results directly into your workspace.",
                audience: "Developers, Automators",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                color: "rose",
                iconBg: "bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/20",
                gradient: "from-rose-500/20 via-rose-500/5 to-transparent",
                borderHover: "hover:border-rose-500/30",
                title: "Publish & Share",
                desc: "Export your boards as shareable links, PDFs, or documents. Present your work to stakeholders with one click — every version saved automatically.",
                audience: "Everyone",
              },
            ].map((solution, i) => (
              <div
                key={i}
                className={`relative overflow-hidden bg-card border border-border rounded-2xl transition-all duration-300 group hover:-translate-y-1 ${solution.borderHover} hover:shadow-lg`}
              >
                {/* Gradient header */}
                <div className={`relative h-20 bg-gradient-to-br ${solution.gradient} border-b border-border/50`}>
                  <div className={`absolute -bottom-5 left-6 inline-flex items-center justify-center h-10 w-10 rounded-xl ${solution.iconBg} shadow-sm`}>
                    {solution.icon}
                  </div>
                </div>
                {/* Content */}
                <div className="pt-8 pb-6 px-6">
                  <h3 className="text-base font-medium mb-2 text-foreground">{solution.title}</h3>
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
              { num: "1", title: "Ask", desc: "Enter a question or upload context. Agents research, gather data, and return structured results.", color: "indigo" },
              { num: "2", title: "Build", desc: "Drag results onto the canvas. Arrange, annotate, and let AI handle the layout and formatting.", color: "purple" },
              { num: "3", title: "Share", desc: "Publish as a link, export to PDF, or collaborate live with your team. Every version is saved.", color: "emerald" },
            ].map((step, i) => (
              <div key={i} className="relative flex">
                <div className="flex-1 p-8">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center text-lg font-semibold mb-5 ${step.color === "indigo"
                      ? "bg-indigo-500/15 text-indigo-400 ring-1 ring-indigo-500/30"
                      : step.color === "purple"
                        ? "bg-purple-500/15 text-purple-400 ring-1 ring-purple-500/30"
                        : "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30"
                    }`}>
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
                <Link href={FRONTEND_PLATFORM_URL}>
                  Get Started Free
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

      {/* Footer (matching main page) */}
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
                From question to polished output — powered by AI.
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
