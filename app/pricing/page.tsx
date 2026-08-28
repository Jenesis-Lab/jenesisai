"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Zap, Layers, Crown, Sparkles } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"
import { FRONTEND_PLATFORM_URL } from "@/lib/config"
import {
  SNAPSHOT_PLANS,
  buildPricingFaq,
  fetchPricing,
  type PricingPlan,
} from "@/lib/pricing"
import { trackPricingView, trackPricingPlanClick, trackGetStarted, trackContactClick } from "@/lib/analytics"

// Presentation only — the icon and the "Most Popular" ribbon are the only
// things about a plan this page gets to decide. Prices, credit grants and
// feature bullets come from the platform API so the site can never quote a
// number the server will not honour.
const PLAN_PRESENTATION: Record<string, { icon: React.ReactNode; popular?: boolean }> = {
  free: { icon: <Zap className="h-6 w-6" /> },
  plus: { icon: <Layers className="h-6 w-6" />, popular: true },
  pro: { icon: <Crown className="h-6 w-6" /> },
}

export default function PricingPage() {
  // Seeded with the build-time snapshot so the page paints instantly, then
  // reconciled against the live catalogue. On a static export this is what
  // lets a pricing change reach visitors without a redeploy.
  const [plans, setPlans] = useState<PricingPlan[]>(SNAPSHOT_PLANS)

  useEffect(() => {
    trackPricingView()
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    fetchPricing(controller.signal)
      .then((feed) => {
        if (!controller.signal.aborted) setPlans(feed.plans)
      })
      .catch(() => {
        /* keep the snapshot — never blank out the pricing table */
      })
    return () => controller.abort()
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
              const presentation = PLAN_PRESENTATION[plan.id]
              const isPopular = presentation?.popular ?? false
              const colors = getPlanColors(plan.id, isPopular)

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
                  {isPopular && (
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
                        {presentation?.icon ?? <Sparkles className="h-6 w-6" />}
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
                        isPopular
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
            {buildPricingFaq(plans).map((faq, i) => (
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
                asChild
              >
                <Link href="/contact" onClick={() => trackContactClick('pricing')}>
                  Schedule Demo
                </Link>
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
