import { Search } from "lucide-react"

const NAV = [
  { label: "Trang chủ", href: "#", active: true },
  { label: "Kinh doanh", href: "#" },
  { label: "Đời sống", href: "#" },
  { label: "Thể thao", href: "#" },
  { label: "Giải trí", href: "#" },
  { label: "Công nghệ", href: "#" },
  { label: "Du lịch", href: "#" },
  { label: "Thế giới", href: "#" },
  { label: "Giáo dục", href: "#" },
  { label: "Xe", href: "#" },
]

export function MainNav() {
  return (
    <nav className="sticky top-0 z-30 border-y border-foreground/20 bg-foreground text-background shadow-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4">
        <div className="flex items-center">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative whitespace-nowrap px-3 py-3 text-[11px] font-sans uppercase tracking-[0.1em] transition-colors hover:text-accent ${
                item.active ? "text-accent" : "text-background/90"
              }`}
            >
              {item.label}
              {item.active && (
                <span className="absolute inset-x-2 bottom-0 h-[2px] bg-accent" aria-hidden="true" />
              )}
            </a>
          ))}
        </div>
        <button className="p-2 hover:text-accent transition-colors" aria-label="Tìm kiếm">
          <Search className="size-4" />
        </button>
      </div>
    </nav>
  )
}
