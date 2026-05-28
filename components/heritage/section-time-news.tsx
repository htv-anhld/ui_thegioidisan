"use client"

import Image from "next/image"
import { useState } from "react"
import { SectionHeading } from "./section-heading"

const TABS = [
  { id: "video", label: "VIDEO" },
  { id: "webcast", label: "WEBCAST" },
  { id: "longform", label: "LONGFORM" },
  { id: "photo", label: "ANH" },
  { id: "quiz", label: "QUIZ" },
]

const MEDIA_ITEMS = [
  {
    img: "/images/hero-heritage.png",
    title: "Thay may anh vao cau Long Bien sau gan 6 thang tram trong",
    time: "2 gio truoc",
    isVideo: true,
  },
  {
    img: "/images/heritage-2.png",
    title: "TPHCM chuyen doi hoan toan sang xe dien",
    time: "5 gio truoc",
  },
  {
    img: "/images/heritage-3.png",
    title: "Cong ty di dong xep hang Khamenei chon 'khong tuong lai'",
    time: "Hom qua",
  },
]

const SIDEBAR_ITEMS = [
  {
    img: "/images/heritage-4.png",
    title: "iPhone gap su co manh khong tu xu ly duoc",
    source: "Zing",
  },
  {
    img: "/images/heritage-5.png",
    title: "Thi truong bat dong san khoi sac tro lai",
    source: "Zing",
  },
  {
    img: "/images/heritage-1.png",
    title: "Nguoi dan mong cho giam gia xang",
    source: "Zing",
  },
]

export function SectionTimeNews() {
  const [activeTab, setActiveTab] = useState("video")

  return (
    <section className="border-b border-foreground/15">
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        <div className="flex items-center justify-between border-b border-foreground/20 mb-6">
          <div className="flex items-center gap-1">
            <span className="font-serif text-lg font-bold text-accent mr-4">MULTIMEDIA</span>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-[11px] font-mono uppercase tracking-wider transition-colors border-b-2 -mb-[2px] ${
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
          {/* Main media */}
          <div className="col-span-12 lg:col-span-8">
            <article className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden border border-foreground/15">
                <Image
                  src={MEDIA_ITEMS[0].img}
                  alt={MEDIA_ITEMS[0].title}
                  fill
                  className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {MEDIA_ITEMS[0].isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-foreground/80 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[20px] border-l-background border-y-[12px] border-y-transparent ml-1" />
                    </div>
                  </div>
                )}
              </div>
              <h2 className="mt-3 font-serif text-xl font-bold leading-tight group-hover:text-accent transition-colors">
                {MEDIA_ITEMS[0].title}
              </h2>
            </article>

            {/* Sub media grid */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              {MEDIA_ITEMS.slice(1).map((item, i) => (
                <article key={i} className="group cursor-pointer">
                  <div className="relative aspect-video overflow-hidden border border-foreground/15">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-2 font-serif text-sm font-semibold leading-snug group-hover:text-accent transition-colors line-clamp-2">
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
              className="relative h-[250px] overflow-hidden border border-foreground/15 bg-paper-dark/30"
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
                  <div className="relative w-24 h-16 shrink-0 overflow-hidden border border-foreground/15">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover sepia-strong"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm leading-snug group-hover:text-accent transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-mono uppercase text-foreground/50">{item.source}</span>
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
