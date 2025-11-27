"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { FRONTEND_PLATFORM_URL } from "@/lib/config"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center text-black font-bold text-sm">
            J
          </div>
          <span className="font-semibold text-lg text-white">JenesisAI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/70 hover:text-white transition-colors px-4 py-2 text-sm"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-white/70 hover:text-white hover:bg-white/5 rounded-full px-5 h-9 text-sm"
            asChild
          >
            <Link href={FRONTEND_PLATFORM_URL}>Sign in</Link>
          </Button>
          <Button className="bg-white text-black hover:bg-white/90 rounded-full px-5 h-9 text-sm font-medium" asChild>
            <Link href={FRONTEND_PLATFORM_URL}>Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/5">
          <nav className="container mx-auto py-4 px-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/70 hover:text-white py-3 transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
              <Button
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/5 rounded-full h-10 text-sm justify-start"
                asChild
              >
                <Link href={FRONTEND_PLATFORM_URL}>Sign in</Link>
              </Button>
              <Button
                className="bg-white text-black hover:bg-white/90 rounded-full h-10 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
                asChild
              >
                <Link href={FRONTEND_PLATFORM_URL}>Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
