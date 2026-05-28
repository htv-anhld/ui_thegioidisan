import Image from "next/image"
import { SectionHeading } from "./section-heading"

const ITEMS = [
  {
    img: "/images/heritage-4.png",
    title: "Đặc sắc bộ ba nhạc cụ truyền thống của người Chăm",
    excerpt:
      "Trống Ghinăng, trống Paranưng và kèn Saranai — biểu tượng cho cơ thể con người trong tâm thức Chăm.",
  },
  {
    img: "/images/heritage-3.png",
    title: "Chá Mùn — sợi lụa nối Mường Trời với Mường Lúm",
    excerpt:
      "Lễ hội Chá Mùn ở xã Yên Thắng (Thanh Hoá) là nghi lễ tạ ơn Pó Then, đấng tạo sinh của người Thái đen.",
  },
  {
    img: "/images/portrait-1.png",
    title: "Búi tóc ngược cài trâm — phong tục độc đáo của phụ nữ vùng cao",
    excerpt:
      "Mỗi đường tóc, mỗi chiếc trâm bạc đều chứa đựng câu chuyện về thân phận và niềm tin của người con gái.",
  },
  {
    img: "/images/heritage-1.png",
    title: "Thư tịch cổ — kho báu của đồng bào Chăm Ninh Thuận",
    excerpt:
      "Hàng nghìn trang lá buông được nối tiếp gìn giữ, truyền dạy qua nhiều thế hệ thầy cả sư.",
  },
]

export function SectionEthnic() {
  return (
    <section className="border-b border-foreground/15 bg-paper-warm/40">
      <div className="mx-auto max-w-[1440px] px-4 py-12">
        <SectionHeading title="Dân tộc thiểu số" subtitle="Ethnic Heritage" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ITEMS.map((it, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden border border-foreground/15">
                <Image
                  src={it.img || "/placeholder.svg"}
                  alt={it.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-serif text-base md:text-lg font-bold leading-snug text-background text-balance">
                    {it.title}
                  </h3>
                </div>
              </div>
              <p className="mt-3 font-serif text-sm leading-relaxed text-foreground/70 text-pretty line-clamp-3">
                {it.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
