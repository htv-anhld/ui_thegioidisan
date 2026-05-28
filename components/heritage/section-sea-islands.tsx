"use client"

import Image from "next/image"
import { useState } from "react"

const TABS = [
  { id: "all", label: "Tất cả" },
  { id: "baoton", label: "Bảo tồn" },
  { id: "kientruc", label: "Kiến trúc" },
  { id: "khaoco", label: "Khảo cổ" },
  { id: "lichsu", label: "Lịch sử" },
]

const ITEMS = [
  {
    img: "/images/heritage-5.png",
    cat: "Khảo cổ",
    title: "Tổng quan về khảo cổ, lịch sử - văn hóa Cù Lao Chàm",
  },
  {
    img: "/images/hero-heritage.png",
    cat: "Trưng bày",
    title: "Bãi Cỏi - Nơi gặp gỡ các nền văn hóa - bước từ hàn lâm ra với công chúng",
  },
  {
    img: "/images/heritage-2.png",
    cat: "Kiến trúc",
    title: "Di tích kiến trúc chùa, tháp thời Trần ở Thương cảng Vân Đồn",
  },
  {
    img: "/images/heritage-3.png",
    cat: "Bảo tồn",
    title: "Phấn đấu năm 2026 hoàn thành số hóa 100% di sản văn hóa",
  },
]

export function SectionSeaIslands() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <section className="border-b border-foreground/10">
      <div className="mx-auto max-w-[1200px] px-4 py-6">
        <div className="flex items-center gap-1 border-b border-foreground/15 mb-5">
          <span className="font-serif text-base font-bold text-accent mr-3 pb-2">DI SẢN & BIỂN ĐẢO</span>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 text-[10px] font-mono uppercase tracking-wider transition-colors border-b-2 -mb-[2px] ${
                activeTab === tab.id
                  ? "text-accent border-accent"
                  : "text-foreground/60 border-transparent hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Featured */}
          <article className="col-span-12 lg:col-span-6 group cursor-pointer">
            <div className="relative aspect-[16/10] overflow-hidden border border-foreground/10">
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
            <h3 className="mt-3 font-serif text-lg font-bold leading-tight group-hover:text-accent transition-colors">
              {ITEMS[0].title}
            </h3>
          </article>

          {/* Grid */}
          <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">
            {ITEMS.slice(1).map((item, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden border border-foreground/10">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="mt-2 font-serif text-[13px] font-medium leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </h4>
              </article>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div 
          className="mt-5 relative h-[80px] overflow-hidden border border-foreground/10"
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
