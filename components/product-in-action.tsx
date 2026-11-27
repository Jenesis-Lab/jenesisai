"use client"

import { useEffect, useRef, useState } from "react"
import { PlayCircle } from "lucide-react"
import { PRODUCT_CLIPS, type ProductClip } from "@/lib/product-media"

/**
 * Short, silent clips recorded in the real app. Each clip loads only when it
 * scrolls near the viewport (preload="none" until then), plays muted on loop
 * while visible, and pauses when it scrolls away. Visitors who ask for
 * reduced motion get the still poster and a play button instead.
 */
function ClipCard({ clip }: { clip: ProductClip }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || reducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.preload !== "auto") video.preload = "auto"
          video.play().catch(() => {
            // Autoplay can be refused (e.g. low-power mode); the poster stays.
          })
        } else {
          video.pause()
        }
      },
      { rootMargin: "200px 0px", threshold: 0.25 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <figure className="group bg-card border border-border rounded-2xl overflow-hidden shadow-xl hover:border-primary/40 transition-colors">
      <div className={`relative w-full bg-muted ${clip.aspect === "square" ? "aspect-square" : "aspect-video"}`}>
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-top"
          poster={clip.poster}
          muted
          loop
          playsInline
          preload="none"
          controls={reducedMotion}
          aria-label={clip.alt}
        >
          <source src={clip.src} type="video/mp4" />
        </video>
        {reducedMotion && (
          <PlayCircle className="pointer-events-none absolute right-3 top-3 h-6 w-6 text-white/80 drop-shadow" aria-hidden />
        )}
      </div>
      <figcaption className="p-5">
        <h3 className="text-base font-semibold mb-1.5 text-foreground">{clip.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{clip.description}</p>
      </figcaption>
    </figure>
  )
}

export function ProductInAction() {
  if (PRODUCT_CLIPS.length === 0) return null

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" aria-labelledby="product-in-action-heading">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-muted/80 border border-border/60 px-3 py-1.5 rounded-full text-xs font-medium mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Recorded in the app
          </div>
          <h2 id="product-in-action-heading" className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            See JenesisAI in action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real sessions in the workspace, start to finish. No mockups.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 gap-6 max-w-6xl mx-auto ${
            PRODUCT_CLIPS.length >= 3 ? "lg:grid-cols-3" : PRODUCT_CLIPS.length === 2 ? "md:grid-cols-2" : ""
          }`}
        >
          {PRODUCT_CLIPS.map((clip) => (
            <ClipCard key={clip.src} clip={clip} />
          ))}
        </div>
      </div>
    </section>
  )
}
