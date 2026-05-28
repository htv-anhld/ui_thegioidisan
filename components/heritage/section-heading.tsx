interface Props {
  title: string
  subtitle?: string
  href?: string
}

export function SectionHeading({ title, subtitle, href = "#" }: Props) {
  return (
    <div className="mb-6 flex items-end justify-between border-b-2 border-foreground pb-2">
      <div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-tight leading-none">
          <span className="border-l-4 border-accent pl-3">{title}</span>
        </h2>
        {subtitle && (
          <p className="mt-1 pl-4 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/55">
            {subtitle}
          </p>
        )}
      </div>
      <a
        href={href}
        className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 hover:text-accent transition-colors"
      >
        Xem tất cả →
      </a>
    </div>
  )
}
