import Image from "next/image"
import { FileText, MapPin, Calendar, User } from "lucide-react"

export function ArchiveDossier() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between border-b-2 border-double border-sepia/50 pb-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">Mục V</p>
          <h2 className="mt-1 font-display text-4xl font-black italic text-ink md:text-5xl">
            Hồ sơ lưu trữ
          </h2>
        </div>
        <span className="stamp hidden text-xs md:inline-block">Đã xác thực</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-12">
        {/* Dossier folder */}
        <div className="lg:col-span-7">
          <div className="relative border-2 border-sepia/50 bg-paper p-8 paper-burn">
            <div className="mb-6 flex items-center justify-between border-b-2 border-double border-sepia/40 pb-4">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faded">
                <FileText className="h-4 w-4" />
                <span>Hồ sơ số · 1923/HN-PC/047</span>
              </div>
              <span className="stamp text-[10px]">Mật</span>
            </div>

            <h3 className="font-display text-3xl font-bold italic leading-tight text-ink">
              Bút tích chưa công bố — thư viện gia đình họ Phạm
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 border-l-2 border-sepia/50 pl-3">
                <Calendar className="mt-0.5 h-4 w-4 text-rust" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faded">Niên đại</p>
                  <p className="font-serif text-base text-ink">1923 — Quý Hợi</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-l-2 border-sepia/50 pl-3">
                <MapPin className="mt-0.5 h-4 w-4 text-rust" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faded">Xuất xứ</p>
                  <p className="font-serif text-base text-ink">Hà Nội — phố Hàng Bột</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-l-2 border-sepia/50 pl-3">
                <User className="mt-0.5 h-4 w-4 text-rust" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faded">Tác giả</p>
                  <p className="font-serif text-base text-ink">Phạm Quỳnh (1892 — 1945)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-l-2 border-sepia/50 pl-3">
                <FileText className="mt-0.5 h-4 w-4 text-rust" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faded">Loại tài liệu</p>
                  <p className="font-serif text-base text-ink">Thư tay · 12 trang giấy gió</p>
                </div>
              </div>
            </div>

            <p className="mt-6 font-serif text-base leading-relaxed text-ink">
              Bộ sưu tập gồm mười hai bức thư trao đổi giữa nhà báo Phạm Quỳnh và một người
              bạn ở Sài Gòn, bàn về vai trò của chữ Quốc ngữ trong việc gìn giữ bản sắc dân tộc.
              Bút tích được con cháu lưu giữ trong rương gỗ lim suốt một thế kỷ — nay được số
              hoá và công bố lần đầu trên Báo Di Sản.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#" className="border-b-2 border-sepia pb-1 font-mono text-xs uppercase tracking-[0.25em] text-sepia hover:text-rust">
                Xem toàn bộ hồ sơ →
              </a>
              <span className="font-hand text-xl text-rust">— hoặc tải bản scan PDF</span>
            </div>

            <span className="tape -top-3 left-12 -rotate-3" aria-hidden="true" />
            <span className="tape -bottom-3 right-12 rotate-2" aria-hidden="true" />
          </div>
        </div>

        {/* Photo evidence */}
        <div className="space-y-6 lg:col-span-5">
          <figure className="paper-lift relative -rotate-2 bg-paper p-3 shadow-lg">
            <Image
              src="/images/heritage-4.png"
              alt="Bút tích thư pháp"
              width={500}
              height={600}
              className="sepia-photo aspect-[4/5] w-full object-cover"
            />
            <span className="tape -top-2 left-6 rotate-6" aria-hidden="true" />
            <figcaption className="mt-3 px-1 font-hand text-lg text-ink">
              Trang đầu của bức thư đề ngày 14 tháng 3, năm Quý Hợi.
            </figcaption>
          </figure>

          <div className="relative rotate-1 border border-sepia/40 bg-[oklch(0.9_0.04_75)] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faded">
              Ghi chú lưu trữ
            </p>
            <p className="mt-2 font-hand text-2xl leading-snug text-ink">
              &ldquo;Tài liệu thuộc bộ sưu tập số 47, kho B, tầng hầm Bảo tàng Lịch sử.
              Yêu cầu xem trực tiếp cần đặt lịch trước 14 ngày.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
