import Image from "next/image"
import { SectionHeading } from "./section-heading"

const ITEMS = [
  {
    img: "/images/heritage-5.png",
    cat: "Khảo cổ",
    title: "Tổng quan về khảo cổ, lịch sử – văn hoá Cù Lao Chàm",
    excerpt:
      "Cù Lao Chàm — Sanfu-Fù law, Pulociam, Chiêm Bất Lao... những tên gọi khác nhau gợi nhắc một thời kỳ giao thương sôi động ngoài khơi xứ Quảng.",
  },
  {
    img: "/images/hero-heritage.png",
    cat: "Trưng bày",
    title: "“Bãi Cọi – Nơi gặp gỡ các nền văn hoá” — bước từ hàn lâm ra với công chúng",
    excerpt:
      "Trưng bày phối hợp giữa Bảo tàng Lịch sử Quốc gia và Bảo tàng Hà Tĩnh nhân ngày Di sản Văn hoá Việt Nam.",
  },
  {
    img: "/images/heritage-2.png",
    cat: "Kiến trúc",
    title: "Di tích kiến trúc chùa, tháp thời Trần ở Thương cảng Vân Đồn — Quảng Ninh",
    excerpt:
      "Hình ảnh một cảng biển ngoại thương sầm uất nơi biển đảo Đông Bắc đang dần được phục dựng từ lòng đất.",
  },
]

export function SectionSeaIslands() {
  return (
    <section className="border-b border-foreground/15 bg-paper-warm/40">
      <div className="mx-auto max-w-[1440px] px-4 py-12">
        <SectionHeading
          title="Di sản & Chủ quyền biển đảo"
          subtitle="Sea · Islands · Sovereignty"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((it, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden border border-foreground/15">
                <Image
                  src={it.img || "/placeholder.svg"}
                  alt={it.title}
                  fill
                  className="object-cover sepia-strong transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-background">
                  {it.cat}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold leading-snug text-pretty group-hover:text-accent transition-colors">
                {it.title}
              </h3>
              <p className="mt-2 font-serif text-sm leading-relaxed text-foreground/70 text-pretty">
                {it.excerpt}
              </p>
              <span className="mt-3 inline-flex items-center font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/60">
                Đọc tiếp <span className="ml-2">→</span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
