import Image from "next/image"

const MAGAZINE_ITEMS = [
  {
    img: "/images/hero-heritage.png",
    title: "Vi sao do tro quan hung tan bac truoc Hongkong?",
    subtitle: "Ky 1",
  },
  {
    img: "/images/heritage-2.png",
    title: "Co dan voi Ngoc Trinh",
    subtitle: "Phong van",
  },
  {
    img: "/images/heritage-3.png",
    title: "Canh Mo van vao khu bang Trung Quoc",
    subtitle: "Phong su",
  },
  {
    img: "/images/heritage-4.png",
    title: "Le troi quan vao chua Dom Trinh, Thanh Thuy",
    subtitle: "Ky su",
  },
  {
    img: "/images/heritage-5.png",
    title: "Bai hoc tu nguyen nhien Dia ly",
    subtitle: "Goc nhin",
  },
]

export function SectionMagazine() {
  return (
    <section className="border-b border-foreground/15 bg-paper-warm/30">
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="font-serif text-lg font-bold text-accent">MAGAZINE</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {MAGAZINE_ITEMS.map((item, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden border border-foreground/15">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent">
                    {item.subtitle}
                  </span>
                  <h3 className="mt-1 font-serif text-sm font-semibold leading-snug text-background line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
