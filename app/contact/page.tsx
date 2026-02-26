"use client"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, MapPin, ArrowRight } from "lucide-react"

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
            Contact Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Team
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your Agentic AI experience? Our team is here to help you get started.
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
                      <a href="mailto:jenesisai25@gmail.com" className="font-medium hover:text-indigo-400 transition-colors">
                        jenesisai25@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                      <MapPin className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-medium">Seattle, WA</p>
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
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-border text-foreground hover:bg-accent bg-transparent"
                >
                  <a href="mailto:jenesisai25@gmail.com?subject=Enterprise%20Inquiry%20-%20JenesisAI">
                    Contact Enterprise Sales
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Click the button below to compose an email to our team. We&apos;ll get back to you as soon as possible.
                  </p>
                  
                  <div className="bg-muted/50 border border-border rounded-lg p-6">
                    <h3 className="font-medium mb-3">What to include in your message:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-1">•</span>
                        <span>Your name and company</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-1">•</span>
                        <span>What you&apos;re interested in (demo, enterprise, partnership, support, etc.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-1">•</span>
                        <span>Brief description of your project and requirements</span>
                      </li>
                    </ul>
                  </div>

                  <Button 
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                    size="lg"
                  >
                    <a href="mailto:jenesisai25@gmail.com?subject=Inquiry%20from%20JenesisAI%20Website">
                      <Mail className="mr-2 h-5 w-5" />
                      Compose Email
                    </a>
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Or send an email directly to <a href="mailto:jenesisai25@gmail.com" className="text-indigo-400 hover:underline">jenesisai25@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
