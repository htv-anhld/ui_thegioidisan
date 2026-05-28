import Image from "next/image"

const items = [
  {
    title: "Quan họ Bắc Ninh",
    place: "Đồng bằng sông Hồng",
    note: "Di sản phi vật thể UNESCO 2009",
    img: "/images/heritage-3.png",
  },
  {
    title: "Hát xẩm Hà thành",
    place: "Phố cổ Hà Nội",
    note: "Hồi sinh từ những thập niên 2000",
    img: "/images/heritage-2.png",
  },
  {
    title: "Nhã nhạc cung đình",
    place: "Cố đô Huế",
    note: "Di sản UNESCO 2003",
    img: "/images/hero-heritage.png",
  },
  {
    title: "Thư pháp Hán Nôm",
    place: "Văn Miếu — Quốc Tử Giám",
    note: "Truyền thống ngàn năm",
    img: "/images/heritage-4.png",
  },
]

export function HeritageGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between border-b-2 border-double border-sepia/50 pb-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">Mục III</p>
          <h2 className="mt-1 font-display text-4xl font-black italic text-ink md:text-5xl">
            Di sản văn hoá
          </h2>
        </div>
        <p className="hidden font-serif italic text-ink-faded md:block">
            tuyển chọn từ kho lưu trữ quốc gia
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <figure
            key={it.title}
            className="paper-lift relative bg-paper p-3 shadow-[0_2px_8px_oklch(0.3_0.05_40/0.15)]"
            style={{ transform: `rotate(${i % 2 === 0 ? "-1deg" : "1deg"})` }}
          >
            <div className="relative overflow-hidden">
              <Image
                src={it.img || "/placeholder.svg"}
                alt={it.title}
                width={400}
                height={500}
                className="sepia-photo aspect-[4/5] w-full object-cover"
              />
              <span className="tape -top-2 left-1/2 h-5 w-16 -translate-x-1/2" aria-hidden="true" />
            </div>
            <figcaption className="mt-4 px-1">
              <h3 className="font-display text-xl font-bold italic text-ink">{it.title}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faded">
                {it.place}
              </p>
              <p className="mt-2 font-hand text-lg text-rust">{it.note}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
