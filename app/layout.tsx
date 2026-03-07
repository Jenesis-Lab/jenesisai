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
  title: "JenesisAI — AI Workspace for Research, Visual Creation & Collaboration",
  description: "Turn any question into a polished report, presentation, or visual board. JenesisAI combines deep research, a drag-and-drop canvas, and multi-model AI — all in one workspace. Start free.",
  openGraph: {
    title: "JenesisAI — AI Workspace for Research & Visual Creation",
    description: "Research, create, and share — all powered by AI agents. Start free.",
    type: "website",
    url: "https://jenesisai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "JenesisAI — AI Workspace for Research & Visual Creation",
    description: "Research, create, and share — all powered by AI agents. Start free.",
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
