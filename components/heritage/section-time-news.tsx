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
]

const MEDIA_MAIN = {
  img: "/images/hero-heritage.png",
  title: "Thay máy ảnh vào cầu Long Biên sau gần 6 tháng trùng tu",
  isVideo: true,
}

const MEDIA_CARDS = [
  {
    img: "/images/heritage-2.png",
    title: "TP.HCM chuyển đổi hoàn toàn sang xe điện công cộng",
  },
  {
    img: "/images/heritage-3.png",
    title: "Công ty di động xếp hạng Khamenei chọn 'không tương lai'",
  },
  {
    img: "/images/heritage-1.png",
    title: "TP.HCM chuyển đổi hoàn toàn sang xe điện công cộng",
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
  {
    img: "/images/heritage-2.png",
    title: "Lễ hội truyền thống thu hút hàng nghìn du khách",
    source: "Văn hóa",
  },
  {
    img: "/images/heritage-3.png",
    title: "Bảo tồn nghề dệt thổ cẩm của người dân tộc",
    source: "Đời sống",
  },
  {
    img: "/images/heritage-5.png",
    title: "Người dân mong chờ giảm giá xăng dầu",
    source: "Đời sống",
  },
]

export function SectionTimeNews() {
  const [activeTab, setActiveTab] = useState("video")
  const [activeRead, setActiveRead] = useState("most")

  return (
    <section className="border-b border-foreground/10">
      <div className="mx-auto max-w-[1200px] px-4 py-6">
        {/* Section header - full width */}
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
          {/* Left main area - video + 3 cards */}
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-12 gap-5">
              {/* Main video */}
              <div className="col-span-12 lg:col-span-8">
                <article className="group cursor-pointer">
                  <div className="relative aspect-video overflow-hidden border border-foreground/10">
                    <Image
                      src={MEDIA_MAIN.img}
                      alt={MEDIA_MAIN.title}
                      fill
                      className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    {MEDIA_MAIN.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-foreground/70 flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[16px] border-l-background border-y-[10px] border-y-transparent ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              </div>

              {/* Middle list - 6 items */}
              <aside className="col-span-12 lg:col-span-4 flex flex-col justify-between">
                {SIDEBAR_ITEMS.map((item, i) => (
                  <article key={i} className="group cursor-pointer flex gap-3 py-2 border-b border-foreground/10 last:border-b-0">
                    <div className="relative w-[90px] h-[60px] shrink-0 overflow-hidden border border-foreground/10">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover sepia-strong"
                      />
                    </div>
                    <div className="flex-1 min-w-0 self-center">
                      <h4 className="font-serif text-[12px] leading-snug group-hover:text-accent transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <span className="text-[9px] font-mono uppercase text-foreground/50 mt-1 block">{item.source}</span>
                    </div>
                  </article>
                ))}
              </aside>
            </div>

            {/* Title + 3 cards row */}
            <h2 className="mt-5 font-serif text-lg font-bold leading-tight">
              {MEDIA_MAIN.title}
            </h2>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {MEDIA_CARDS.map((item, i) => (
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

          {/* Right column - Đọc nhiều + Ads */}
          <div className="col-span-12 lg:col-span-3">
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

            <div>
              {READ_ITEMS.map((item, i) => (
                <article
                  key={i}
                  className="group cursor-pointer flex gap-3 py-3 border-b border-dashed border-foreground/15 last:border-b-0"
                >
                  <div className="relative w-[72px] h-[54px] shrink-0 overflow-hidden border border-foreground/10">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover sepia-strong"
                    />
                  </div>
                  <h4 className="flex-1 self-center font-serif text-[13px] leading-snug group-hover:text-accent transition-colors line-clamp-3">
                    {item.title}
                  </h4>
                </article>
              ))}
            </div>

            {/* Ads placeholder */}
            <div className="mt-5 flex items-center justify-center border border-dashed border-foreground/20 bg-foreground/[0.03] h-[300px] w-full max-w-[200px] mx-auto">
              <span className="text-[11px] font-mono uppercase tracking-wider text-foreground/40">Ads 200×300</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
