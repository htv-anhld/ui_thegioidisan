const events = [
  { year: "938", title: "Chiến thắng Bạch Đằng", note: "Ngô Quyền đánh tan quân Nam Hán, mở ra kỷ nguyên độc lập." },
  { year: "1010", title: "Dời đô về Thăng Long", note: "Vua Lý Thái Tổ ban Chiếu dời đô — khởi đầu kinh kỳ ngàn năm." },
  { year: "1288", title: "Bạch Đằng lần ba", note: "Trần Hưng Đạo cắm cọc, đại phá quân Nguyên Mông." },
  { year: "1428", title: "Bình Ngô đại cáo", note: "Nguyễn Trãi soạn thiên cổ hùng văn, tuyên ngôn độc lập lần hai." },
  { year: "1802", title: "Triều Nguyễn lập quốc", note: "Vua Gia Long thống nhất sơn hà, định đô tại Phú Xuân — Huế." },
  { year: "1945", title: "Tuyên ngôn Độc lập", note: "Quảng trường Ba Đình — bản tuyên ngôn khai sinh nước Việt Nam mới." },
]

export function Timeline() {
  return (
    <section className="border-y border-sepia/40 bg-paper-dark/20 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">Mục IV</p>
          <h2 className="mt-2 font-display text-4xl font-black italic text-ink md:text-5xl">
            Dòng thời gian sự kiện
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-serif italic text-ink-faded">
            Sáu cột mốc làm nên dáng đứng của một dân tộc — ghi lại theo trình tự niên đại,
            đối chiếu từ chính sử và hồ sơ lưu trữ.
          </p>
        </div>

        <ol className="relative">
          {/* center line */}
          <span aria-hidden="true" className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-sepia/40 md:block" style={{ backgroundImage: "linear-gradient(to bottom, var(--sepia) 0 6px, transparent 6px 12px)", backgroundSize: "1px 12px" }} />

          {events.map((e, i) => {
            const left = i % 2 === 0
            return (
              <li key={e.year} className="mb-10 md:grid md:grid-cols-2 md:gap-12">
                <div className={`relative ${left ? "md:text-right" : "md:col-start-2"}`}>
                  <div className="inline-block max-w-md border border-sepia/40 bg-paper p-5 paper-burn">
                    <p className="font-display text-4xl font-black italic text-rust">{e.year}</p>
                    <h3 className="mt-2 font-display text-xl font-bold text-ink">{e.title}</h3>
                    <p className="mt-2 font-serif text-base leading-relaxed text-ink-faded">{e.note}</p>
                  </div>
                </div>
                <span aria-hidden="true" className="absolute left-1/2 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-sepia bg-paper md:block" />
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
