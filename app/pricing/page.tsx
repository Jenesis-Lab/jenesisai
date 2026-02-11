"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Zap, Layers, Crown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"
import { FRONTEND_PLATFORM_URL } from "@/lib/config"

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
    description: "Perfect for individuals getting started with AI.",
    price: 0,
    icon: <Zap className="h-6 w-6" />,
    features: [
      "Starter: Lifetime 1K credits",
      "Daily topup on-low credits",
      "Agentic Chat & Boards",
      "Spaces and Extensions",
      "Publish & Share",
    ],
  },
  {
    id: "plus",
    name: "Plus",
    description: "For power users who need more resources and capabilities.",
    price: 20,
    icon: <Layers className="h-6 w-6" />,
    popular: true,
    features: [
      "Plus: Monthly 100K credits",
      "Daily topup 10K credits",
      "Access to all basic features",
      "Unlimited Spaces, and Extensions",
      "Export, Publish & Share",
      "Basic email support",
    ],
  },
  {
    id: "pro",
    name: "Ultra Max",
    description: "For teams requiring unlimited access and priority support.",
    price: 100,
    icon: <Crown className="h-6 w-6" />,
    features: [
      "Pro: Monthly 1M credits",
      "Daily topup + life-time + on-demand credits",
      "Unlimited Spaces, Extensions & Boards",
      "Team Collaboration, Sharing & Editing",
      "Custom Extensions & Development",
      "Priority chat and email support",
    ],
  },
]

export default function PricingPage() {
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
                      <Link href={FRONTEND_PLATFORM_URL}>
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
                q: "What is the difference between the Free and Plus plan?",
                a: "The Free plan is great for trying out JenesisAI with 1,000 lifetime credits and a daily topup. The Plus plan unlocks 100K monthly credits, 10K daily topup, unlimited Spaces and Extensions, and basic email support.",
              },
              {
                q: "What happens if I run out of credits?",
                a: "On the Free plan, you receive a small daily topup when credits are low. On Plus, you get 10K credits daily. Ultra Max includes monthly, daily, lifetime, and on-demand credits for virtually unlimited usage.",
              },
              {
                q: "Can I cancel my subscription at any time?",
                a: "Yes, you can cancel your Plus or Enterprise subscription at any time. Your benefits will continue until the end of your current billing cycle.",
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
              >
                Schedule Demo
              </Button>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href={FRONTEND_PLATFORM_URL}>Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
