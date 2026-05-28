"use client"

import Image from "next/image"

const MAIN_NEWS = {
  img: "/images/hero-heritage.png",
  cat: "Tiêu điểm",
  title: "Cố đô Huế: Hồi sinh ký ức trên những bức tường rêu phong",
  excerpt: "Từ Đại Nội đến lăng tẩm, các nhà bảo tồn đang dùng công nghệ số hóa để hồi sinh những hoa văn, mảng chạm khắc đã bị thời gian xóa mờ.",
  author: "Lê Minh Khôi",
  time: "2 giờ trước"
}

const SIDE_NEWS = [
  {
    img: "/images/heritage-1.png",
    title: "Phấn đấu năm 2026 hoàn thành số hóa 100% các di sản văn hóa đã được xếp hạng",
    time: "3 giờ trước"
  },
  {
    img: "/images/heritage-2.png", 
    title: "Hội thảo khoa học về Thượng thư Ninh Tốn: Kết nối ký ức lịch sử với hiện tại",
    time: "5 giờ trước"
  },
  {
    img: "/images/heritage-3.png",
    title: "Bắc Ninh đón nhận Bằng của UNESCO và khai mạc Festival Về miền di sản 2026",
    time: "Hôm qua"
  },
]

const SMALL_NEWS = [
  { title: "Cù Lao Chàm - Tổng quan về khảo cổ, lịch sử và văn hóa", cat: "Di sản" },
  { title: "Kiến trúc chùa, tháp thời Trần ở Thương cảng Vân Đồn", cat: "Kiến trúc" },
  { title: "Những trải nghiệm ẩm thực độc bản khi đến Sa Pa", cat: "Ẩm thực" },
  { title: "Trưng bày 156 hình tượng Lênin tại Bảo tàng Lịch sử", cat: "Sự kiện" },
]

const MOST_READ = [
  { title: "Không còn smartphone 'giá tốt'?", views: "12.5K" },
  { title: "Lý do Ronaldo khóc khi hỏng penalty", views: "10.2K" },
  { title: "TP.HCM vẫn còn hàng nghìn căn nhà đột nát", views: "8.7K" },
  { title: "Xử lý thế nào với người gác chắn xe lửa?", views: "7.3K" },
]

export function HeroSection() {
  return (
    <section className="border-b border-foreground/10">
      <div className="mx-auto max-w-[1200px] px-4 py-6">
        <div className="grid grid-cols-12 gap-5">
          {/* Main featured article - Left column */}
          <div className="col-span-12 lg:col-span-5">
            <article className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden border border-foreground/10">
                <Image
                  src={MAIN_NEWS.img}
                  alt={MAIN_NEWS.title}
                  fill
                  className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
                <span className="absolute left-3 top-3 bg-accent px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-background">
                  {MAIN_NEWS.cat}
                </span>
              </div>
              <h2 className="mt-3 font-serif text-xl font-bold leading-tight group-hover:text-accent transition-colors">
                {MAIN_NEWS.title}
              </h2>
              <p className="mt-2 font-serif text-sm leading-relaxed text-foreground/70 line-clamp-2">
                {MAIN_NEWS.excerpt}
              </p>
              <div className="mt-2 flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-foreground/50">
                <span>{MAIN_NEWS.author}</span>
                <span>·</span>
                <span>{MAIN_NEWS.time}</span>
              </div>
            </article>

            {/* Small news list below main */}
            <div className="mt-4 space-y-2 border-t border-foreground/10 pt-4">
              {SMALL_NEWS.map((item, i) => (
                <article key={i} className="group cursor-pointer flex items-start gap-2">
                  <span className="text-accent font-serif text-base leading-none mt-1">•</span>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-accent">{item.cat}</span>
                    <h4 className="font-serif text-[13px] leading-snug group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Middle column - stacked news */}
          <div className="col-span-12 lg:col-span-4 space-y-3">
            {SIDE_NEWS.map((item, i) => (
              <article key={i} className="group cursor-pointer flex gap-3">
                <div className="relative w-[110px] h-[75px] shrink-0 overflow-hidden border border-foreground/10">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-[13px] font-medium leading-snug group-hover:text-accent transition-colors line-clamp-3">
                    {item.title}
                  </h3>
                  <span className="mt-1 block text-[10px] font-mono uppercase tracking-wider text-foreground/50">
                    {item.time}
                  </span>
                </div>
              </article>
            ))}

            {/* Center banner */}
            <div 
              className="relative h-[90px] overflow-hidden border border-foreground/10 bg-paper-dark/20 mt-4"
              data-banner-slot="hero-center"
            >
              <Image
                src="/images/heritage-5.png"
                alt="Banner"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/30">
                <span className="text-[10px] font-mono uppercase tracking-wider text-background/80">Quảng cáo</span>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="col-span-12 lg:col-span-3 space-y-4">
            {/* Banner slot */}
            <div 
              className="relative aspect-[4/5] overflow-hidden border border-foreground/10 bg-paper-dark/20"
              data-banner-slot="hero-sidebar"
            >
              <Image
                src="/images/portrait-1.png"
                alt="Banner"
                fill
                className="object-cover"
              />
            </div>

            {/* Most read */}
            <div className="border border-foreground/10 bg-paper-dark/10 p-3">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground border-b border-foreground/15 pb-2 mb-3">
                Đọc nhiều
              </h3>
              <ul className="space-y-2">
                {MOST_READ.map((item, i) => (
                  <li key={i} className="group cursor-pointer flex items-start gap-2">
                    <span className="font-serif text-base font-bold text-accent leading-none w-4 shrink-0">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-[12px] leading-snug group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[9px] font-mono text-foreground/50">{item.views} lượt xem</span>
                    </div>
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
