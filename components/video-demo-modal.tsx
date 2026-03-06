"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoDemoModalProps {
  videoUrl?: string
  videoTitle?: string
}

export function VideoDemoModal({ 
  videoUrl = "https://www.youtube.com/embed/kbGrzHHrfyg?autoplay=1&rel=0", 
  videoTitle = "JenesisAI Launch Demo" 
}: VideoDemoModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        className="border-border text-foreground hover:bg-accent/80 hover:border-primary/40 rounded-full px-8 h-12 text-sm font-medium bg-transparent group transition-all"
        onClick={() => setOpen(true)}
        type="button"
      >
        <Play className="mr-2 h-4 w-4 fill-current group-hover:scale-110 transition-transform" />
        Watch Demo
      </Button>

      {open && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black border-border/50 shadow-2xl">
            <DialogTitle className="sr-only">{videoTitle}</DialogTitle>
            <DialogDescription className="sr-only">
              Watch a demonstration of JenesisAI&apos;s features and capabilities
            </DialogDescription>
            
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                title={videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-black/50 p-2 z-10"
              aria-label="Close"
            >
              <X className="h-4 w-4 text-white" />
            </button>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
