import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-10 md:grid-cols-12">
        {/* Left: lead story */}
        <article className="md:col-span-7">
          <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-rust">
            <span className="h-px w-8 bg-rust" />
            <span>Chuyên đề — Kỳ này</span>
          </div>

          <h2 className="font-display text-5xl font-black leading-[0.95] tracking-tight text-ink ink-bleed sm:text-6xl md:text-7xl">
            Cố đô Huế <br />
            <em className="text-sepia">trong sương sớm</em> —
            <span className="font-serif italic"> ký ức một triều đại</span>
          </h2>

          <p className="mt-6 max-w-xl font-mono text-sm uppercase tracking-[0.18em] text-ink-faded">
            Phóng sự · 4.200 chữ · Đọc trong 18 phút
          </p>

          <div className="relative mt-8 overflow-hidden border border-sepia/40 paper-burn">
            <Image
              src="/images/hero-heritage.png"
              alt="Cố đô Huế trong sương sớm"
              width={1200}
              height={750}
              className="sepia-photo h-auto w-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-paper-dark/40 via-transparent to-transparent" />
            <span className="tape -top-3 left-10 -rotate-6" aria-hidden="true" />
            <span className="tape -top-3 right-12 rotate-3" aria-hidden="true" />
          </div>

          <p className="mt-2 font-serif text-sm italic text-ink-faded">
            Ảnh tư liệu — Trường Viễn Đông Bác Cổ, lưu trữ năm Bính Tuất.
          </p>

          <p className="drop-cap mt-8 max-w-2xl font-serif text-lg leading-relaxed text-ink">
            Trong làn sương trắng phủ trên dòng Hương Giang, những bức tường thành rêu phong của
            Kinh thành Huế hiện ra như một trang sách cũ chưa khép lại. Mỗi viên gạch, mỗi mái ngói
            âm dương đều mang theo dấu vết của một thời vàng son đã đi qua hơn một thế kỷ — và vẫn
            còn lặng lẽ kể chuyện cho những ai chịu lắng nghe.
          </p>

          <a href="#" className="mt-6 inline-flex items-center gap-2 border-b-2 border-sepia pb-1 font-mono text-xs uppercase tracking-[0.25em] text-sepia transition hover:gap-4 hover:text-rust">
            Đọc toàn bộ phóng sự
            <ArrowRight className="h-4 w-4" />
          </a>
        </article>

        {/* Right: sidebar with notes & meta */}
        <aside className="space-y-8 md:col-span-5">
          <div className="relative border border-sepia/40 bg-paper-dark/30 p-6 paper-burn">
            <div className="stamp absolute -right-4 -top-3 text-[10px]">Tài liệu mật</div>
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faded">
              Trích đoạn
            </h3>
            <blockquote className="mt-4 font-display text-2xl italic leading-snug text-ink">
              &ldquo;Khi sương tan, ta mới thấy rõ lịch sử không bao giờ ngủ yên — nó chỉ chờ
              được gọi tên.&rdquo;
            </blockquote>
            <p className="mt-4 font-hand text-xl text-rust">
              — ghi chép của Phan Bội Châu, 1925
            </p>
          </div>

          <div className="relative">
            <h3 className="mb-4 border-b-2 border-double border-sepia/50 pb-2 font-display text-2xl font-bold italic text-ink">
              Kỳ này có gì
            </h3>
            <ol className="space-y-4 font-serif text-base">
              {[
                { n: "I.", t: "Cố đô Huế trong sương sớm", p: "Phóng sự · trang 1" },
                { n: "II.", t: "Ngọc phả họ Nguyễn — bản sao tìm thấy", p: "Hồ sơ · trang 7" },
                { n: "III.", t: "Đêm hát ả đào trên phố Khâm Thiên", p: "Ký sự · trang 12" },
                { n: "IV.", t: "Bản đồ Đông Dương 1887 — chú giải mới", p: "Bộ sưu tập · trang 18" },
              ].map((it) => (
                <li key={it.n} className="group flex gap-4 border-b border-dashed border-sepia/30 pb-3">
                  <span className="font-display text-xl italic text-rust">{it.n}</span>
                  <div className="flex-1">
                    <p className="text-ink transition group-hover:text-rust">{it.t}</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faded">{it.p}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative -rotate-1 border border-sepia/50 bg-[oklch(0.9_0.04_75)] p-5 shadow-md">
            <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2" aria-hidden="true" />
            <p className="font-hand text-2xl leading-snug text-ink">
              &ldquo;Lưu ý của ban biên tập: số tới sẽ phát hành chuyên đề về văn hoá đồng bằng
              sông Hồng — xin quý độc giả chờ đón.&rdquo;
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faded">— Toà soạn</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
