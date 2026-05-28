import { Feather, Search, Menu } from "lucide-react"

export function SiteHeader() {
  const today = new Date().toLocaleDateString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <header className="border-b-2 border-double border-sepia/40">
      {/* Top strap */}
      <div className="border-b border-sepia/30 bg-paper-dark/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faded">
          <span className="hidden sm:inline">Số phát hành — Quyển XII · Kỳ 47</span>
          <span className="capitalize">{today}</span>
          <span className="hidden sm:inline">Giá: 5 hào · Lưu hành toàn quốc</span>
        </div>
      </div>

      {/* Masthead */}
      <div className="mx-auto max-w-7xl px-6 py-10 text-center">
        <div className="mb-3 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-ink-faded">
          <span className="h-px w-12 bg-sepia/50" />
          <span>Báo Di Sản — Tài liệu lịch sử</span>
          <span className="h-px w-12 bg-sepia/50" />
        </div>

        <h1 className="font-display text-6xl font-black italic tracking-tight text-ink ink-bleed sm:text-7xl md:text-8xl">
          Di Sản
          <span className="ml-2 inline-block align-middle">
            <Feather className="inline h-8 w-8 -rotate-12 text-sepia" />
          </span>
        </h1>

        <p className="mx-auto mt-3 max-w-2xl font-serif text-base italic text-ink-faded">
          Hồ sơ lưu trữ về văn hoá, lịch sử và di sản Việt Nam — nơi mỗi trang giấy là một
          chứng tích, mỗi câu chuyện là một mảnh ký ức.
        </p>
      </div>

      {/* Nav */}
      <nav className="border-y border-sepia/40 bg-paper-dark/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <button className="text-ink hover:text-rust md:hidden" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
          <ul className="hidden items-center gap-7 font-mono text-[12px] uppercase tracking-[0.2em] text-ink md:flex">
            <li><a href="#" className="border-b border-transparent transition hover:border-rust hover:text-rust">Tin nổi bật</a></li>
            <li><a href="#" className="border-b border-transparent transition hover:border-rust hover:text-rust">Di sản</a></li>
            <li><a href="#" className="border-b border-transparent transition hover:border-rust hover:text-rust">Lịch sử</a></li>
            <li><a href="#" className="border-b border-transparent transition hover:border-rust hover:text-rust">Hồ sơ</a></li>
            <li><a href="#" className="border-b border-transparent transition hover:border-rust hover:text-rust">Nhân vật</a></li>
            <li><a href="#" className="border-b border-transparent transition hover:border-rust hover:text-rust">Bộ sưu tập</a></li>
          </ul>
          <button className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:text-rust" aria-label="Tìm kiếm">
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Tra cứu lưu trữ</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
