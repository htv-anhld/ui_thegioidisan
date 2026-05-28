"use client"

import Image from "next/image"

export function Masthead() {
  return (
    <header className="border-b-2 border-foreground/80 bg-background">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 items-center gap-4 px-4 py-6">
        {/* Left side - Banner */}
        <div className="col-span-3 hidden md:flex items-center justify-start">
          <div 
            className="relative bg-muted/30 border border-dashed border-foreground/20 flex items-center justify-center overflow-hidden"
            style={{ width: 280, height: 90 }}
            data-banner-slot="masthead-left"
          >
            <Image
              src="/images/banner-masthead-left.png"
              alt="Banner"
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span className="absolute text-[9px] font-mono uppercase tracking-[0.15em] text-foreground/30 pointer-events-none">
              Banner 280x90
            </span>
          </div>
        </div>

        {/* Center - Logo */}
        <div className="col-span-12 md:col-span-6 flex flex-col items-center text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-foreground/60">
            — Văn hoá · Lịch sử · Kiến trúc —
          </span>
          <h1 className="mt-2 font-serif text-5xl md:text-6xl font-black leading-none tracking-tight text-foreground">
            Thế Giới <span className="italic font-light text-accent">Di Sản</span>
          </h1>
          <span className="mt-2 text-[11px] font-mono uppercase tracking-[0.35em] text-foreground/60">
            Heritage Magazine · Established 2002
          </span>
        </div>

        {/* Right side - Logo image placeholder */}
        <div className="col-span-3 hidden md:flex justify-end">
          <div 
            className="relative bg-muted/30 border border-dashed border-foreground/20 flex items-center justify-center overflow-hidden"
            style={{ width: 120, height: 80 }}
          >
            <Image
              src="/images/logo-heritage.png"
              alt="Thế Giới Di Sản Logo"
              fill
              className="object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span className="absolute text-[8px] font-mono uppercase tracking-[0.15em] text-foreground/30 pointer-events-none">
              Logo
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
