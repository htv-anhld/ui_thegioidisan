import Image from "next/image"

const stories = [
  {
    cat: "Di sản",
    title: "Áo dài Indochine — một thế kỷ duyên dáng",
    excerpt:
      "Từ tà áo ngũ thân thời Nguyễn đến phom dáng Le Mur thập niên 1930, áo dài là biên niên sử vải vóc của người Việt.",
    img: "/images/heritage-1.png",
    meta: "Bài: Lê Thị Hoài An · 12 phút đọc",
  },
  {
    cat: "Lịch sử",
    title: "Hà Nội 36 phố phường qua ống kính người Pháp",
    excerpt:
      "Bộ ảnh quý hiếm chụp năm 1923 cho thấy nhịp sống náo nhiệt của khu phố cổ — nơi xe kéo, gánh hàng rong và tiếng rao đan vào nhau.",
    img: "/images/heritage-2.png",
    meta: "Bài: Trần Quang Vinh · 9 phút đọc",
  },
  {
    cat: "Văn hoá",
    title: "Múa rối nước — sân khấu của làng",
    excerpt:
      "Ao làng đêm rằm, ngọn đèn dầu lay lắt và những con rối gỗ kể chuyện đồng quê — một di sản phi vật thể đang được hồi sinh.",
    img: "/images/heritage-3.png",
    meta: "Bài: Nguyễn Bích Ngọc · 7 phút đọc",
  },
]

export function FeaturedNews() {
  return (
    <section className="border-y border-sepia/40 bg-paper-dark/20 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between border-b-2 border-double border-sepia/50 pb-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">Mục II</p>
            <h2 className="mt-1 font-display text-4xl font-black italic text-ink md:text-5xl">
              Tin di sản nổi bật
            </h2>
          </div>
          <p className="hidden font-hand text-2xl text-sepia md:block">— ba câu chuyện kỳ này —</p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {stories.map((s, i) => (
            <article key={s.title} className="paper-lift relative">
              <div className="relative overflow-hidden border border-sepia/40 paper-burn">
                <Image
                  src={s.img || "/placeholder.svg"}
                  alt={s.title}
                  width={600}
                  height={400}
                  className="sepia-photo h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paper-dark/30 to-transparent" />
                {i === 0 && <span className="tape -top-3 left-6 -rotate-6" aria-hidden="true" />}
                {i === 1 && <span className="tape -top-3 right-6 rotate-3" aria-hidden="true" />}
                {i === 2 && <span className="tape -top-3 left-1/2 -translate-x-1/2" aria-hidden="true" />}
              </div>

              <div className="mt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">{s.cat}</p>
                <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-ink transition hover:text-sepia">
                  {s.title}
                </h3>
                <p className="mt-3 font-serif text-base leading-relaxed text-ink-faded">{s.excerpt}</p>
                <p className="mt-4 border-t border-dashed border-sepia/40 pt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faded">
                  {s.meta}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
