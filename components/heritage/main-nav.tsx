const NAV = [
  { label: "Trang chủ", href: "#", active: true },
  { label: "Theo dòng thời sự", href: "#" },
  { label: "Di sản đó đây", href: "#" },
  { label: "Bảo tồn & Phát triển", href: "#" },
  { label: "Dân tộc thiểu số", href: "#" },
  { label: "Biển đảo", href: "#" },
  { label: "Diễn đàn", href: "#" },
  { label: "Ẩm thực", href: "#" },
  { label: "Làng nghề", href: "#" },
  { label: "Nhân vật", href: "#" },
]

export function MainNav() {
  return (
    <nav className="sticky top-0 z-30 border-y border-foreground/20 bg-foreground text-background shadow-sm">
      <div className="mx-auto flex max-w-[1280px] items-center overflow-x-auto px-2">
        {NAV.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`relative whitespace-nowrap px-4 py-3 text-[12px] font-sans uppercase tracking-[0.14em] transition-colors hover:text-accent ${
              item.active ? "text-accent" : "text-background/90"
            }`}
          >
            {item.label}
            {item.active && (
              <span className="absolute inset-x-3 bottom-0 h-[2px] bg-accent" aria-hidden="true" />
            )}
          </a>
        ))}
      </div>
    </nav>
  )
}
