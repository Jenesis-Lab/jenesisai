import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What JenesisAI collects, the AI services it shares data with and why, how long data is kept, and how to delete it.",
  alternates: {
    canonical: "/privacy",
  },
}

// Checked against the product's code and production configuration on
// 2026-09-23. The app's own copy (jenesisai-ui src/pages/Privacy.tsx) and the
// list the iOS/Android apps show before asking permission
// (jenesisai-ui src/lib/privacy/aiConsent.ts) say the same thing: change all three together.
const CONTACT = "jenesisai25@gmail.com"

const AI_SERVICES: Array<[string, string]> = [
  [
    "OpenRouter",
    "passes each request to the AI model in use: Anthropic (Claude), OpenAI (GPT), Google (Gemini), xAI (Grok), or the company hosting an open model (DeepSeek, Kimi, GLM, MiMo).",
  ],
  ["Mistral AI", "turns your speech into text, reads replies aloud and creates custom voices."],
  ["Sarvam AI and Google", "read replies aloud, for some languages and as a backup."],
  ["HeyGen", "creates and animates personal avatars."],
  ["Tripo AI", "generates 3D models you ask for."],
]

const OTHER_PROVIDERS: Array<[string, string]> = [
  ["Amazon Web Services", "hosting, database and file storage."],
  ["Qdrant", "the search index JenesisAI uses to find relevant passages in your documents and memories."],
  ["Brave Search and Jina AI", "web searches and reading web pages for you."],
  ["Google Maps and Apple Weather", "places, routes and weather you ask about."],
  ["E2B", "runs code you ask JenesisAI to build or run."],
  ["Sketchfab and Poly Pizza", "searching for 3D models."],
  ["Google (Gmail)", "sends account emails."],
  ["Stripe", "processes payments made on this website."],
  ["Google Analytics", "measures visits to this marketing website (not the app)."],
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-12">Last updated: September 23, 2026</p>

          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mb-3 [&_strong]:text-foreground">
            <section>
              <h2>1. Who we are</h2>
              <p>
                JenesisAI (&quot;JenesisAI&quot;, &quot;we&quot;, &quot;us&quot;) provides an AI-powered visual workspace at{" "}
                <a href="https://www.jenesisai.org" className="text-indigo-500 hover:underline">jenesisai.org</a>,{" "}
                <a href="https://app.jenesisai.org" className="text-indigo-500 hover:underline">app.jenesisai.org</a>, and in
                the JenesisAI desktop, iOS and Android apps (the &quot;Service&quot;). This policy explains what we collect,
                who we share it with and why, and the choices you have.
              </p>
            </section>

            <section>
              <h2>2. Information we collect</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Account details:</strong> your username, email address and name. If you sign in with Apple, Google
                  or GitHub, we receive the name, email address and account ID they share. Passwords are stored only as
                  one-way hashes.
                </li>
                <li>
                  <strong>Your content:</strong> your messages, the files, photos and documents you add, the boards and
                  documents JenesisAI makes for you, and the memories it keeps from your conversations, stored with your
                  account so your work is there on every device.
                </li>
                <li>
                  <strong>Voice:</strong> while you talk to the Jenesis companion, your audio is converted to text and the text
                  becomes part of your conversation. A voice sample you record to create a custom voice is stored with your
                  account.
                </li>
                <li>
                  <strong>Photos for avatars:</strong> a photo you take or choose to create a personal avatar.
                </li>
                <li>
                  <strong>Location:</strong> only when you ask for the weather near you or place yourself on a map. It is used
                  to answer that request and is not stored by JenesisAI.
                </li>
                <li>
                  <strong>Notifications:</strong> a push notification token, if you turn on task notifications in an app.
                </li>
                <li>
                  <strong>Usage and diagnostics:</strong> server logs (including IP addresses and errors) and records of the
                  credits each request uses.
                </li>
                <li>
                  <strong>Payments:</strong> paid plans bought on this website are processed by Stripe; we never receive full
                  card details. We keep records of your plan, credits and transactions. The iOS and Android apps contain no
                  purchasing.
                </li>
                <li>
                  <strong>Website analytics:</strong> this marketing website uses Google Analytics (pages viewed, approximate
                  location derived from an anonymized IP address, device and browser type). The apps contain no advertising
                  or analytics SDKs.
                </li>
              </ul>
            </section>

            <section>
              <h2>3. How we use information</h2>
              <p>
                To answer your requests and build the documents, boards and media you ask for; to keep your work in sync
                across your devices; to sign you in, send account emails (verification and password resets) and protect
                accounts from abuse; to process payments and measure credit use for your plan; and to keep the Service
                reliable. We do not sell personal data, show ads, or track you across other apps and websites.
              </p>
            </section>

            <section>
              <h2>4. AI services we share data with</h2>
              <p className="mb-3">
                JenesisAI does not run its own AI models. To answer you, it sends what you share (your messages and files,
                your voice while you talk to the companion, a picture of the JenesisAI screen when you ask the companion
                something, and your photo or voice sample if you create an avatar or custom voice) to these services:
              </p>
              <ul className="list-disc space-y-1 pl-5 mb-3">
                {AI_SERVICES.map(([name, role]) => (
                  <li key={name}>
                    <strong>{name}</strong> {role}
                  </li>
                ))}
              </ul>
              <p className="mb-3">
                In the iOS and Android apps, JenesisAI asks your permission before anything is sent to these services. You
                can withdraw it at any time in Account settings (AI data sharing); the app then stops sending requests from
                that device.
              </p>
              <p>
                Requests to language models go through OpenRouter, which we configure to use only providers that do not
                train on your data. Providers may keep requests for a limited time under their own policies, for example to
                prevent abuse.
              </p>
            </section>

            <section>
              <h2>5. Other service providers</h2>
              <ul className="list-disc space-y-1 pl-5">
                {OTHER_PROVIDERS.map(([name, role]) => (
                  <li key={name}>
                    <strong>{name}:</strong> {role}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2>6. How your data is protected</h2>
              <p>
                Each provider receives only what its task needs, and must protect your data at least as well as this policy
                does. Data travels encrypted (HTTPS/TLS), and passwords are stored only as one-way hashes.
              </p>
            </section>

            <section>
              <h2>7. Publishing</h2>
              <p>
                When you publish a board, document or conversation, anyone with its link can view it until you unpublish it.
                Nothing is published unless you choose to.
              </p>
            </section>

            <section>
              <h2>8. Keeping and deleting your data</h2>
              <p className="mb-3">
                Your data is kept while your account is open. You can delete individual conversations at any time. To delete
                your account, open the menu (☰) in the app, select your name at the bottom, then Account → Delete account.
              </p>
              <p>
                Deleting your account immediately and permanently deletes your account and the conversations, documents,
                boards and memories linked to it. Copies in our database backups expire within 7 days, and server logs
                within 30 days. To also have files you uploaded or recorded erased from our file storage, and any personal
                avatar or custom voice removed from HeyGen or Mistral AI, email{" "}
                <a href={`mailto:${CONTACT}`} className="text-indigo-500 hover:underline">{CONTACT}</a> from the address on
                your account.
              </p>
            </section>

            <section>
              <h2>9. Your choices and rights</h2>
              <p>
                You can see and change your account details in Account settings, withdraw permission to share data with AI
                services, and turn off microphone, camera, location or notification access in your device&apos;s settings.
                Depending on where you live, you may have rights to access, correct, export or delete your personal
                information, and to object to or restrict certain processing. To exercise them, email{" "}
                <a href={`mailto:${CONTACT}`} className="text-indigo-500 hover:underline">{CONTACT}</a>. We answer within 30
                days.
              </p>
            </section>

            <section>
              <h2>10. Children</h2>
              <p>
                The Service is not directed at children under 13 (or the minimum age in your country), and we do not
                knowingly collect their information.
              </p>
            </section>

            <section>
              <h2>11. Changes</h2>
              <p>
                We will post any change to this policy here and update the &quot;Last updated&quot; date above.
              </p>
            </section>

            <section>
              <h2>12. Contact</h2>
              <p>
                Questions or requests? Email{" "}
                <a href={`mailto:${CONTACT}`} className="text-indigo-500 hover:underline">
                  {CONTACT}
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
