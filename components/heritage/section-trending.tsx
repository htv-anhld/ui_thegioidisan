"use client"

import Image from "next/image"
import { TrendingUp } from "lucide-react"

const TRENDING = [
  {
    img: "/images/hero-heritage.png",
    title: "Crystal Palace giu vien hoan bang du Am 2 doi lang danh xau choi",
    excerpt: "Danh sach chi hon mot trieu nguoi dang ky tham gia chuong trinh.",
    time: "2 gio truoc",
  },
  {
    img: "/images/heritage-1.png",
    title: "Lo an hang cua nhan vien Techcom",
    time: "3 gio truoc",
  },
  {
    img: "/images/heritage-2.png",
    title: "Truong hoc Khan nam xu ly viec nguoi la xam nhap",
    time: "4 gio truoc",
  },
  {
    img: "/images/heritage-3.png",
    title: "Lam the nao de hay su nghiep thanh cong khi da 40",
    time: "5 gio truoc",
  },
  {
    img: "/images/heritage-4.png",
    title: "Gach set nuong ban can so che lam giau nguyen tac",
    time: "6 gio truoc",
  },
  {
    img: "/images/heritage-5.png",
    title: "Tuong loan Quan doan, ngay xua tung la mot nguoi linh",
    time: "Hom qua",
  },
]

const MOST_READ = [
  { title: "Thuat Long Thang coi su luot yeu biet de mat viec", img: "/images/heritage-1.png" },
  { title: "My Premiers League, man de tuoi de dieu gan", img: "/images/heritage-2.png" },
  { title: "HSBC nguoi Viet Thang sang gia nhat Premier League", img: "/images/heritage-3.png" },
  { title: "Bo Cong Thuong tong co thu voi hang hoa TQ", img: "/images/heritage-4.png" },
  { title: "Bi Cong Thuong nguy co thu tu hang hoa TQ sang QPTP", img: "/images/heritage-5.png" },
]

export function SectionTrending() {
  const [featured, ...rest] = TRENDING

  return (
    <section className="bg-foreground text-background py-10">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="size-5 text-accent" />
          <h2 className="font-serif text-xl font-bold text-accent">TRENDING</h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
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
              <h3 className="mt-3 font-serif text-lg font-bold leading-tight group-hover:text-accent transition-colors">
                {featured.title}
              </h3>
              <p className="mt-2 text-sm text-background/70 line-clamp-2">
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
                  <h4 className="mt-2 font-serif text-xs leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                </article>
              ))}
            </div>
          </div>

          {/* Most read sidebar */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="border-l border-background/20 pl-4">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
                Doc nhieu
              </h3>
              <ul className="space-y-4">
                {MOST_READ.map((item, i) => (
                  <li key={i} className="group cursor-pointer flex gap-3">
                    <div className="relative w-16 h-12 shrink-0 overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="flex-1 font-serif text-sm leading-snug group-hover:text-accent transition-colors line-clamp-2">
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
