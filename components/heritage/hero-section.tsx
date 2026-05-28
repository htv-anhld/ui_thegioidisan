import Image from "next/image"
import { BannerSlot } from "./banner-slot"

const SIDE = [
  {
    cat: "Thời sự",
    title: "Hội thảo khoa học về Thượng thư Ninh Tốn: kết nối ký ức lịch sử với hiện tại",
    time: "2 giờ trước",
  },
  {
    cat: "Bảo tồn",
    title: "Phấn đấu năm 2026 hoàn thành số hoá 100% các di sản văn hoá đã được xếp hạng",
    time: "5 giờ trước",
  },
  {
    cat: "Diễn đàn",
    title: 'Phải cụ thể hoá nội hàm "bản sắc văn hoá dân tộc trong kiến trúc" khi sửa Luật 2019',
    time: "Hôm qua",
  },
  {
    cat: "Sự kiện",
    title: "Bắc Ninh: đón nhận Bằng của UNESCO và khai mạc Festival Về miền di sản 2026",
    time: "Hôm qua",
  },
]

export function HeroSection() {
  return (
    <section className="border-b border-foreground/15">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-4 py-8">
        {/* Big lead */}
        <article className="col-span-12 lg:col-span-7 group">
          <div className="relative aspect-[16/9] overflow-hidden border border-foreground/15">
            <Image
              src="/images/hero-heritage.png"
              alt="Cố đô Huế"
              fill
              className="object-cover sepia-strong transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <span className="absolute left-4 top-4 inline-flex items-center bg-accent px-3 py-1 text-[10px] font-mono uppercase tracking-[0.25em] text-background">
              Tiêu điểm
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent/90">
                Di sản đó đây · Ký sự
              </span>
              <h2 className="mt-2 font-serif text-2xl md:text-4xl font-bold leading-tight text-background text-balance">
                Cố đô Huế: hồi sinh ký ức trên những bức tường rêu phong
              </h2>
              <p className="mt-3 hidden md:block max-w-2xl font-serif text-base leading-relaxed text-background/85 text-pretty">
                Từ Đại Nội đến lăng tẩm, các nhà bảo tồn đang dùng công nghệ số hoá để hồi sinh
                những hoa văn, mảng chạm khắc đã bị thời gian xoá mờ — mở ra một chương mới cho
                quần thể di tích từng được UNESCO công nhận.
              </p>
              <div className="mt-3 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-background/70">
                <span>Phóng sự · Lê Minh Khôi</span>
                <span className="opacity-50">|</span>
                <span>28.05.2026</span>
              </div>
            </div>
          </div>
        </article>

        {/* Side list */}
        <aside className="col-span-12 lg:col-span-5">
          <div className="flex items-center justify-between border-b-2 border-foreground pb-2">
            <h3 className="font-serif text-lg font-bold uppercase tracking-wider">Tin mới</h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60">
              cập nhật liên tục
            </span>
          </div>
          <ul className="mt-3 divide-y divide-foreground/15">
            {SIDE.map((it, i) => (
              <li key={i} className="group cursor-pointer py-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl font-light text-accent leading-none w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/90">
                      {it.cat}
                    </span>
                    <h4 className="mt-1 font-serif text-[15px] font-semibold leading-snug text-foreground group-hover:text-accent transition-colors text-pretty">
                      {it.title}
                    </h4>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50">
                      {it.time}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* Banner slot below news list */}
          <div className="mt-4">
            <BannerSlot id="hero-sidebar" width={300} height={250} className="w-full" />
          </div>
        </aside>
      </div>
    </section>
  )
}
