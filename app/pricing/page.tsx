"use client"

import type React from "react"
import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Zap, Layers, Crown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"
import { FRONTEND_PLATFORM_URL } from "@/lib/config"
import { trackPricingView, trackPricingPlanClick, trackGetStarted, trackContactClick } from "@/lib/analytics"

type Plan = {
  id: string
  name: string
  description: string
  price: number
  icon: React.ReactNode
  features: string[]
  popular?: boolean
}

const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for getting started",
    price: 0,
    icon: <Zap className="h-6 w-6" />,
    features: [
      "AI assistance with GPT-OSS & DeepSeek",
      "100,000 Credits / Month",
      "2 Deep Researches / Month",
      "Web search included",
      "Community support",
    ],
  },
  {
    id: "plus",
    name: "Pro",
    description: "For daily power users",
    price: 20,
    icon: <Layers className="h-6 w-6" />,
    popular: true,
    features: [
      "Everything in Free",
      "5,000,000 Credits / Month",
      "5 Deep Researches / Month",
      "Access to latest models (Claude, GPT)",
      "Unlimited conversations",
      "Priority support",
      "All integrations",
      "Advanced analytics",
    ],
  },
  {
    id: "pro",
    name: "Ultra",
    description: "For teams and professionals",
    price: 100,
    icon: <Crown className="h-6 w-6" />,
    features: [
      "Everything in Pro",
      "15,000,000 Credits / Month",
      "10 Deep Researches / Month",
      "Team collaboration",
      "Shared workspaces",
      "Admin controls",
      "Dedicated support",
    ],
  },
]

export default function PricingPage() {
  useEffect(() => {
    trackPricingView()
  }, [])

  const getPlanColors = (planId: string, isPopular: boolean) => {
    if (isPopular) {
      return {
        ring: "ring-2 ring-indigo-500",
        iconBg: "bg-indigo-500/20 text-indigo-400 ring-indigo-500/30",
        checkBg: "bg-indigo-500 text-white",
        hover: "",
      }
    }
    switch (planId) {
      case "pro":
        return {
          ring: "ring-border",
          iconBg: "bg-amber-500/20 text-amber-400 ring-amber-500/30 group-hover:bg-amber-500/30",
          checkBg: "bg-muted text-muted-foreground group-hover:bg-amber-500 group-hover:text-white",
          hover: "hover:ring-amber-500/50",
        }
      default:
        return {
          ring: "ring-border",
          iconBg: "bg-muted text-muted-foreground ring-border group-hover:bg-accent",
          checkBg: "bg-muted text-muted-foreground group-hover:bg-accent",
          hover: "hover:ring-border/80",
        }
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-sm text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Simple, transparent pricing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Plans for all sizes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team. Scale as you grow with transparent pricing and no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const colors = getPlanColors(plan.id, plan.popular || false)

              return (
                <div
                  key={plan.id}
                  className={cn(
                    "group relative flex flex-col rounded-2xl bg-card ring-1 transition-all duration-300",
                    colors.ring,
                    colors.hover,
                  )}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-8 flex flex-col flex-1">
                    {/* Icon & Name */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-all",
                          colors.iconBg,
                        )}
                      >
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{plan.name}</h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">{plan.price === 0 ? "Free" : `$${plan.price}`}</span>
                        {plan.price > 0 && <span className="text-muted-foreground">/month</span>}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className={cn(
                              "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all mt-0.5",
                              colors.checkBg,
                            )}
                          >
                            <Check className="h-3 w-3" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      className={cn(
                        "w-full transition-all",
                        plan.popular
                          ? "bg-indigo-500 hover:bg-indigo-600 text-white"
                          : "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
                      )}
                      size="lg"
                      asChild
                    >
                      <Link href={FRONTEND_PLATFORM_URL} onClick={() => trackPricingPlanClick(plan.name.toLowerCase())}>
                        {plan.price === 0 ? "Get Started" : "Upgrade Now"}
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-6 mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about JenesisAI</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What are Credits?",
                a: "Credits are the currency used within JenesisAI to perform AI actions. Every time you chat with an agent, run a task, or use an extension, it consumes credits. Different models and complexities consume different amounts of credits.",
              },
              {
                q: "What is the difference between the Free and Pro plan?",
                a: "The Free plan includes 100,000 credits per month, 2 Deep Researches, and community support. The Pro plan unlocks 5,000,000 credits per month, 5 Deep Researches, unlimited conversations, priority support, all integrations, and advanced analytics.",
              },
              {
                q: "What happens if I run out of credits?",
                a: "On the Free plan, you receive a small daily topup when credits are low. Pro includes 5M credits per month and Ultra includes 15M credits per month, with more Deep Researches and team features.",
              },
              {
                q: "Can I cancel my subscription at any time?",
                a: "Yes, you can cancel your Pro or Ultra subscription at any time. Your benefits will continue until the end of your current billing cycle.",
              },
              {
                q: "What are Spaces and Extensions?",
                a: "Spaces are dedicated workspaces where you can organize your agents and tasks. Extensions are powerful tools that give your agents extra capabilities, like browsing the web, reading files, or connecting to external apps.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 hover:bg-accent transition-colors"
              >
                <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-6 mt-32">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-border rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Start free — no credit card required. Upgrade as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-accent bg-transparent"
                onClick={() => trackContactClick('pricing')}
              >
                Schedule Demo
              </Button>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href={FRONTEND_PLATFORM_URL} onClick={() => trackGetStarted('pricing')}>Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
