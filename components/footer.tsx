import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const sections = [
    {
      title: "Product",
      links: [
        { name: "Pricing", href: "/pricing" },
        { name: "Solutions", href: "/solutions" },
      ],
    },
    {
      title: "Company",
      links: [{ name: "Contact", href: "/contact" }],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Security", href: "#" },
      ],
    },
  ]

  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/JenesisAI.png"
                alt="JenesisAI Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
              />
              <span className="font-semibold text-lg text-foreground">JenesisAI</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A workspace where Imagination meets Intelligence
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium text-sm mb-4 text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">© 2026 JenesisAI. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="https://x.com/jenesisai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-xs transition-colors"
            >
              X
            </Link>
            <Link
              href="https://github.com/Jenesis-Lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-xs transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/company/jenesisai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-xs transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
