"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "AI Workspace Overview",
    lightImage: "/image_light.png",
    darkImage: "/image_dark.png",
    alt: "JenesisAI Platform — AI Workspace Dashboard"
  },
  {
    id: 2,
    title: "Research & AI Orchestration",
    lightImage: "/image_light.png",
    darkImage: "/image_dark.png",
    alt: "JenesisAI AI Orchestration — Multi-Agent System"
  },
  {
    id: 3,
    title: "Visual Canvas & Workflow",
    lightImage: "/image_light.png",
    darkImage: "/image_dark.png",
    alt: "JenesisAI Visual Canvas — Intelligent Workflow"
  }
]

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  // Auto-play functionality
  useEffect(() => {
    if (!api || isHovered) return

    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 5000)

    return () => clearInterval(intervalId)
  }, [api, isHovered])

  const handlePrev = () => {
    api?.scrollPrev()
  }

  const handleNext = () => {
    api?.scrollNext()
  }

  const scrollTo = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <div 
      className="relative max-w-6xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent className="!-ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="!pl-0">
              <div className="relative rounded-xl md:rounded-2xl border border-border/50 overflow-hidden shadow-2xl bg-background group w-full">
                {/* Image Container */}
                <div className="relative w-full aspect-[16/10] md:aspect-video overflow-hidden bg-background">
                  {/* Light mode image */}
                  <Image
                    src={slide.lightImage}
                    alt={slide.alt}
                    fill
                    className="object-cover dark:hidden transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    priority={index === 0}
                  />
                  {/* Dark mode image */}
                  <Image
                    src={slide.darkImage}
                    alt={slide.alt}
                    fill
                    className="object-cover hidden dark:block transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    priority={index === 0}
                  />
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <CarouselPrevious className="-left-12 lg:-left-16 h-12 w-12 bg-background/95 backdrop-blur-md border-border/70 hover:bg-background hover:border-primary/50 hover:scale-110 transition-all shadow-xl" />
        <CarouselNext className="-right-12 lg:-right-16 h-12 w-12 bg-background/95 backdrop-blur-md border-border/70 hover:bg-background hover:border-primary/50 hover:scale-110 transition-all shadow-xl" />
      </Carousel>

      {/* Dot Indicators */}
      <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => scrollTo(index)}
            className={`relative h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30"
                : "w-2 bg-muted-foreground/25 hover:bg-muted-foreground/40 hover:w-4"
            }`}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
          >
            <span className="sr-only">{slide.title}</span>
          </button>
        ))}
      </div>

      {/* Mobile navigation indicators */}
      <div className="flex md:hidden justify-center gap-4 mt-4 items-center">
        <button
          onClick={handlePrev}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors p-2"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
          Prev
        </button>
        <button
          onClick={handleNext}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors p-2"
          aria-label="Next slide"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Subtle glow underneath */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-gradient-to-r from-indigo-500/8 via-purple-500/10 to-indigo-500/8 rounded-full blur-3xl pointer-events-none" />
    </div>
  )
}
