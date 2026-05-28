import Image from "next/image"

const SUBTABS = ["Tất cả", "Vật thể", "Phi vật thể", "Lễ hội", "Tâm linh"]

const FEATURED = {
  img: "https://picsum.photos/500/350?random=90",
  cat: "Phi vật thể",
  title: "Ra mắt Câu lạc bộ Di sản áo dài Việt Nam tại Lào",
  excerpt: "Tối 9/3/2026 tại thủ đô Vientiane, Câu lạc bộ trực thuộc Quỹ Hỗ trợ bảo tồn di sản chính thức ra mắt.",
  time: "2 giờ trước",
}

const ITEMS = [
  { img: "https://picsum.photos/280/200?random=91", cat: "Vật thể", title: "Ngựa làm quen và trở thành bản sắc Việt qua các triều đại" },
  { img: "https://picsum.photos/280/200?random=92", cat: "Hội hoạ", title: "Cuộc thi vẽ tranh Di sản văn hoá Việt Nam lần thứ II" },
  { img: "https://picsum.photos/280/200?random=93", cat: "Phi vật thể", title: "Hội Di sản Văn hoá Việt Nam khép lại một năm sôi động" },
  { img: "https://picsum.photos/280/200?random=94", cat: "Du lịch", title: "Bước ngoặt cáp treo Fansipan và vị thế của Sa Pa" },
]

export function SectionPreservation() {
  return (
    <section className="bg-muted/30 py-8 border-b border-border">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Section header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-purple-600 rounded"></div>
            <h2 className="text-xl font-bold uppercase">Bảo tồn & Phát triển</h2>
          </div>
        </div>

        {/* Subtabs */}
        <div className="flex items-center gap-1 mb-6 border-b border-border pb-3">
          {SUBTABS.map((s, i) => (
            <button
              key={s}
              className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                i === 0
                  ? "bg-accent text-white"
                  : "text-muted-foreground hover:text-foreground hover:bg-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Featured */}
          <article className="col-span-12 lg:col-span-6 group">
            <a href="#" className="block">
              <div className="img-zoom rounded overflow-hidden mb-3">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={FEATURED.img}
                    alt={FEATURED.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="text-accent text-xs font-semibold">{FEATURED.cat}</span>
              <h3 className="text-xl font-bold leading-snug mt-1 group-hover:text-accent transition-colors">
                {FEATURED.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-2">{FEATURED.excerpt}</p>
              <span className="text-muted-foreground text-xs mt-2 block">{FEATURED.time}</span>
            </a>
          </article>

          {/* Grid of 4 */}
          <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">
            {ITEMS.map((it, i) => (
              <article key={i} className="group">
                <a href="#" className="block">
                  <div className="img-zoom rounded overflow-hidden mb-2">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={it.img}
                        alt={it.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-accent text-xs font-semibold">{it.cat}</span>
                  <h4 className="text-sm font-semibold leading-snug mt-1 group-hover:text-accent transition-colors line-clamp-2">
                    {it.title}
                  </h4>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
