import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of JenesisAI — accounts, subscriptions and credits, acceptable use, content ownership, and AI output disclaimers.",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Terms of Service</h1>
          <p className="text-muted-foreground text-sm mb-12">Last updated: June 12, 2026</p>

          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mb-3 [&_strong]:text-foreground">
            <section>
              <h2>1. Agreement</h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of the JenesisAI websites and applications (the
                &quot;Service&quot;). By creating an account or using the Service, you agree to these Terms. If you use the
                Service on behalf of an organization, you represent that you have authority to bind that organization.
              </p>
            </section>

            <section>
              <h2>2. The Service</h2>
              <p>
                JenesisAI is an AI-powered visual workspace: agentic research, canvas boards, document and media tools,
                browser and code agents, and publishing features. We may add, change, or remove features as the product
                evolves.
              </p>
            </section>

            <section>
              <h2>3. Accounts</h2>
              <p>
                You must provide accurate information when creating an account and keep your credentials secure. You are
                responsible for activity under your account. You must be at least 13 years old to use the Service.
              </p>
            </section>

            <section>
              <h2>4. Plans, credits, and billing</h2>
              <p className="mb-3">
                The Service uses credits to meter AI usage. Free accounts include monthly credits and small daily top-ups.
                Paid plans (such as Pro and Ultra) include larger monthly credit allowances and additional features, and
                are billed in advance on a monthly basis through Stripe.
              </p>
              <p>
                You can cancel a subscription at any time; access continues until the end of the current billing cycle.
                Except where required by law, payments are non-refundable and unused credits expire as described on the
                pricing page.
              </p>
            </section>

            <section>
              <h2>5. Your content</h2>
              <p className="mb-3">
                You own the content you create or upload. You grant us the license needed to host, process, and display that
                content in order to operate the Service. If you publish a board, you make it publicly accessible and grant
                other users the ability to view it; you can unpublish it at any time.
              </p>
              <p>
                You are responsible for having the rights to the content you upload and for how you use AI outputs.
              </p>
            </section>

            <section>
              <h2>6. Acceptable use</h2>
              <p>
                You agree not to misuse the Service — including attempting to breach security, abusing or reselling credits,
                infringing others&apos; rights, generating unlawful or harmful content, scraping at scale, or interfering with
                other users. We may suspend or terminate accounts that violate these Terms.
              </p>
            </section>

            <section>
              <h2>7. AI outputs</h2>
              <p>
                AI-generated content can be inaccurate, incomplete, or biased. The Service may cite sources, but you should
                independently verify important information before relying on it. AI outputs are provided for your use and do
                not constitute professional advice.
              </p>
            </section>

            <section>
              <h2>8. Intellectual property</h2>
              <p>
                The Service, including its software, design, and branding, is owned by JenesisAI and its licensors. These
                Terms do not grant you any rights to our trademarks or branding.
              </p>
            </section>

            <section>
              <h2>9. Disclaimers and limitation of liability</h2>
              <p className="mb-3">
                The Service is provided &quot;as is&quot; without warranties of any kind, express or implied. We do not
                warrant that the Service will be uninterrupted, error-free, or that outputs will be accurate.
              </p>
              <p>
                To the maximum extent permitted by law, JenesisAI will not be liable for indirect, incidental, special,
                consequential, or punitive damages, or for lost profits or data. Our total liability for any claim relating
                to the Service is limited to the amount you paid us in the twelve months before the claim arose.
              </p>
            </section>

            <section>
              <h2>10. Termination</h2>
              <p>
                You may stop using the Service or delete your account at any time. We may suspend or terminate access for
                violations of these Terms or to protect the Service, and will make reasonable efforts to notify you.
              </p>
            </section>

            <section>
              <h2>11. Changes to these Terms</h2>
              <p>
                We may update these Terms from time to time. Material changes will be posted on this page with an updated
                date. Continuing to use the Service after changes take effect constitutes acceptance.
              </p>
            </section>

            <section>
              <h2>12. Contact</h2>
              <p>
                Questions about these Terms? Email{" "}
                <a href="mailto:jenesisai25@gmail.com" className="text-indigo-500 hover:underline">
                  jenesisai25@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
