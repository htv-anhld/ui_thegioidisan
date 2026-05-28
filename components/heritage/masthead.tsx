import { Search } from "lucide-react"

export function Masthead() {
  return (
    <header className="border-b-2 border-foreground/80 bg-background">
      <div className="mx-auto grid max-w-[1280px] grid-cols-12 items-center gap-4 px-4 py-6">
        <div className="col-span-3 hidden md:flex flex-col gap-1 text-[11px] font-mono uppercase tracking-[0.2em] text-foreground/70">
          <span>Số 287 · Năm thứ XXIV</span>
          <span>Tạp chí điện tử</span>
          <span className="text-accent">Cơ quan của Hội Di sản</span>
        </div>

        <div className="col-span-12 md:col-span-6 flex flex-col items-center text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-foreground/60">
            — Văn hoá · Lịch sử · Kiến trúc —
          </span>
          <h1 className="mt-2 font-serif text-5xl md:text-6xl font-black leading-none tracking-tight text-foreground">
            Thế Giới <span className="italic font-light text-accent">Di Sản</span>
          </h1>
          <span className="mt-2 text-[11px] font-mono uppercase tracking-[0.35em] text-foreground/60">
            Heritage Magazine · Established 2002
          </span>
        </div>

        <div className="col-span-3 hidden md:flex justify-end">
          <form className="flex items-center gap-2 border-b border-foreground/40 pb-1">
            <Search className="size-4 text-foreground/60" />
            <input
              type="text"
              placeholder="Tìm bài viết..."
              className="bg-transparent text-sm placeholder:text-foreground/40 focus:outline-none w-40"
            />
          </form>
        </div>
      </div>
    </header>
  )
}
