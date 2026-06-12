import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How JenesisAI collects, uses, and protects your information — accounts, content, analytics, payments, and your rights.",
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-12">Last updated: June 12, 2026</p>

          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mb-3 [&_strong]:text-foreground">
            <section>
              <h2>1. Who we are</h2>
              <p>
                JenesisAI (&quot;JenesisAI&quot;, &quot;we&quot;, &quot;us&quot;) provides an AI-powered visual workspace available at{" "}
                <a href="https://www.jenesisai.org" className="text-indigo-500 hover:underline">jenesisai.org</a> and{" "}
                <a href="https://app.jenesisai.org" className="text-indigo-500 hover:underline">app.jenesisai.org</a> (the
                &quot;Service&quot;). This policy explains what information we collect, how we use it, and the choices you have.
              </p>
            </section>

            <section>
              <h2>2. Information we collect</h2>
              <p className="mb-3">
                <strong>Account information.</strong> When you create an account we collect your name, email address, and
                password, or the profile information shared by your sign-in provider (such as Google) if you use social login.
              </p>
              <p className="mb-3">
                <strong>Content you create.</strong> The Service stores the content you create or upload — conversations,
                boards, documents, files, and workspace settings — so we can provide the product to you. Boards you choose to
                publish are visible to others; everything else stays private to your account and the people you share it with.
              </p>
              <p className="mb-3">
                <strong>Payment information.</strong> Paid subscriptions are processed by Stripe. We do not store your full
                card details on our servers; Stripe handles payment data under its own privacy policy. We keep records of your
                plan, credits, and transaction history.
              </p>
              <p>
                <strong>Usage information.</strong> We use Google Analytics on our marketing site to understand how visitors
                use it (pages viewed, approximate location derived from an anonymized IP address, device and browser type). We
                also collect basic product telemetry, such as feature usage and error logs, to keep the Service reliable.
              </p>
            </section>

            <section>
              <h2>3. How we use information</h2>
              <p>
                We use your information to operate and improve the Service: to authenticate you, run AI agents and tools you
                invoke, store and sync your workspaces, process payments and credits, respond to support requests, protect
                against abuse, and understand aggregate usage of the product. We do <strong>not</strong> sell your personal
                information.
              </p>
            </section>

            <section>
              <h2>4. AI processing</h2>
              <p>
                When you use AI features, the prompts and content you submit are processed by AI models — including
                third-party model providers (such as OpenAI, Google, and Anthropic) and models we host — solely to generate
                the responses you request. We pass only the data needed to fulfill your request.
              </p>
            </section>

            <section>
              <h2>5. Where your data lives</h2>
              <p>
                The Service runs on Amazon Web Services (AWS) infrastructure. Data is encrypted in transit using TLS and at
                rest using industry-standard encryption provided by our cloud infrastructure.
              </p>
            </section>

            <section>
              <h2>6. Sharing</h2>
              <p>
                We share information only with service providers who help us run the product (cloud hosting, payment
                processing, analytics, AI model providers), when you choose to publish or share content, when required by
                law, or in connection with a business transaction such as a merger or acquisition.
              </p>
            </section>

            <section>
              <h2>7. Retention and deletion</h2>
              <p>
                We keep your information while your account is active. You may delete your content or request deletion of
                your account and associated personal data by contacting us; we will honor verified requests within a
                reasonable time, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2>8. Your rights</h2>
              <p>
                Depending on where you live, you may have rights to access, correct, export, or delete your personal
                information, and to object to or restrict certain processing. To exercise these rights, contact us at the
                address below.
              </p>
            </section>

            <section>
              <h2>9. Children</h2>
              <p>The Service is not directed to children under 13, and we do not knowingly collect their information.</p>
            </section>

            <section>
              <h2>10. Changes</h2>
              <p>
                We may update this policy as the Service evolves. We will post the updated version here and revise the
                &quot;Last updated&quot; date above.
              </p>
            </section>

            <section>
              <h2>11. Contact</h2>
              <p>
                Questions or requests? Email{" "}
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
