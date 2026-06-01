"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const LEFT_NEWS = [
  {
    img: "/images/heritage-1.png",
    title: "Bảng lương giáo viên từ 1/7",
  },
  {
    img: "/images/heritage-3.png",
    title: "Đội tuyển World Cup có tới 25 người đến từ Hà Lan",
  },
  {
    img: "/images/heritage-4.png",
    title: "Casemiro tiếp tục thăng hoa khi lên tuyển Brazil",
  },
  {
    img: "/images/heritage-5.png",
    title: "Dòng xe nào cần lưu ý khi dùng xăng E10?",
  },
  {
    img: "/images/heritage-2.png",
    title: "Iran dội 'gáo nước lạnh' vào Mỹ",
  },
]

const CENTER_NEWS = [
  {
    img: "/images/hero-heritage.png",
    title: "Xã vùng ven TP.HCM liền kề siêu nút giao 115.000 tỷ muốn lên phường",
    subtitle: "14 km cao tốc Bến Lức - Long Thành chờ thông tuyến",
  },
  {
    img: "/images/heritage-2.png",
    title: "Cố đô Huế: Hồi sinh ký ức trên những bức tường rêu phong",
    subtitle: "Từ Đại Nội đến lăng tẩm, công nghệ số hóa hồi sinh hoa văn cổ",
  },
  {
    img: "/images/heritage-3.png",
    title: "Bắc Ninh đón nhận Bằng UNESCO và khai mạc Festival Về miền di sản 2026",
    subtitle: "Hàng nghìn người tham dự lễ hội văn hóa đặc sắc",
  },
]

const RIGHT_NEWS = [
  {
    img: "/images/portrait-1.png",
    title: "Kỳ thi lớp 10 chưa từng có ở TP.HCM",
  },
  {
    img: "/images/heritage-4.png",
    title: "Sách thiếu nhi, sách bóng đá bán chạy tháng 5",
  },
]

export function HeroSection() {
  const [centerIndex, setCenterIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % CENTER_NEWS.length)
    }, 5 * 60 * 1000) // 5 minutes

    return () => clearInterval(interval)
  }, [])

  const currentCenter = CENTER_NEWS[centerIndex]

  return (
    <section className="border-b border-foreground/10">
      <div className="mx-auto max-w-[1200px] px-4 py-5">
        <div className="grid grid-cols-12 gap-4">
          {/* Left column - stacked news with thumbnails */}
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-between">
            {LEFT_NEWS.map((item, i) => (
              <article key={i} className="group cursor-pointer flex gap-3 py-3 border-b border-foreground/10 last:border-b-0 last:pb-0">
                <div className="relative w-[72px] h-[72px] shrink-0 overflow-hidden border border-foreground/10">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="flex-1 self-center font-serif text-[15px] font-medium leading-snug group-hover:text-accent transition-colors line-clamp-3">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>

          {/* Center column - large featured (rotates every 5 min) */}
          <div className="col-span-12 lg:col-span-6">
            <article className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden border border-foreground/10">
                <Image
                  src={currentCenter.img}
                  alt={currentCenter.title}
                  fill
                  className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
              </div>
              <h2 className="mt-3 font-serif text-2xl font-bold leading-tight group-hover:text-accent transition-colors">
                {currentCenter.title}
              </h2>
              <p className="mt-2 flex items-center gap-2 text-sm text-foreground/70">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent"></span>
                {currentCenter.subtitle}
              </p>
            </article>
          </div>

          {/* Right column - 2 large stacked cards */}
          <aside className="col-span-12 lg:col-span-3 flex flex-col justify-between gap-4">
            {RIGHT_NEWS.map((item, i) => (
              <article key={i} className="group cursor-pointer flex-1 flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden border border-foreground/10">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 font-serif text-[15px] font-medium leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </h3>
              </article>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
