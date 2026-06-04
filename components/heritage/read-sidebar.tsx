"use client"

import Image from "next/image"
import { useState } from "react"

const READ_TABS = [
  { id: "most", label: "ĐỌC NHIỀU" },
  { id: "featured", label: "NỔI BẬT" },
]

const READ_ITEMS = [
  {
    img: "/images/heritage-3.png",
    title: "Đôi nét về 54 Dân tộc Việt Nam",
  },
  {
    img: "/images/heritage-2.png",
    title: "Khu Di tích Cổ Loa",
  },
  {
    img: "/images/portrait-1.png",
    title: "Nguyễn Ái Quốc ở Pháp (1917 - 1923) và những dấu ấn",
  },
  {
    img: "/images/heritage-1.png",
    title: "Trang phục dân tộc Tày",
  },
  {
    img: "/images/heritage-5.png",
    title: "Nghị quyết của Bộ Chính trị về việc thành lập Viện Bảo tàng Hồ Chí Minh và ý nghĩa đối với hoạt động hiện nay",
  },
  {
    img: "/images/portrait-1.png",
    title: "Bác Hồ ra đi tìm đường cứu nước và bước ngoặt của cách mạng Việt Nam",
  },
  {
    img: "/images/heritage-5.png",
    title: "Phát huy giá trị tư liệu và thư viện trong công tác nghiên cứu, tuyên truyền về Chủ tịch Hồ Chí Minh",
  },
]

const FEATURED_ITEMS = [
  {
    img: "/images/heritage-4.png",
    title: "Cố đô Huế: Hồi sinh ký ức trên những bức tường rêu phong",
  },
  {
    img: "/images/heritage-1.png",
    title: "Làng nghề truyền thống hồi sinh sau đại dịch",
  },
  {
    img: "/images/heritage-2.png",
    title: "Du lịch sinh thái - Xu hướng du lịch bền vững",
  },
  {
    img: "/images/heritage-3.png",
    title: "Sách thiếu nhi, sách bóng đá bán chạy tháng 5",
  },
  {
    img: "/images/hero-heritage.png",
    title: "Kỳ thi lớp 10 chưa từng có ở TP.HCM",
  },
]

export function ReadSidebar() {
  const [activeRead, setActiveRead] = useState("most")
  const items = activeRead === "most" ? READ_ITEMS : FEATURED_ITEMS

  return (
    <div className="sticky top-4">
      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-foreground/15 mb-3">
        {READ_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveRead(tab.id)}
            className={`px-2 py-2 text-[11px] font-mono uppercase tracking-wider transition-colors border-b-2 -mb-[2px] ${
              activeRead === tab.id
                ? "text-accent border-accent"
                : "text-foreground/60 border-transparent hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Items */}
      <div>
        {items.map((item, i) => (
          <article
            key={i}
            className="group cursor-pointer flex gap-3 py-3 border-b border-dashed border-foreground/15 last:border-b-0"
          >
            <div className="relative w-[72px] h-[54px] shrink-0 overflow-hidden border border-foreground/10">
              <Image src={item.img} alt={item.title} fill className="object-cover sepia-strong" />
            </div>
            <h4 className="flex-1 self-center font-serif text-[13px] leading-snug group-hover:text-accent transition-colors line-clamp-3">
              {item.title}
            </h4>
          </article>
        ))}
      </div>

      {/* Ads placeholder */}
      <div className="mt-5 flex items-center justify-center border border-dashed border-foreground/20 bg-foreground/[0.03] h-[300px] w-full max-w-[274px] mx-auto">
        <span className="text-[11px] font-mono uppercase tracking-wider text-foreground/40">Ads 200×300</span>
      </div>
    </div>
  )
}
