import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the JenesisAI team — questions, feedback, enterprise inquiries, or support. We'd love to hear from you.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact JenesisAI",
    description: "Questions, feedback, or enterprise inquiries — get in touch with the JenesisAI team.",
    url: "/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The JenesisAI visual workspace — agentic research, canvas boards, and live previews",
      },
    ],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
