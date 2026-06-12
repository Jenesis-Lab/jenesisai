import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AnalyticsProvider } from "@/components/analytics-provider"
import { SITE_URL, FRONTEND_PLATFORM_URL } from "@/lib/config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "JenesisAI — The Visual Workspace Where Humans Interact with AI",
    template: "%s | JenesisAI",
  },
  description:
    "Most AI tools give you answers. JenesisAI gives you a workspace. One-prompt boards, universal multi-media, shared workflows—explore at jenesisai.org. Start free.",
  applicationName: "JenesisAI",
  keywords: [
    "AI workspace",
    "visual canvas",
    "AI agents",
    "deep research",
    "agentic AI",
    "AI boards",
    "visual workflows",
    "multi-model AI",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "JenesisAI — The Visual Workspace Where Humans Interact with AI",
    description:
      "The workspace of the future isn't a document—it's a visual, explorable knowledge board. Learn, build, and share as naturally as you think.",
    type: "website",
    url: SITE_URL,
    siteName: "JenesisAI",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The JenesisAI visual workspace — agentic research, canvas boards, and live previews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jenesisai",
    title: "JenesisAI — The Visual Workspace Where Humans Interact with AI",
    description:
      "The workspace of the future isn't a document—it's a visual, explorable knowledge board. Explore at jenesisai.org.",
    images: ["/og-image.jpg"],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "JenesisAI",
      url: SITE_URL,
      logo: `${SITE_URL}/JenesisAI.png`,
      email: "jenesisai25@gmail.com",
      sameAs: [
        "https://x.com/jenesisai",
        "https://github.com/Jenesis-Lab",
        "https://www.linkedin.com/company/jenesisai/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "JenesisAI",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: "JenesisAI",
      url: FRONTEND_PLATFORM_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "An agentic AI workspace that turns questions into visual, shareable boards — deep research, a drag-and-drop canvas, live AI-powered browsing, and multi-model AI in one place.",
      offers: [
        { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
        { "@type": "Offer", name: "Plus", price: "20", priceCurrency: "USD" },
        { "@type": "Offer", name: "Ultra Max", price: "100", priceCurrency: "USD" },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AnalyticsProvider>
            {children}
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
