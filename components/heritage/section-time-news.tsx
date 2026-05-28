"use client"

import Image from "next/image"
import { useState } from "react"
import { SectionHeading } from "./section-heading"

const TABS = [
  {
    label: "Theo dòng thời sự",
    items: [
      {
        img: "/images/heritage-2.png",
        cat: "Thời sự",
        title: "Phấn đấu hoàn thành số hoá 100% di sản đã xếp hạng vào năm 2026",
        excerpt:
          "Bộ VHTTDL công bố kế hoạch chuyển đổi số toàn diện hệ thống di tích, bảo tàng trên cả nước.",
        time: "28.05.2026",
      },
      {
        img: "/images/heritage-3.png",
        cat: "Sự kiện",
        title: "Bắc Ninh đón nhận Bằng UNESCO và khai mạc Festival Về miền di sản 2026",
        excerpt:
          "Lễ hội quy tụ hàng trăm nghệ nhân quan họ, tranh Đông Hồ, gốm Phù Lãng cùng nhiều di sản phi vật thể.",
        time: "27.05.2026",
      },
      {
        img: "/images/heritage-4.png",
        cat: "Diễn đàn",
        title: "Cụ thể hoá nội hàm “bản sắc văn hoá dân tộc” khi sửa Luật Kiến trúc",
        excerpt:
          "Các kiến trúc sư, nhà nghiên cứu góp ý sâu rộng cho dự thảo sửa đổi Luật Kiến trúc 2019.",
        time: "26.05.2026",
      },
    ],
  },
  {
    label: "Ẩm thực",
    items: [
      {
        img: "/images/heritage-3.png",
        cat: "Ẩm thực",
        title: "Những trải nghiệm ẩm thực “độc bản” không thể bỏ lỡ khi đến Sa Pa",
        excerpt: "Từ thắng cố đêm sương đến cá hồi nướng lá rừng — bản đồ vị giác của vùng cao.",
        time: "28.05.2026",
      },
      {
        img: "/images/heritage-1.png",
        cat: "Làng nghề",
        title: "Bánh khô mè Cẩm Lệ — hương vị Đà thành đi qua ba thế kỷ",
        excerpt: "Nghệ nhân cuối cùng của làng vẫn giữ lò than và cối đá để giữ chất truyền thống.",
        time: "26.05.2026",
      },
      {
        img: "/images/heritage-2.png",
        cat: "Ẩm thực",
        title: "La Maison 1888 tại InterContinental Đà Nẵng tiếp tục giữ sao Michelin",
        excerpt: "Nhà hàng Việt mang triết lý ẩm thực thuộc địa Pháp được vinh danh năm thứ ba.",
        time: "24.05.2026",
      },
    ],
  },
  {
    label: "Di sản đó đây",
    items: [
      {
        img: "/images/hero-heritage.png",
        cat: "Di sản",
        title: "Cù Lao Chàm — tổng quan về khảo cổ, lịch sử và văn hoá",
        excerpt: "Hòn ngọc giữa biển từng là cảng thị sầm uất của Champa và Đại Việt.",
        time: "27.05.2026",
      },
      {
        img: "/images/heritage-5.png",
        cat: "Khảo cổ",
        title: "Bãi Cọi — nơi gặp gỡ các nền văn hoá ven sông Hà Tĩnh",
        excerpt: "Phát hiện khảo cổ bước ra với công chúng qua trưng bày chuyên đề.",
        time: "25.05.2026",
      },
      {
        img: "/images/heritage-4.png",
        cat: "Kiến trúc",
        title: "Kiến trúc chùa, tháp thời Trần ở Thương cảng Vân Đồn",
        excerpt: "Lớp đất biển đảo Đông Bắc đang dần hé lộ một di sản thương mại sầm uất.",
        time: "23.05.2026",
      },
    ],
  },
]

export function SectionTimeNews() {
  const [active, setActive] = useState(0)
  const t = TABS[active]
  const [lead, ...rest] = t.items

  return (
    <section className="border-b border-foreground/15">
      <div className="mx-auto max-w-[1440px] px-4 py-12">
        <SectionHeading title="Theo dòng thời sự" subtitle="Daily Heritage News" />

        <div className="mb-6 flex flex-wrap items-center gap-2">
          {TABS.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] border transition-colors ${
                i === active
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground/70 border-foreground/30 hover:border-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Lead */}
          <article className="col-span-12 md:col-span-6 group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden border border-foreground/15">
              <Image
                src={lead.img || "/placeholder.svg"}
                alt={lead.title}
                fill
                className="object-cover sepia-strong transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                {lead.cat}
              </span>
              <h3 className="mt-2 font-serif text-2xl md:text-3xl font-bold leading-tight text-balance group-hover:text-accent transition-colors">
                {lead.title}
              </h3>
              <p className="mt-3 font-serif text-base leading-relaxed text-foreground/75 text-pretty">
                {lead.excerpt}
              </p>
              <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                {lead.time}
              </span>
            </div>
          </article>

          {/* Side list */}
          <div className="col-span-12 md:col-span-6 flex flex-col divide-y divide-foreground/15">
            {rest.map((it, i) => (
              <article key={i} className="group flex gap-4 py-4 first:pt-0 cursor-pointer">
                <div className="relative size-28 shrink-0 overflow-hidden border border-foreground/15">
                  <Image
                    src={it.img || "/placeholder.svg"}
                    alt={it.title}
                    fill
                    className="object-cover sepia-strong transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                    {it.cat}
                  </span>
                  <h4 className="mt-1 font-serif text-lg font-semibold leading-snug text-pretty group-hover:text-accent transition-colors">
                    {it.title}
                  </h4>
                  <p className="mt-1 font-serif text-sm leading-snug text-foreground/70 line-clamp-2">
                    {it.excerpt}
                  </p>
                  <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                    {it.time}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
