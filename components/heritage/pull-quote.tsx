export function PullQuote() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20 text-center">
      <div aria-hidden="true" className="mb-6 font-display text-7xl italic leading-none text-sepia/60">
        &ldquo;
      </div>
      <blockquote className="mx-auto max-w-3xl font-display text-3xl font-bold italic leading-snug text-ink ink-bleed md:text-4xl">
        Lịch sử không phải là những trang giấy đã khép. Lịch sử là dòng mực vẫn đang chảy —
        chậm rãi, kiên nhẫn, từ thế hệ này sang thế hệ khác.
      </blockquote>
      <div className="mt-8 flex items-center justify-center gap-4">
        <span className="h-px w-16 bg-sepia" />
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faded">
          Lời mở đầu — Kỷ yếu Bảo tàng Lịch sử Quốc gia, 1958
        </p>
        <span className="h-px w-16 bg-sepia" />
      </div>
    </section>
  )
}
