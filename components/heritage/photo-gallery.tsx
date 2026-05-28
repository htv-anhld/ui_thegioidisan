import Image from "next/image"

const photos = [
  { src: "/images/heritage-2.png", caption: "Hà Nội · phố Hàng Đào, 1923", rotate: "-2deg" },
  { src: "/images/heritage-5.png", caption: "Vịnh Hạ Long · thuyền buồm, 1942", rotate: "1.5deg" },
  { src: "/images/heritage-3.png", caption: "Làng quê Bắc Bộ · đêm rằm tháng Tám", rotate: "-1deg" },
  { src: "/images/heritage-4.png", caption: "Cụ đồ viết câu đối · Tết Nguyên Đán", rotate: "2deg" },
  { src: "/images/heritage-1.png", caption: "Thiếu nữ Hà thành · áo dài Le Mur", rotate: "-1.5deg" },
  { src: "/images/hero-heritage.png", caption: "Cửa Ngọ Môn · Kinh thành Huế", rotate: "1deg" },
]

export function PhotoGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between border-b-2 border-double border-sepia/50 pb-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">Mục VII</p>
          <h2 className="mt-1 font-display text-4xl font-black italic text-ink md:text-5xl">
            Bộ sưu tập ảnh cổ
          </h2>
        </div>
        <p className="hidden font-serif italic text-ink-faded md:block">
          tuyển từ kho ảnh tư liệu — 1900 đến 1954
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
        {photos.map((p, i) => (
          <figure
            key={p.caption}
            className="paper-lift relative bg-paper p-3 shadow-[0_4px_12px_oklch(0.3_0.06_45/0.2)]"
            style={{ transform: `rotate(${p.rotate})` }}
          >
            <div className="relative overflow-hidden">
              <Image
                src={p.src || "/placeholder.svg"}
                alt={p.caption}
                width={500}
                height={500}
                className="sepia-photo aspect-square w-full object-cover"
              />
              {i % 3 === 0 && <span className="tape -top-3 left-6 -rotate-6" aria-hidden="true" />}
              {i % 3 === 1 && <span className="tape -top-3 right-6 rotate-3" aria-hidden="true" />}
              {i % 3 === 2 && <span className="tape -top-3 left-1/2 -translate-x-1/2" aria-hidden="true" />}
            </div>
            <figcaption className="mt-3 flex items-center justify-between px-1">
              <p className="font-hand text-lg text-ink">{p.caption}</p>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faded">
                №{(i + 1).toString().padStart(3, "0")}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
