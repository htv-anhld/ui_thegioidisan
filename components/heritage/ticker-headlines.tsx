const ITEMS = [
  "Từ Nghị quyết 80-NQ/TW: hướng tới một nền kinh tế di sản bền vững",
  "Tạp chí Thế giới Di sản làm việc với Bảo tàng Hồ Chí Minh",
  "UNESCO gửi tọa độ cho Chính phủ nhằm tránh tấn công nhầm vào di tích",
  "Quỹ Hỗ trợ bảo tồn di sản văn hóa Việt Nam tổng kết hoạt động 2025",
  "Hội Di sản Văn hóa Việt Nam thăm Tổ hợp Công ty Gốm Đất Việt",
]

export function TickerHeadlines() {
  return (
    <div className="border-y border-foreground/15 bg-paper-warm/50">
      <div className="mx-auto flex max-w-[1200px] items-stretch gap-0 px-0">
        <span className="flex shrink-0 items-center bg-accent px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-background">
          Đang nóng
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="ticker-track flex items-center gap-8 whitespace-nowrap py-2 pl-5 font-serif text-[13px]">
            {[...ITEMS, ...ITEMS].map((t, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-foreground/85 hover:text-accent cursor-pointer transition-colors">
                  {t}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
