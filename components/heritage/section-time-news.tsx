"use client"

import Image from "next/image"
import { useState } from "react"

const TABS = [
  { id: "video", label: "VIDEO" },
  { id: "webcast", label: "WEBCAST" },
  { id: "longform", label: "LONGFORM" },
  { id: "photo", label: "ẢNH" },
  { id: "quiz", label: "QUIZ" },
]

const MEDIA_ITEMS = [
  {
    img: "/images/hero-heritage.png",
    title: "Thay máy ảnh vào cầu Long Biên sau gần 6 tháng trùng tu",
    time: "2 giờ trước",
    isVideo: true,
  },
  {
    img: "/images/heritage-2.png",
    title: "TP.HCM chuyển đổi hoàn toàn sang xe điện công cộng",
    time: "5 giờ trước",
  },
  {
    img: "/images/heritage-3.png",
    title: "Công ty di động xếp hạng Khamenei chọn 'không tương lai'",
    time: "Hôm qua",
  },
]

const SIDEBAR_ITEMS = [
  {
    img: "/images/heritage-4.png",
    title: "iPhone gặp sự cố mạnh không thể tự xử lý được",
    source: "Di sản",
  },
  {
    img: "/images/heritage-5.png",
    title: "Thị trường bất động sản khởi sắc trở lại",
    source: "Kinh tế",
  },
  {
    img: "/images/heritage-1.png",
    title: "Người dân mong chờ giảm giá xăng dầu",
    source: "Đời sống",
  },
]

export function SectionTimeNews() {
  const [activeTab, setActiveTab] = useState("video")

  return (
    <section className="border-b border-foreground/10">
      <div className="mx-auto max-w-[1200px] px-4 py-6">
        <div className="flex items-center gap-1 border-b border-foreground/15 mb-5">
          <span className="font-serif text-base font-bold text-accent mr-3 pb-2">ĐA PHƯƠNG TIỆN</span>
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

        <div className="grid grid-cols-12 gap-5">
          {/* Main media */}
          <div className="col-span-12 lg:col-span-8">
            <article className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden border border-foreground/10">
                <Image
                  src={MEDIA_ITEMS[0].img}
                  alt={MEDIA_ITEMS[0].title}
                  fill
                  className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {MEDIA_ITEMS[0].isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-foreground/70 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[16px] border-l-background border-y-[10px] border-y-transparent ml-1" />
                    </div>
                  </div>
                )}
              </div>
              <h2 className="mt-3 font-serif text-lg font-bold leading-tight group-hover:text-accent transition-colors">
                {MEDIA_ITEMS[0].title}
              </h2>
            </article>

            {/* Sub media grid */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              {MEDIA_ITEMS.slice(1).map((item, i) => (
                <article key={i} className="group cursor-pointer">
                  <div className="relative aspect-video overflow-hidden border border-foreground/10">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-2 font-serif text-[13px] font-medium leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-4 space-y-4">
            {/* Banner */}
            <div 
              className="relative h-[200px] overflow-hidden border border-foreground/10 bg-paper-dark/20"
              data-banner-slot="multimedia-sidebar"
            >
              <Image
                src="/images/portrait-1.png"
                alt="Banner"
                fill
                className="object-cover"
              />
            </div>

            {/* News list */}
            <div className="space-y-3">
              {SIDEBAR_ITEMS.map((item, i) => (
                <article key={i} className="group cursor-pointer flex gap-3">
                  <div className="relative w-[90px] h-[60px] shrink-0 overflow-hidden border border-foreground/10">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover sepia-strong"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-[12px] leading-snug group-hover:text-accent transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <span className="text-[9px] font-mono uppercase text-foreground/50 mt-1 block">{item.source}</span>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
