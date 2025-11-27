"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { FRONTEND_PLATFORM_URL } from "@/lib/config"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
            J
          </div>
          <span className="font-semibold text-lg text-foreground">JenesisAI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2 text-sm"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ModeToggle />
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-full px-5 h-9 text-sm"
            asChild
          >
            <Link href={FRONTEND_PLATFORM_URL}>Sign in</Link>
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 h-9 text-sm font-medium" asChild>
            <Link href={FRONTEND_PLATFORM_URL}>Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <button
            className="text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <nav className="container mx-auto py-4 px-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground py-3 transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-full h-10 text-sm justify-start"
                asChild
              >
                <Link href={FRONTEND_PLATFORM_URL}>Sign in</Link>
              </Button>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-10 text-sm font-medium"
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
