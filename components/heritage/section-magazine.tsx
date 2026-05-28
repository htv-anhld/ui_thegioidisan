import Image from "next/image"

const MAGAZINE_ITEMS = [
  {
    img: "/images/hero-heritage.png",
    title: "Vì sao độ trò quần hung tàn bạc trước Hongkong?",
    subtitle: "Kỳ 1",
  },
  {
    img: "/images/heritage-2.png",
    title: "Cô dân với Ngọc Trinh",
    subtitle: "Phỏng vấn",
  },
  {
    img: "/images/heritage-3.png",
    title: "Cảnh Mơ văn vào khu bảng Trung Quốc",
    subtitle: "Phóng sự",
  },
  {
    img: "/images/heritage-4.png",
    title: "Lễ trời quan vào chùa Đồm Trịnh, Thanh Thủy",
    subtitle: "Ký sự",
  },
  {
    img: "/images/heritage-5.png",
    title: "Bài học từ nguyên nhiên Địa lý",
    subtitle: "Góc nhìn",
  },
]

export function SectionMagazine() {
  return (
    <section className="border-b border-foreground/10 bg-paper-warm/30">
      <div className="mx-auto max-w-[1200px] px-4 py-6">
        <div className="mb-5">
          <span className="font-serif text-base font-bold text-accent">TẠP CHÍ</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {MAGAZINE_ITEMS.map((item, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden border border-foreground/10">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-accent">
                    {item.subtitle}
                  </span>
                  <h3 className="mt-1 font-serif text-[12px] font-medium leading-snug text-background line-clamp-2">
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
