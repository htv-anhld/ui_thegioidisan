"use client"

import Image from "next/image"
import { useState } from "react"

const TABS = [
  { id: "all", label: "Tat ca" },
  { id: "baoton", label: "Bao ton" },
  { id: "kientruc", label: "Kien truc" },
  { id: "khaoco", label: "Khao co" },
  { id: "lich su", label: "Lich su" },
]

const ITEMS = [
  {
    img: "/images/heritage-5.png",
    cat: "Khao co",
    title: "Tong quan ve khao co, lich su - van hoa Cu Lao Cham",
  },
  {
    img: "/images/hero-heritage.png",
    cat: "Trung bay",
    title: "Bai Coi - Noi gap go cac nen van hoa - buoc tu han lam ra voi cong chung",
  },
  {
    img: "/images/heritage-2.png",
    cat: "Kien truc",
    title: "Di tich kien truc chua, thap thoi Tran o Thuong cang Van Don",
  },
  {
    img: "/images/heritage-3.png",
    cat: "Bao ton",
    title: "Phan dau nam 2026 hoan thanh so hoa 100% di san",
  },
]

export function SectionSeaIslands() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <section className="border-b border-foreground/15">
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        <div className="flex items-center justify-between border-b border-foreground/20 mb-6">
          <div className="flex items-center gap-1">
            <span className="font-serif text-lg font-bold text-accent mr-4">DI SAN & BIEN DAO</span>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-[11px] font-mono uppercase tracking-wider transition-colors border-b-2 -mb-[2px] ${
                  activeTab === tab.id
                    ? "text-accent border-accent"
                    : "text-foreground/60 border-transparent hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Featured */}
          <article className="col-span-12 lg:col-span-6 group cursor-pointer">
            <div className="relative aspect-[16/10] overflow-hidden border border-foreground/15">
              <Image
                src={ITEMS[0].img}
                alt={ITEMS[0].title}
                fill
                className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute left-3 top-3 bg-accent px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-background">
                {ITEMS[0].cat}
              </span>
            </div>
            <h3 className="mt-3 font-serif text-xl font-bold leading-tight group-hover:text-accent transition-colors">
              {ITEMS[0].title}
            </h3>
          </article>

          {/* Grid */}
          <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">
            {ITEMS.slice(1).map((item, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden border border-foreground/15">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="mt-2 font-serif text-sm font-semibold leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </h4>
              </article>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div 
          className="mt-6 relative h-[90px] overflow-hidden border border-foreground/15"
          data-banner-slot="sea-islands-banner"
        >
          <Image
            src="/images/banner-masthead-right.png"
            alt="Banner"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
