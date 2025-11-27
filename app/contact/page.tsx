"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-sm text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Get in touch
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Let's talk about your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              AI journey
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your enterprise with AI? Our team is here to help you get started.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                      <Mail className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="font-medium">info@jenesis.ai</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                      <Phone className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <p className="font-medium">+1 (555) 000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                      <MapPin className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-medium">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="pt-8 border-t border-border">
                <h3 className="text-sm font-medium text-muted-foreground mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="/pricing"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    View Pricing Plans
                  </a>
                  <a
                    href="/solutions"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Explore Solutions
                  </a>
                </div>
              </div>

              {/* Enterprise Badge */}
              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-2">Enterprise Inquiries</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For large-scale deployments and custom solutions, our enterprise team provides dedicated support.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border text-foreground hover:bg-accent bg-transparent"
                >
                  Contact Enterprise Sales
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-muted-foreground">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-muted border-border text-foreground placeholder:text-muted-foreground/50 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-muted-foreground">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-muted border-border text-foreground placeholder:text-muted-foreground/50 focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-muted-foreground">
                      Work Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      className="bg-muted border-border text-foreground placeholder:text-muted-foreground/50 focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-muted-foreground">
                      Company
                    </label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      className="bg-muted border-border text-foreground placeholder:text-muted-foreground/50 focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block mb-2 text-sm font-medium text-muted-foreground">
                      What are you interested in?
                    </label>
                    <select
                      id="interest"
                      className="w-full h-10 px-3 rounded-md bg-muted border border-border text-foreground focus:border-indigo-500 focus:outline-none"
                    >
                      <option value="" className="bg-background">
                        Select an option
                      </option>
                      <option value="demo" className="bg-background">
                        Product Demo
                      </option>
                      <option value="enterprise" className="bg-background">
                        Enterprise Solutions
                      </option>
                      <option value="partnership" className="bg-background">
                        Partnership Opportunities
                      </option>
                      <option value="support" className="bg-background">
                        Technical Support
                      </option>
                      <option value="other" className="bg-background">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-muted-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project and requirements..."
                      rows={5}
                      className="bg-muted border-border text-foreground placeholder:text-muted-foreground/50 focus:border-indigo-500 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
