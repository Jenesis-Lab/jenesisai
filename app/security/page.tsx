import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ShieldCheck, Lock, CreditCard, Server, KeyRound, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Security",
  description:
    "How JenesisAI protects your data — encryption in transit and at rest, AWS infrastructure, Stripe payment processing, and responsible disclosure.",
  alternates: {
    canonical: "/security",
  },
}

const practices = [
  {
    icon: Lock,
    title: "Encryption",
    body: "All traffic to and from JenesisAI is encrypted in transit with TLS (HTTPS). Data is encrypted at rest using industry-standard encryption provided by our cloud infrastructure.",
  },
  {
    icon: Server,
    title: "Cloud infrastructure",
    body: "The Service runs on Amazon Web Services with managed databases, object storage, and network isolation between environments.",
  },
  {
    icon: KeyRound,
    title: "Authentication",
    body: "Sign in with email and password or Google OAuth. Passwords are stored only as salted hashes, and sessions use signed, expiring tokens.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    body: "Payments are processed by Stripe, a PCI-DSS Level 1 certified provider. Your full card details never touch our servers.",
  },
  {
    icon: ShieldCheck,
    title: "Data isolation",
    body: "Your workspaces, boards, and documents are private to your account unless you explicitly share or publish them.",
  },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Security at JenesisAI</h1>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            Your research, boards, and documents are your work product. Protecting them is core to how we build.
          </p>

          <div className="space-y-6 mb-16">
            {practices.map((p) => (
              <div key={p.title} className="flex gap-4 bg-card border border-border rounded-xl p-6">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base font-semibold mb-1.5">{p.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-indigo-500/15 text-indigo-500 flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Found a vulnerability?</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  We appreciate responsible disclosure. If you believe you&apos;ve found a security issue in JenesisAI,
                  please email us with enough detail to reproduce it. We&apos;ll acknowledge your report promptly and keep
                  you updated as we investigate.
                </p>
                <a
                  href="mailto:jenesisai25@gmail.com?subject=Security%20Report%20-%20JenesisAI"
                  className="text-indigo-500 hover:underline text-sm font-medium"
                >
                  jenesisai25@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
