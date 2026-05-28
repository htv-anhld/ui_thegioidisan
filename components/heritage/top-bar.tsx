"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import Image from "next/image"

export function TopBar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="border-b border-foreground/20 bg-foreground text-background">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em]">
        <div className="flex items-center gap-4">
          <span>Thứ Năm, 28 tháng 5, 2026</span>
          <span className="hidden sm:inline opacity-70">|</span>
          <span className="hidden sm:inline opacity-70">Hà Nội · 28°C</span>
        </div>
        <div className="flex items-center gap-4">
          {/* Language switcher with flag */}
          <a className="hover:text-accent transition-colors flex items-center gap-1.5" href="#">
            <Image
              src="/images/flag-us.png"
              alt="English"
              width={16}
              height={12}
              className="rounded-sm"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span className="sr-only">English</span>
          </a>
          <span className="opacity-40">·</span>
          {/* Search icon with popup */}
          <div className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-accent transition-colors flex items-center"
              aria-label="Tìm kiếm"
            >
              {searchOpen ? <X className="size-4" /> : <Search className="size-4" />}
            </button>
            {searchOpen && (
              <div className="absolute right-0 top-full mt-2 z-50 bg-background border border-foreground/30 shadow-lg p-3 min-w-[280px]">
                <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); }}>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm bài viết..."
                    className="flex-1 bg-transparent text-foreground text-sm px-3 py-2 border border-foreground/30 placeholder:text-foreground/40 focus:outline-none focus:border-accent"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="bg-accent text-background px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] hover:bg-accent/90 transition-colors"
                  >
                    Tìm
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
