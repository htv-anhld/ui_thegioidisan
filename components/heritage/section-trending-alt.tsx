"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const TABS = [
  { id: "vat-the", label: "Di sản Văn hóa vật thể" },
  { id: "phi-vat-the", label: "Di sản Văn hóa phi vật thể" },
  { id: "le-hoi", label: "Lễ hội" },
  { id: "tam-linh", label: "Tâm linh - Tín ngưỡng" },
]

const FEATURED = {
  img: "/images/hero-heritage.png",
  cat: "Văn hóa",
  title: "Việt Nam lần đầu tiên đăng cai giải vô địch bóng đá Đông Nam Á 2026",
  description:
    "Liên đoàn bóng đá Đông Nam Á chính thức công bố Việt Nam sẽ là nước chủ nhà của giải AFF Cup 2026, đánh dấu cột mốc lịch sử cho bóng đá nước nhà.",
  href: "/bai-viet/viet-nam-dang-cai-aff-cup-2026",
}

const CARDS = [
  {
    img: "/images/heritage-1.png",
    title: "Lễ hội Áo dài Việt Nam 2026 thu hút hàng nghìn du khách quốc tế",
    href: "/bai-viet/le-hoi-ao-dai-2026",
  },
  {
    img: "/images/heritage-2.png",
    title: "10 điểm du lịch di sản được yêu thích nhất năm 2026",
    href: "/bai-viet/10-diem-du-lich-di-san",
  },
  {
    img: "/images/heritage-3.png",
    title: "Nghệ nhân trẻ hồi sinh nghề thêu truyền thống Huế",
    href: "/bai-viet/nghe-nhan-tre-hoi-sinh-nghe-theu-hue",
  },
  {
    img: "/images/heritage-4.png",
    title: "Phát hiện khu mộ cổ hơn 2.000 năm tuổi tại Quảng Nam",
    href: "/bai-viet/phat-hien-khu-mo-co-quang-nam",
  },
]

export function SectionTrendingAlt() {
  const [activeTab, setActiveTab] = useState("vat-the")

  return (
    <div>
      {/* Header with tabs */}
      <div className="flex items-center gap-1 border-b border-foreground/15 mb-5">
        <span className="font-serif text-base font-bold text-accent mr-3 pb-2">BẢO TỒN VÀ PHÁT TRIỂN</span>
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

      {/* Featured: text left, image right */}
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-start">
          <Link href={FEATURED.href} className="group block">
            <span className="text-[10px] font-mono uppercase tracking-wider text-foreground/50 mb-2 block">
              {FEATURED.cat}
            </span>
            <h2 className="font-serif text-xl font-bold leading-tight group-hover:text-accent transition-colors mb-3">
              {FEATURED.title}
            </h2>
            <p className="text-[13px] text-foreground/65 leading-relaxed">
              {FEATURED.description}
            </p>
          </Link>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <Link href={FEATURED.href} className="group block">
            <div className="relative aspect-[16/9] overflow-hidden border border-foreground/10">
              <Image
                src={FEATURED.img}
                alt={FEATURED.title}
                fill
                className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* 4 cards row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {CARDS.map((card, i) => (
          <Link key={i} href={card.href} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden border border-foreground/10 mb-2">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-[13px] font-medium leading-snug group-hover:text-accent transition-colors line-clamp-2">
              {card.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  )
}
