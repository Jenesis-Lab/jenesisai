import Image from "next/image"

type BrandLogoProps = {
  className?: string
  markClassName?: string
  showWordmark?: boolean
}

export function BrandLogo({
  className = "",
  markClassName = "h-8 w-8",
  showWordmark = true,
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.svg"
        alt=""
        width={64}
        height={64}
        className={`${markClassName} shrink-0`}
        aria-hidden
        unoptimized
      />
      {showWordmark && <span className="jenesis-wordmark text-lg text-foreground">JenesisAI</span>}
    </span>
  )
}
