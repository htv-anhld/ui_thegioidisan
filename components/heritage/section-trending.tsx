"use client"

import Image from "next/image"
import { TrendingUp } from "lucide-react"

const TRENDING = [
  {
    img: "/images/hero-heritage.png",
    title: "Crystal Palace giữ viện hoàn bảng dù Anh đội lăng danh xấu chơi",
    excerpt: "Danh sách chi hơn một triệu người đăng ký tham gia chương trình.",
    time: "2 giờ trước",
  },
  {
    img: "/images/heritage-1.png",
    title: "Lộ ăn hàng của nhân viên Techcombank",
    time: "3 giờ trước",
  },
  {
    img: "/images/heritage-2.png",
    title: "Trường học Khánh Nam xử lý việc người lạ xâm nhập",
    time: "4 giờ trước",
  },
  {
    img: "/images/heritage-3.png",
    title: "Làm thế nào để hay sự nghiệp thành công khi đã 40",
    time: "5 giờ trước",
  },
  {
    img: "/images/heritage-4.png",
    title: "Gạch sét nướng bản cần số chế làm giàu nguyên tắc",
    time: "6 giờ trước",
  },
  {
    img: "/images/heritage-5.png",
    title: "Tướng loạn Quân đoàn, ngày xưa từng là một người lính",
    time: "Hôm qua",
  },
]

const MOST_READ = [
  { title: "Thuật Long Thắng coi sự lượt yêu biết để mất việc", img: "/images/heritage-1.png" },
  { title: "Mỹ Premiers League, màn để tuổi đề điều gần", img: "/images/heritage-2.png" },
  { title: "HSBC người Việt Thắng sang giá nhất Premier League", img: "/images/heritage-3.png" },
  { title: "Bộ Công Thương tổng cố thủ với hàng hóa TQ", img: "/images/heritage-4.png" },
  { title: "Bí Công Thương nguy cơ thu từ hàng hóa TQ sang QPTP", img: "/images/heritage-5.png" },
]

export function SectionTrending() {
  const [featured, ...rest] = TRENDING

  return (
    <section className="bg-foreground text-background py-8">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp className="size-4 text-accent" />
          <h2 className="font-serif text-base font-bold text-accent">XU HƯỚNG</h2>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Featured trending */}
          <div className="col-span-12 lg:col-span-4">
            <article className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={featured.img}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <h3 className="mt-3 font-serif text-base font-bold leading-tight group-hover:text-accent transition-colors">
                {featured.title}
              </h3>
              <p className="mt-2 text-[13px] text-background/70 line-clamp-2">
                {featured.excerpt}
              </p>
              <span className="mt-2 block text-[10px] font-mono uppercase tracking-wider text-background/50">
                {featured.time}
              </span>
            </article>
          </div>

          {/* Trending grid */}
          <div className="col-span-12 lg:col-span-5">
            <div className="grid grid-cols-3 gap-3">
              {rest.slice(0, 6).map((item, i) => (
                <article key={i} className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="mt-2 font-serif text-[11px] leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                </article>
              ))}
            </div>
          </div>

          {/* Most read sidebar */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="border-l border-background/20 pl-4">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent mb-4">
                Đọc nhiều
              </h3>
              <ul className="space-y-3">
                {MOST_READ.map((item, i) => (
                  <li key={i} className="group cursor-pointer flex gap-3">
                    <div className="relative w-14 h-10 shrink-0 overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="flex-1 font-serif text-[11px] leading-snug group-hover:text-accent transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
