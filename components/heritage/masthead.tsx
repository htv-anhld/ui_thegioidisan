"use client"

import Image from "next/image"

export function Masthead() {
  return (
    <header className="border-b-2 border-foreground/80 bg-background">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-4">
        {/* Left side - Logo */}
        <div className="flex items-center gap-4 shrink-0">
          <a href="/" className="block">
            <Image
              src="/images/logo-di-san.png"
              alt="Thế Giới Di Sản"
              width={180}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </a>
        </div>

        {/* Right side - Long Banner 675x90 */}
        <div className="hidden lg:flex items-center">
          <div 
            className="relative bg-muted/30 border border-dashed border-foreground/20 flex items-center justify-center overflow-hidden"
            style={{ width: 675, height: 90 }}
            data-banner-slot="masthead-right"
          >
            <Image
              src="/images/banner-masthead-right.png"
              alt="Banner"
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span className="absolute text-[9px] font-mono uppercase tracking-[0.15em] text-foreground/30 pointer-events-none">
              Banner 675x90
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
