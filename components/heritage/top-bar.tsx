"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import Image from "next/image"

export function TopBar() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="border-b border-foreground/20 bg-foreground text-background">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.15em]">
        <div className="flex items-center gap-4">
          <span>Thứ Năm, 28 tháng 5, 2026</span>
          <span className="hidden sm:inline opacity-70">|</span>
          <span className="hidden sm:inline opacity-70">Hà Nội · 28°C</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Image src="/images/flag-us.png" alt="English" width={16} height={12} className="opacity-80" />
          </a>
          <span className="opacity-40">|</span>
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="hover:text-accent transition-colors p-1"
            aria-label="Tìm kiếm"
          >
            {searchOpen ? <X className="size-4" /> : <Search className="size-4" />}
          </button>
        </div>
      </div>
      
      {/* Search popup */}
      {searchOpen && (
        <div className="border-t border-background/20 bg-foreground/95 px-4 py-3">
          <div className="mx-auto max-w-[1200px]">
            <form className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                className="flex-1 bg-background/10 border border-background/30 px-4 py-2 text-sm text-background placeholder:text-background/50 focus:outline-none focus:border-accent"
                autoFocus
              />
              <button
                type="submit"
                className="bg-accent px-6 py-2 text-[10px] font-mono uppercase tracking-[0.15em] text-background hover:bg-accent/80 transition-colors"
              >
                Tìm
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
