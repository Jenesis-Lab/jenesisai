import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Shield, Zap, Database, Check, Lock } from "lucide-react"
import Navbar from "@/components/navbar"
import { LogoCarousel } from "@/components/logo-carousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Subtle gradient orb */}
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Announcement Banner */}
        <div className="flex justify-center mb-12">
          <Link
            href="#"
            className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/70">New Release</span>
            <span className="text-white/40">|</span>
            <span className="text-white/90">Streamline your ML workflow with v2.0</span>
            <ChevronRight className="h-4 w-4 text-white/50 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-8">
                Enterprise AI
                <br />
                <span className="text-white/50">Orchestration Platform</span>
              </h1>

              <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                Deploy AI at enterprise scale with security-first architecture. Complete data sovereignty, seamless
                integration, and compliance built in.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
                <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 text-sm font-medium">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-12 text-sm font-medium bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-xs text-white/40">
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span>SOC 2 Type II</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span>HIPAA Ready</span>
                </div>
              </div>
            </div>

            {/* Right - Dashboard Preview Placeholder */}
            <div className="relative">
              <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] rounded-2xl border border-white/10 overflow-hidden">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="bg-white/5 rounded px-3 py-1 text-[10px] text-white/40 text-center max-w-[200px] mx-auto">
                      app.jenesisai.com
                    </div>
                  </div>
                </div>

                {/* Dashboard Mockup */}
                <div className="p-6 space-y-4 min-h-[400px]">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center text-black text-xs font-bold">
                        J
                      </div>
                      <div className="h-2 w-20 bg-white/10 rounded" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 rounded-lg bg-white/5" />
                      <div className="h-8 w-8 rounded-lg bg-white/5" />
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { label: "Active Models", value: "24", color: "emerald" },
                      { label: "Predictions/hr", value: "1.2M", color: "blue" },
                      { label: "Accuracy", value: "99.4%", color: "purple" },
                      { label: "Latency", value: "12ms", color: "amber" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-3">
                        <div
                          className={`h-1 w-6 rounded-full mb-2 ${
                            stat.color === "emerald"
                              ? "bg-emerald-400/60"
                              : stat.color === "blue"
                                ? "bg-blue-400/60"
                                : stat.color === "purple"
                                  ? "bg-purple-400/60"
                                  : "bg-amber-400/60"
                          }`}
                        />
                        <div className="text-white/90 text-sm font-medium">{stat.value}</div>
                        <div className="text-white/30 text-[10px]">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="bg-white/5 rounded-xl p-4 h-36">
                    <div className="flex items-end justify-between h-full gap-1 px-2">
                      {[35, 55, 40, 70, 50, 85, 60, 75, 45, 90, 55, 80].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-white/30 to-white/10 rounded-t"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Table Rows */}
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                        <div className="h-6 w-6 rounded bg-white/10" />
                        <div className="flex-1 h-1.5 bg-white/10 rounded" />
                        <div className="h-5 w-14 bg-emerald-500/20 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow Effects */}
              <div className="absolute -top-8 -right-8 h-32 w-32 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 bg-indigo-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />

      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              Core Platform Capabilities
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Our comprehensive suite of features empowers your team to build, deploy, and scale AI solutions with
              confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Enterprise Intelligence */}
            <div className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 rounded-2xl p-8 transition-all duration-300">
              <div className="mb-6 h-48 bg-gradient-to-br from-white/[0.02] to-white/[0.05] rounded-xl flex items-center justify-center overflow-hidden">
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
              <h3 className="text-xl font-medium mb-3 text-white">Enterprise Intelligence</h3>
              <p className="text-white/50 mb-5 leading-relaxed text-sm">
                Our AI-driven intelligence platform analyzes enterprise data across silos, providing contextual
                capabilities tailored to each individual's role and permissions.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm group/link"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Seamless Integration */}
            <div className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 rounded-2xl p-8 transition-all duration-300">
              <div className="mb-6 h-48 bg-gradient-to-br from-white/[0.02] to-white/[0.05] rounded-xl flex items-center justify-center overflow-hidden">
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
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="25" cy="125" r="8" fill="rgba(16, 185, 129, 0.8)" />
                  <path
                    d="M21 125 L24 128 L29 122"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Seamless Integration</h3>
              <p className="text-white/50 mb-5 leading-relaxed text-sm">
                Configurable, API-first connectors and single-sign-on support mean you bolt JenesisAI into your existing
                systems in days, not months.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm group/link"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Data-driven Insights */}
            <div className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 rounded-2xl p-8 transition-all duration-300">
              <div className="mb-6 h-48 bg-gradient-to-br from-white/[0.02] to-white/[0.05] rounded-xl flex items-center justify-center overflow-hidden">
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
              <h3 className="text-xl font-medium mb-3 text-white">Data-driven Insights</h3>
              <p className="text-white/50 mb-5 leading-relaxed text-sm">
                Gain insights into real-time model metrics and user behavior through AI analytics with built-in
                automated alerts and on-demand reports.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm group/link"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features - Bento Grid */}
      <section className="py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Security, scalability, and seamless integration for enterprise AI deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Privacy Architecture */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-medium">Privacy Architecture</h3>
              </div>
              <p className="text-white/50 mb-6 text-sm leading-relaxed">
                Privacy-centric architecture with on-prem LLMs and LoRA adapters ensures complete data control. Your
                sensitive enterprise data never leaves your secure environment.
              </p>
              <ul className="space-y-3">
                {[
                  "On-premises deployment options",
                  "LoRA adapters for efficient customization",
                  "Complete data sovereignty",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-white/70">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise Integration */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Database className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-medium">Enterprise Integration</h3>
              </div>
              <p className="text-white/50 mb-6 text-sm leading-relaxed">
                Native RAG and function calling capabilities enable seamless system connectivity with your existing
                enterprise software stack.
              </p>
              <ul className="space-y-3">
                {[
                  "Native RAG for accurate responses",
                  "Function calling for system interaction",
                  "API-first flexible connectivity",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-white/70">
                    <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Agentic Automation */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-medium">Agentic Automation</h3>
              </div>
              <p className="text-white/50 mb-6 text-sm leading-relaxed">
                Orchestrated AI agents handle tasks end-to-end autonomously, reducing manual workflows and increasing
                operational efficiency.
              </p>
              <ul className="space-y-3">
                {[
                  "End-to-end workflow automation",
                  "Intelligent task prioritization",
                  "Adaptive learning from interactions",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-white/70">
                    <Check className="h-4 w-4 text-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Model Governance */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Lock className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-medium">Model Governance</h3>
              </div>
              <p className="text-white/50 mb-6 text-sm leading-relaxed">
                Comprehensive governance framework with audit trails, model registry, and automated compliance
                reporting.
              </p>
              <ul className="space-y-3">
                {["Immutable audit trails", "Centralized model registry", "Automated compliance reports"].map(
                  (item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-white/70">
                      <Check className="h-4 w-4 text-amber-400 flex-shrink-0" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Model Governance Deep Dive */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              Enterprise Model Governance
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Complete compliance framework with real-world enterprise applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                num: "01",
                title: "Comprehensive Audit Trails",
                description:
                  "When a major financial institution needed GDPR compliance for their customer service AI, our audit trails provided exact records of training data lineage and prediction explanations—satisfying regulators and avoiding potential fines of €20M.",
              },
              {
                num: "02",
                title: "Centralized Model Registry",
                description:
                  "A Fortune 100 healthcare provider maintains 200+ specialized models across 12 departments with HIPAA-compliant version control and rigorous approval workflows for diagnostic AI models.",
              },
              {
                num: "03",
                title: "Automated Compliance Reporting",
                description:
                  "A multinational bank automated quarterly AI risk assessments, reducing compliance workload by 78% while continuously monitoring for model drift, bias, and strengthening risk posture.",
              },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 h-full hover:border-white/10 transition-all">
                  <div className="text-3xl font-semibold text-white/10 mb-4">{item.num}</div>
                  <h3 className="text-lg font-medium mb-4 text-white">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Visual */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
                <div className="space-y-4">
                  {[
                    { label: "Model Deployment", status: "Active", color: "emerald" },
                    { label: "CI/CD Pipeline", status: "Running", color: "blue" },
                    { label: "Security Scan", status: "Passed", color: "emerald" },
                    { label: "Auto Scaling", status: "Enabled", color: "purple" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                      <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <div
                          className={`h-3 w-3 rounded ${
                            item.color === "emerald"
                              ? "bg-emerald-400/60"
                              : item.color === "blue"
                                ? "bg-blue-400/60"
                                : "bg-purple-400/60"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-white/80">{item.label}</div>
                      </div>
                      <div
                        className={`text-xs px-3 py-1 rounded-full ${
                          item.color === "emerald"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : item.color === "blue"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Content */}
              <div>
                <div className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-4">
                  For Technical Teams & Enterprise Leaders
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                  Enterprise-grade development with measurable ROI
                </h2>
                <p className="text-white/50 mb-8 leading-relaxed">
                  Built by enterprise engineers for enterprise engineers. Our secure CI/CD pipeline integrates with
                  existing DevSecOps tools while adding AI-specific governance controls. JenesisAI delivers quantifiable
                  business impact with Fortune 500 implementations consistently yielding multi-million dollar cost
                  savings.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { value: "327%", label: "Average ROI" },
                    { value: "42%", label: "Cost Reduction" },
                    { value: "3.4x", label: "Faster Deployment" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-2xl md:text-3xl font-semibold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-white/40">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <ul className="space-y-3">
                  {[
                    "Secure CI/CD with automated vulnerability scanning",
                    "Enterprise Git integration with model version control",
                    "Containerized deployment with automatic scaling",
                    "ROI tracking dashboard with real-time metrics",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
                      <Check className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-3xl p-10 md:p-14">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-xs font-medium mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                For Investors
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
                Driving Innovation in Enterprise AI
              </h2>
              <p className="text-white/50 mb-10 leading-relaxed">
                JenesisAI is positioned at the forefront of the enterprise AI revolution with proprietary technology and
                rapidly growing customer base.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                {[
                  { value: "Ongoing", label: "Seed Funding" },
                  { value: "$3.4T", label: "Global AI Market by '34" },
                  { value: "426%", label: "Market Growth ('24–'34)" },
                  { value: "99.9%", label: "Platform Uptime" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-xl md:text-2xl font-semibold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-white/40">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 text-sm font-medium">
                Investor Relations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              Ready to transform your enterprise with AI?
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              Deploy secure, scalable, and compliant AI solutions that drive measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 text-sm font-medium">
                Request Enterprise Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-12 text-sm font-medium bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center text-black font-bold text-sm">
                  J
                </div>
                <span className="font-semibold text-lg">JenesisAI</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                Enterprise AI orchestration platform with security-first architecture.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: [
                  { name: "Pricing", href: "/pricing" },
                  { name: "Documentation", href: "#" },
                  { name: "API Reference", href: "#" },
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
                      <Link href={link.href} className="text-white/40 hover:text-white text-sm transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">© 2025 JenesisAI. All rights reserved.</p>
            <div className="flex gap-4">
              {["X", "GitHub", "LinkedIn"].map((social, i) => (
                <Link key={i} href="#" className="text-white/30 hover:text-white text-xs transition-colors">
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
