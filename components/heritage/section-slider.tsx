"use client"

import Image from "next/image"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SLIDER_ITEMS = [
  {
    img: "/images/heritage-1.png",
    title: "Các nhà thám hiểm và cây cầu nối hai nửa thế giới",
  },
  {
    img: "/images/heritage-2.png",
    title: "Ngô Thanh Vân đọc hơn 30 cuốn sách về nuôi dạy con",
  },
  {
    img: "/images/heritage-3.png",
    title: "Hậu trường ít biết của điện ảnh cách mạng Việt Nam",
  },
  {
    img: "/images/heritage-4.png",
    title: "Những nhận thức sai lầm về nam và nữ",
  },
  {
    img: "/images/heritage-5.png",
    title: "Không có con cá nào trong câu 'Bắt cá hai tay'",
  },
  {
    img: "/images/hero-heritage.png",
    title: "Hàng triệu cuốn truyện tranh siêu anh hùng đang bị 'giam lỏng' tại Mỹ",
  },
  {
    img: "/images/portrait-1.png",
    title: "Dùng AI 'xào nấu', sách lậu như nấm sau mưa",
  },
  {
    img: "/images/heritage-1.png",
    title: "Vấn đề nan giải mà Columbus để lại nhiều thế kỷ",
  },
]

export function SectionSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <section className="border-b border-foreground/10">
      <div className="relative mx-auto max-w-[1200px] px-4 py-6">
        {/* Left arrow */}
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Tin trước"
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center border border-foreground/15 bg-background/90 text-foreground/70 transition-colors hover:bg-accent hover:text-background"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Right arrow */}
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Tin sau"
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center border border-foreground/15 bg-background/90 text-foreground/70 transition-colors hover:bg-accent hover:text-background"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Slider track */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {SLIDER_ITEMS.map((item, i) => (
            <article
              key={i}
              className="group w-[180px] shrink-0 cursor-pointer border border-foreground/10 bg-paper-warm/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="p-3 font-serif text-[14px] font-medium leading-snug group-hover:text-accent transition-colors line-clamp-3">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
