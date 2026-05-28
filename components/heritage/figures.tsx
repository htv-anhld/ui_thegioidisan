import Image from "next/image"

const figures = [
  {
    name: "Nguyễn Du",
    years: "1766 — 1820",
    title: "Đại thi hào dân tộc",
    bio: "Tác giả Truyện Kiều — kiệt tác văn học chữ Nôm, được dịch ra hơn 20 thứ tiếng.",
    img: "/images/portrait-1.png",
  },
  {
    name: "Bà Triệu",
    years: "226 — 248",
    title: "Nữ tướng kháng Ngô",
    bio: "Câu nói &ldquo;Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ&rdquo; vẫn vang vọng đến hôm nay.",
    img: "/images/portrait-2.png",
  },
]

export function Figures() {
  return (
    <section className="border-y border-sepia/40 bg-paper-dark/20 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between border-b-2 border-double border-sepia/50 pb-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">Mục VI</p>
            <h2 className="mt-1 font-display text-4xl font-black italic text-ink md:text-5xl">
              Nhân vật lịch sử
            </h2>
          </div>
          <p className="hidden font-hand text-2xl text-sepia md:block">— chân dung qua tư liệu —</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {figures.map((f) => (
            <article key={f.name} className="grid grid-cols-3 gap-6">
              <figure className="paper-lift relative col-span-1 -rotate-2 bg-paper p-2 shadow-md">
                <Image
                  src={f.img || "/placeholder.svg"}
                  alt={f.name}
                  width={300}
                  height={400}
                  className="sepia-photo aspect-[3/4] w-full object-cover"
                />
                <span className="tape -top-2 left-1/2 h-4 w-12 -translate-x-1/2" aria-hidden="true" />
              </figure>
              <div className="col-span-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-rust">{f.title}</p>
                <h3 className="mt-1 font-display text-3xl font-bold italic leading-tight text-ink">
                  {f.name}
                </h3>
                <p className="font-mono text-xs tracking-[0.2em] text-ink-faded">{f.years}</p>
                <div className="my-4 h-px w-12 bg-sepia/60" />
                <p
                  className="font-serif text-base leading-relaxed text-ink-faded"
                  dangerouslySetInnerHTML={{ __html: f.bio }}
                />
                <a href="#" className="mt-4 inline-block border-b border-sepia pb-0.5 font-mono text-[11px] uppercase tracking-[0.25em] text-sepia hover:text-rust">
                  Đọc tiểu sử đầy đủ →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
