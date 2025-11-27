"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Zap, Layers, Crown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"

type Plan = {
  id: string
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  icon: React.ReactNode
  features: string[]
  popular?: boolean
}

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for individuals and small projects",
    monthlyPrice: 49,
    yearlyPrice: 390,
    icon: <Zap className="h-6 w-6" />,
    features: [
      "Up to 5 team members",
      "Basic model training",
      "Standard support (48hr response)",
      "Community access",
      "Basic analytics",
    ],
  },
  {
    id: "pro",
    name: "Professional",
    description: "For growing teams with advanced needs",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    icon: <Layers className="h-6 w-6" />,
    popular: true,
    features: [
      "Up to 50 team members",
      "Advanced model fine-tuning",
      "Priority support (12hr response)",
      "API access",
      "Custom integrations",
      "Advanced analytics & reporting",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Full-scale AI deployment for large organizations",
    monthlyPrice: 399,
    yearlyPrice: 3990,
    icon: <Crown className="h-6 w-6" />,
    features: [
      "Unlimited team members",
      "Custom model development",
      "Dedicated support (4hr response)",
      "On-premises deployment",
      "Enterprise SSO & security",
      "SLA guarantees",
      "Dedicated account manager",
      "Custom training & onboarding",
    ],
  },
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

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
      case "enterprise":
        return {
          ring: "ring-white/10",
          iconBg: "bg-amber-500/20 text-amber-400 ring-amber-500/30 group-hover:bg-amber-500/30",
          checkBg: "bg-white/10 text-white/60 group-hover:bg-amber-500 group-hover:text-white",
          hover: "hover:ring-amber-500/50",
        }
      default:
        return {
          ring: "ring-white/10",
          iconBg: "bg-white/10 text-white/60 ring-white/10 group-hover:bg-white/20",
          checkBg: "bg-white/10 text-white/60 group-hover:bg-white/20",
          hover: "hover:ring-white/30",
        }
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Simple, transparent pricing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Plans for all sizes</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Choose the perfect plan for your team. Scale as you grow with transparent pricing and no hidden fees.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 p-1 rounded-full inline-flex border border-white/10">
            <button
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all",
                billingPeriod === "monthly" ? "bg-white text-black" : "text-white/60 hover:text-white",
              )}
              onClick={() => setBillingPeriod("monthly")}
            >
              Monthly
            </button>
            <button
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                billingPeriod === "yearly" ? "bg-white text-black" : "text-white/60 hover:text-white",
              )}
              onClick={() => setBillingPeriod("yearly")}
            >
              Yearly
              <span
                className={cn(
                  "text-xs px-2 py-0.5 rounded-full",
                  billingPeriod === "yearly" ? "bg-emerald-500 text-white" : "bg-emerald-500/20 text-emerald-400",
                )}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const colors = getPlanColors(plan.id, plan.popular || false)
              const price = billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
              const period = billingPeriod === "monthly" ? "month" : "year"

              return (
                <div
                  key={plan.id}
                  className={cn(
                    "group relative flex flex-col rounded-2xl bg-white/[0.03] ring-1 transition-all duration-300",
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

                    <p className="text-white/50 text-sm mb-6">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">${price}</span>
                        <span className="text-white/40">/{period}</span>
                      </div>
                      {billingPeriod === "yearly" && (
                        <p className="text-sm text-emerald-400 mt-1">
                          Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} annually
                        </p>
                      )}
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
                          <span className="text-sm text-white/70">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      className={cn(
                        "w-full transition-all",
                        plan.popular
                          ? "bg-indigo-500 hover:bg-indigo-600 text-white"
                          : "bg-white/10 hover:bg-white/20 text-white",
                      )}
                      size="lg"
                    >
                      Get Started
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
            <p className="text-white/60">Everything you need to know about JenesisAI</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does JenesisAI ensure data privacy and security?",
                a: "JenesisAI employs a privacy-centric architecture with on-premises deployment options, ensuring your data never leaves your secure environment. We implement enterprise-grade encryption, role-based access controls, and comply with SOC 2, GDPR, and HIPAA. Our platform undergoes regular security audits and penetration testing.",
              },
              {
                q: "What integration capabilities does your platform offer?",
                a: "Our platform provides seamless integration through our API-first architecture. We support native connectors for major enterprise software (SAP, Salesforce, Microsoft), databases, and cloud services. Our function calling capabilities allow direct interaction with your systems, while our RAG implementation ensures accurate responses based on your proprietary data.",
              },
              {
                q: "How quickly can we expect to see ROI from implementing JenesisAI?",
                a: "Most enterprise clients see initial ROI within 3-6 months of deployment. Our platform reduces operational costs by automating routine tasks (35% average reduction), improves decision-making through predictive analytics, and increases employee productivity by 25-40%.",
              },
              {
                q: "What makes your model governance framework enterprise-ready?",
                a: "Our enterprise-grade governance includes comprehensive audit trails, centralized model registry with version control, approval workflows, and role-based access controls. We provide automated compliance reporting, continuous monitoring for model drift and bias, and detailed performance metrics.",
              },
              {
                q: "What level of technical expertise is required?",
                a: "JenesisAI is designed for both technical and non-technical users. Our no-code interface allows business users to create AI solutions without programming. For technical teams, we provide comprehensive APIs, SDKs, and development tools. Enterprise clients receive dedicated implementation support and training.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:bg-white/[0.05] transition-colors"
              >
                <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-6 mt-32">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Join leading enterprises already transforming their operations with JenesisAI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Schedule Demo
              </Button>
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
