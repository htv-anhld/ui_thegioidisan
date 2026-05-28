export function TopBar() {
  return (
    <div className="border-b border-foreground/20 bg-foreground text-background">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em]">
        <div className="flex items-center gap-4">
          <span>Thứ Năm, 28 tháng 5, 2026</span>
          <span className="hidden sm:inline opacity-70">|</span>
          <span className="hidden sm:inline opacity-70">Hà Nội · 28°C</span>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-accent transition-colors" href="#">Đăng nhập</a>
          <span className="opacity-40">·</span>
          <a className="hover:text-accent transition-colors" href="#">English</a>
          <span className="opacity-40">·</span>
          <a className="hover:text-accent transition-colors" href="#">RSS</a>
        </div>
      </div>
    </div>
  )
}
