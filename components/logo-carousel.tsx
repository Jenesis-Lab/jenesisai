"use client"

// Wordmarks of the AI model families JenesisAI routes to. Rendered as text on
// purpose: no third-party logo files to license, no external image requests.
const MODELS = [
  "OpenAI GPT",
  "Anthropic Claude",
  "Google Gemini",
  "GPT-OSS",
  "Open-Source Models",
]

export function LogoCarousel() {
  // Duplicate the array to create a seamless loop
  const items = [...MODELS, ...MODELS, ...MODELS]

  return (
    <div className="w-full overflow-hidden bg-background py-16 border-y border-border">
      <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-[0.2em] mb-10">
        Works with leading AI models
      </p>

      {/* Carousel container with mask */}
      <div className="relative">
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {items.map((name, index) => (
            <div
              key={`${name}-${index}`}
              className="flex-shrink-0 mx-10 md:mx-14 flex items-center justify-center"
            >
              <span className="text-lg md:text-xl font-semibold tracking-tight text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 whitespace-nowrap select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
