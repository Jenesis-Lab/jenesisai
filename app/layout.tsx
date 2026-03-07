import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AnalyticsProvider } from "@/components/analytics-provider"
import { GA_MEASUREMENT_ID } from "@/lib/config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JenesisAI — The Visual Workspace Where Humans Interact with AI",
  description: "Most AI tools give you answers. JenesisAI gives you a workspace. One-prompt boards, universal multi-media, shared workflows—explore at jenesisai.org. Start free.",
  openGraph: {
    title: "JenesisAI — The Visual Workspace Where Humans Interact with AI",
    description: "The workspace of the future isn't a document—it's a visual, explorable knowledge board. Learn, build, and share as naturally as you think.",
    type: "website",
    url: "https://www.jenesisai.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "JenesisAI — The Visual Workspace Where Humans Interact with AI",
    description: "The workspace of the future isn't a document—it's a visual, explorable knowledge board. Explore at jenesisai.org.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
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
