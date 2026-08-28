import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download JenesisAI Desktop — Mac, Windows & Linux",
  description:
    "Install JenesisAI Desktop on your computer and sign in once. From then on, work from your phone or the web on that computer whenever it's on — your files, your tools, your logins.",
  alternates: { canonical: "/download" },
  openGraph: {
    title: "Download JenesisAI Desktop",
    description:
      "Install once on your Mac, Windows PC, or Linux computer. Then send work to it from anywhere.",
    url: "/download",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "JenesisAI Desktop" }],
  },
}

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
