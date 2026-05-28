import Image from "next/image"
import { SectionHeading } from "./section-heading"

const SUBTABS = ["Vật thể", "Phi vật thể", "Lễ hội", "Tâm linh"]

const FEATURED = {
  img: "/images/heritage-1.png",
  cat: "Phi vật thể",
  title: "Ra mắt Câu lạc bộ Di sản áo dài Việt Nam tại Lào",
  excerpt:
    "Tối 9/3/2026 tại thủ đô Vientiane, Câu lạc bộ trực thuộc Quỹ Hỗ trợ bảo tồn di sản chính thức ra mắt cộng đồng kiều bào.",
}

const ITEMS = [
  {
    img: "/images/heritage-2.png",
    cat: "Vật thể",
    title: "Ngựa làm quen và trở thành bản sắc Việt qua các triều đại",
  },
  {
    img: "/images/heritage-4.png",
    cat: "Hội hoạ",
    title: "Cuộc thi vẽ tranh Di sản văn hoá Việt Nam qua hội hoạ lần thứ II",
  },
  {
    img: "/images/heritage-5.png",
    cat: "Phi vật thể",
    title: "Hội Di sản Văn hoá Việt Nam khép lại một năm sôi động",
  },
  {
    img: "/images/heritage-3.png",
    cat: "Du lịch",
    title: "Bước ngoặt cáp treo Fansipan và vị thế của Sa Pa trên bản đồ châu Á",
  },
]

export function SectionPreservation() {
  return (
    <section className="border-b border-foreground/15">
      <div className="mx-auto max-w-[1440px] px-4 py-12">
        <SectionHeading title="Bảo tồn & Phát triển" subtitle="Preservation & Development" />

        <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2 border-b border-dashed border-foreground/30 pb-3">
          {SUBTABS.map((s, i) => (
            <a
              key={s}
              href="#"
              className={`font-mono text-[11px] uppercase tracking-[0.22em] transition-colors ${
                i === 0
                  ? "text-accent border-b-2 border-accent pb-1"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Di sản văn hoá {s}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          <article className="col-span-12 lg:col-span-6 group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden border border-foreground/15">
              <Image
                src={FEATURED.img || "/placeholder.svg"}
                alt={FEATURED.title}
                fill
                className="object-cover sepia-strong transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                {FEATURED.cat}
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-balance group-hover:text-accent transition-colors">
                {FEATURED.title}
              </h3>
              <p className="mt-2 font-serif text-base leading-relaxed text-foreground/75 text-pretty">
                {FEATURED.excerpt}
              </p>
            </div>
          </article>

          <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">
            {ITEMS.map((it, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden border border-foreground/15">
                  <Image
                    src={it.img || "/placeholder.svg"}
                    alt={it.title}
                    fill
                    className="object-cover sepia-strong transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  {it.cat}
                </span>
                <h4 className="mt-1 font-serif text-base font-semibold leading-snug text-pretty group-hover:text-accent transition-colors">
                  {it.title}
                </h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
