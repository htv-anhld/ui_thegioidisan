"use client"

import Image from "next/image"

const MAIN_NEWS = {
  img: "/images/hero-heritage.png",
  cat: "Tieu diem",
  title: "Co do Hue: hoi sinh ky uc tren nhung buc tuong reu phong",
  excerpt: "Tu Dai Noi den lang tam, cac nha bao ton dang dung cong nghe so hoa de hoi sinh nhung hoa van, mang cham khac da bi thoi gian xoa mo.",
  author: "Le Minh Khoi",
  time: "2 gio truoc"
}

const SIDE_NEWS = [
  {
    img: "/images/heritage-1.png",
    title: "Phan dau nam 2026 hoan thanh so hoa 100% cac di san van hoa da duoc xep hang",
    time: "3 gio truoc"
  },
  {
    img: "/images/heritage-2.png", 
    title: "Hoi thao khoa hoc ve Thuong thu Ninh Ton: ket noi ky uc lich su voi hien tai",
    time: "5 gio truoc"
  },
  {
    img: "/images/heritage-3.png",
    title: "Bac Ninh don nhan Bang cua UNESCO va khai mac Festival Ve mien di san 2026",
    time: "Hom qua"
  },
]

const SMALL_NEWS = [
  { title: "Cu Lao Cham - tong quan ve khao co, lich su va van hoa", cat: "Di san" },
  { title: "Kien truc chua, thap thoi Tran o Thuong cang Van Don", cat: "Kien truc" },
  { title: "Nhung trai nghiem am thuc doc ban khi den Sa Pa", cat: "Am thuc" },
  { title: "Trung bay 156 hinh tuong Lenin tai Bao tang Lich su", cat: "Su kien" },
]

const MOST_READ = [
  { title: "Khong con smartphone 'gia tot'?", views: "12.5K" },
  { title: "Ly do Ronaldo khoc khi mat penalty", views: "10.2K" },
  { title: "HCMC van con hang nghin can nha dot nat", views: "8.7K" },
  { title: "Xu ly the nao voi nguoi gac chan xe lua?", views: "7.3K" },
]

export function HeroSection() {
  return (
    <section className="border-b border-foreground/15">
      <div className="mx-auto max-w-[1200px] px-4 py-4">
        <div className="grid grid-cols-12 gap-4">
          {/* Main featured article - Left column */}
          <div className="col-span-12 lg:col-span-5">
            <article className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden border border-foreground/15">
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
            <div className="mt-4 space-y-3 border-t border-foreground/15 pt-4">
              {SMALL_NEWS.map((item, i) => (
                <article key={i} className="group cursor-pointer flex items-start gap-2">
                  <span className="text-accent font-serif text-lg leading-none">•</span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent">{item.cat}</span>
                    <h4 className="font-serif text-sm leading-snug group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Middle column - stacked news */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            {SIDE_NEWS.map((item, i) => (
              <article key={i} className="group cursor-pointer flex gap-3">
                <div className="relative w-28 h-20 shrink-0 overflow-hidden border border-foreground/15">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-sm font-semibold leading-snug group-hover:text-accent transition-colors line-clamp-3">
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
              className="relative h-[100px] overflow-hidden border border-foreground/15 bg-paper-dark/30"
              data-banner-slot="hero-center"
            >
              <Image
                src="/images/heritage-5.png"
                alt="Banner"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/40">
                <span className="text-[10px] font-mono uppercase tracking-wider text-background/80">Quang cao</span>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="col-span-12 lg:col-span-3 space-y-4">
            {/* Banner slot */}
            <div 
              className="relative aspect-[3/4] overflow-hidden border border-foreground/15 bg-paper-dark/30"
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
            <div className="border border-foreground/15 bg-paper-dark/20 p-4">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground border-b border-foreground/20 pb-2 mb-3">
                Doc nhieu
              </h3>
              <ul className="space-y-3">
                {MOST_READ.map((item, i) => (
                  <li key={i} className="group cursor-pointer flex items-start gap-2">
                    <span className="font-serif text-lg font-bold text-accent leading-none w-5">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm leading-snug group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-mono text-foreground/50">{item.views} luot xem</span>
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
