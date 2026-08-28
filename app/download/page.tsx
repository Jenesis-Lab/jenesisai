"use client"

/**
 * /download — the one public place to get JenesisAI Desktop.
 *
 * Reads the SAME manifest the app uses (`GET /downloads/desktop` on the
 * platform API), so installer links live in exactly one place — the backend
 * environment — and this page can never advertise a build that is not
 * published. Until installers exist it says so, and offers the web app.
 *
 * Copy is one thesis line and one sentence of what "connected" means; the
 * primary button is the visitor's own platform (a default, not a
 * restriction — every published build is listed).
 */

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Apple, Download, Laptop, Monitor, Smartphone, Terminal } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FRONTEND_PLATFORM_URL, PLATFORM_API_URL } from "@/lib/config"

const API_URL = PLATFORM_API_URL

type PlatformKey = "mac-arm64" | "mac-x64" | "windows-x64" | "linux-x64"
interface Platform { key: PlatformKey; label: string; kind: string; url: string }
interface Manifest {
  version: string | null
  platforms: Platform[]
  available: boolean
  suggested: PlatformKey | null
}

const ICON: Record<PlatformKey, typeof Apple> = {
  "mac-arm64": Apple,
  "mac-x64": Apple,
  "windows-x64": Monitor,
  "linux-x64": Terminal,
}

function detect(): PlatformKey | null {
  if (typeof navigator === "undefined") return null
  const ua = navigator.userAgent.toLowerCase()
  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) return null
  if (ua.includes("macintosh") && navigator.maxTouchPoints > 1) return null
  if (ua.includes("windows")) return "windows-x64"
  if (ua.includes("mac os") || ua.includes("macintosh")) return "mac-arm64"
  if (ua.includes("linux") && !ua.includes("android")) return "linux-x64"
  return null
}

function platformButtonLabel(key: PlatformKey): string {
  if (key.startsWith("mac")) return "Download for Mac"
  if (key.startsWith("windows")) return "Download for Windows"
  return "Download for Linux"
}

export default function DownloadPage() {
  const [manifest, setManifest] = useState<Manifest | null>(null)
  const [failed, setFailed] = useState(!API_URL)

  useEffect(() => {
    if (!API_URL) return
    let cancelled = false
    fetch(`${API_URL.replace(/\/$/, "")}/downloads/desktop`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((m: Manifest) => { if (!cancelled) setManifest(m) })
      .catch(() => { if (!cancelled) setFailed(true) })
    return () => { cancelled = true }
  }, [])

  const suggested = manifest?.suggested ?? detect()
  const primary = useMemo(() => {
    if (!manifest) return null
    return manifest.platforms.find((p) => p.key === suggested) ?? manifest.platforms[0] ?? null
  }, [manifest, suggested])
  const others = manifest && primary ? manifest.platforms.filter((p) => p.key !== primary.key) : []
  const available = Boolean(manifest?.available && primary)
  const onPhone = suggested === null

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 pt-32 pb-24">
        <section className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">JenesisAI Desktop</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl" style={{ textWrap: "balance" }}>
            Install once. Work from anywhere.
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-lg text-muted-foreground" style={{ textWrap: "balance" }}>
            Put JenesisAI on your Mac, Windows PC, or Linux computer and sign in. From then on your phone and the web can
            send work to that computer whenever it’s on — its files, its tools, its logins.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            {available && primary ? (
              <>
                <Button asChild size="lg" className="h-12 px-6 text-base">
                  <a href={primary.url} data-platform={primary.key}>
                    {(() => { const I = ICON[primary.key] ?? Download; return <I className="mr-2 h-5 w-5" aria-hidden /> })()}
                    {platformButtonLabel(primary.key)}
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  {primary.label}{manifest?.version ? ` · v${manifest.version}` : ""}
                </p>
                {others.length > 0 && (
                  <p className="text-sm text-muted-foreground">
                    Also for{" "}
                    {others.map((p, i) => (
                      <span key={p.key}>
                        <a href={p.url} data-platform={p.key} className="text-foreground underline underline-offset-4">{p.label}</a>
                        {i < others.length - 1 ? " · " : ""}
                      </span>
                    ))}
                  </p>
                )}
                {onPhone && (
                  <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Smartphone className="h-4 w-4" aria-hidden />
                    You’re on a phone — open this page on your computer to install.
                  </p>
                )}
              </>
            ) : failed || (manifest && !manifest.available) ? (
              <>
                <p className="inline-flex items-center gap-2 text-base text-foreground">
                  <Laptop className="h-5 w-5 text-muted-foreground" aria-hidden />
                  The desktop app is coming soon.
                </p>
                <Button asChild variant="outline" size="lg" className="h-12 px-6">
                  <Link href={FRONTEND_PLATFORM_URL}>Use JenesisAI on the web</Link>
                </Button>
              </>
            ) : (
              <p className="text-sm text-muted-foreground" role="status">Checking for the latest version…</p>
            )}
          </div>
        </section>

        {/* Three facts, one line each — what changes once it's installed. */}
        <section className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-3">
          {[
            { t: "Pair once", d: "Sign in on the desktop app. That’s the whole setup." },
            { t: "Reach it from your phone", d: "Send tasks from anywhere; they run on your computer when it’s on." },
            { t: "You stay in control", d: "It only acts with your approval, and you can disconnect any time." },
          ].map((f) => (
            <div key={f.t} className="rounded-xl border border-border p-5">
              <h2 className="text-base font-semibold text-foreground">{f.t}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
