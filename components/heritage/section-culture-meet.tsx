import Image from "next/image"
import { SectionHeading } from "./section-heading"

const FEATURED = {
  img: "/images/heritage-3.png",
  cat: "Lễ hội",
  title: "Lễ hội Du lịch biển Sầm Sơn 2026 — “Khát vọng rực rỡ”",
  excerpt:
    "Tối 25/4/2026, tỉnh Thanh Hoá phối hợp Tập đoàn Sun Group khai mạc lễ hội với hàng chục hoạt động văn hoá, ẩm thực, biểu diễn nghệ thuật trên bãi biển dài 3,5km.",
}

const SIDE = [
  "Dấu ấn tư nhân qua những công trình kỷ lục đưa du lịch Việt thăng hạng",
  "Núi Bà Đen — điểm đến yêu thích mới của du khách Ấn Độ",
  "“Ngũ tầng kỳ quan” thiên nhiên dệt nên tuyệt tác sống tại Hải Vân Bay",
  "Sa Pa từ bước ngoặt cáp treo đến điểm đến tăng trưởng nhanh nhất châu Á",
  "Lễ hội Bia & Ẩm thực quốc tế tại Vinhomes Grand Park thu hút hàng nghìn người",
]

export function SectionCultureMeet() {
  return (
    <section className="border-b border-foreground/15">
      <div className="mx-auto max-w-[1440px] px-4 py-12">
        <SectionHeading title="Điểm hẹn văn hoá" subtitle="Culture · Festival · Travel" />
        <div className="grid grid-cols-12 gap-6">
          <article className="col-span-12 md:col-span-7 group cursor-pointer">
            <div className="relative aspect-[16/10] overflow-hidden border border-foreground/15">
              <Image
                src={FEATURED.img || "/placeholder.svg"}
                alt={FEATURED.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-background">
                  {FEATURED.cat}
                </span>
                <h3 className="mt-3 font-serif text-2xl md:text-3xl font-bold leading-tight text-background text-balance">
                  {FEATURED.title}
                </h3>
                <p className="mt-2 hidden md:block font-serif text-base leading-relaxed text-background/85 text-pretty">
                  {FEATURED.excerpt}
                </p>
              </div>
            </div>
          </article>

          <aside className="col-span-12 md:col-span-5">
            <ol className="divide-y divide-foreground/15 border-y border-foreground/15">
              {SIDE.map((t, i) => (
                <li key={i} className="group flex items-start gap-4 py-4 cursor-pointer">
                  <span className="font-serif text-3xl font-light leading-none text-accent w-10 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-serif text-base font-semibold leading-snug text-pretty group-hover:text-accent transition-colors">
                    {t}
                  </h4>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  )
}
