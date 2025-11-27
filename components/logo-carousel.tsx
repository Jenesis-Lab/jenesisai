"use client"

import Image from "next/image"
import { COMPANIES } from "@/lib/companies"

export function LogoCarousel() {
  // Duplicate the array to create seamless loop
  const duplicatedCompanies = [...COMPANIES, ...COMPANIES]

  return (
    <div className="w-full overflow-hidden bg-[#0a0a0a] py-16 border-y border-white/5">
      <p className="text-center text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-10">
        Trusted by AI teams at
      </p>

      {/* Carousel container with mask */}
      <div className="relative">
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-64 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-64 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 mx-10 md:mx-14 flex items-center justify-center"
            >
              <div className="h-8 md:h-10 w-24 md:w-32 relative opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale invert">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
