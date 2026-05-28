import Image from "next/image"
import { SectionHeading } from "./section-heading"
import { BannerSlot } from "./banner-slot"

const FORUM = [
  {
    img: "/images/heritage-5.png",
    title: "Dấu ấn trầm mặc của những đền tháp cuối cùng vùng Panduranga",
    author: "GS. Trần Đình Sơn",
    excerpt:
      "Vùng đất khô cằn nắng gió phía Nam Khánh Hoà từng là tiểu vương quốc Panduranga của Champa, nơi để lại cụm tháp cổ ít người biết đến.",
  },
  {
    img: "/images/heritage-2.png",
    title: "Văn bia Vạn Tường — phải chăng có tư liệu mới về Lê Thánh Tông?",
    author: "TS. Nguyễn Hoàng Tuấn",
    excerpt:
      "Bia đá khắc “Lê Thánh Tông Thuần Hoàng đế bi” được Hội đồng họ Lê tỉnh Quảng Ngãi tiếp nhận năm 2021 vẫn còn nhiều tranh luận.",
  },
  {
    img: "/images/heritage-1.png",
    title: "Nam Phương Hoàng hậu với di sản kiến trúc cổ ở ngõ 186 Ngọc Hà",
    author: "Lê Mai Hương",
    excerpt:
      "Câu chuyện về dinh thự bị lãng quên hơn nửa thế kỷ, gắn với cuộc đời người phụ nữ tài hoa cuối triều Nguyễn.",
  },
]

const TOP_READ = [
  "Đôi nét về 54 dân tộc Việt Nam",
  "Nguyễn Ái Quốc ở Pháp (1917–1923) và những dấu ấn",
  "Khu di tích Cổ Loa — vòng thành xoáy ốc 2.300 năm tuổi",
  "Trang phục dân tộc Tày qua các vùng cư trú",
  "Bác Hồ ra đi tìm đường cứu nước và bước ngoặt cách mạng",
  "Phát huy giá trị tư liệu thư viện về Chủ tịch Hồ Chí Minh",
  "15 đặc sản không thể bỏ qua khi đến Kon Tum",
]

const TAGS = [
  "UNESCO",
  "Hà Nội",
  "Huế",
  "Áo dài",
  "Quan họ",
  "Tháp Chăm",
  "Hồ Chí Minh",
  "Cổ vật",
  "Lễ hội",
  "Di tích",
  "Bảo tàng",
  "Làng nghề",
]

export function SectionForumWithSidebar() {
  return (
    <section className="border-b border-foreground/15 bg-paper-warm/40">
      <div className="mx-auto max-w-[1440px] px-4 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Forum */}
          <div className="col-span-12 lg:col-span-8">
            <SectionHeading title="Diễn đàn" subtitle="Opinion · Research · Forum" />
            <div className="space-y-8">
              {FORUM.map((it, i) => (
                <article
                  key={i}
                  className="group grid grid-cols-12 gap-5 border-b border-dashed border-foreground/20 pb-8 last:border-0 cursor-pointer"
                >
                  <div className="col-span-5 sm:col-span-4">
                    <div className="relative aspect-[4/3] overflow-hidden border border-foreground/15">
                      <Image
                        src={it.img || "/placeholder.svg"}
                        alt={it.title}
                        fill
                        className="object-cover sepia-strong transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                  <div className="col-span-7 sm:col-span-8">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                      Diễn đàn · Nghiên cứu
                    </span>
                    <h3 className="mt-2 font-serif text-xl md:text-2xl font-bold leading-tight text-balance group-hover:text-accent transition-colors">
                      {it.title}
                    </h3>
                    <p className="mt-2 font-serif text-sm md:text-base leading-relaxed text-foreground/75 text-pretty">
                      {it.excerpt}
                    </p>
                    <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/55">
                      {it.author}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-4 space-y-8">
            <div>
              <h3 className="border-b-2 border-foreground pb-2 font-serif text-xl font-bold uppercase tracking-wider">
                <span className="border-l-4 border-accent pl-3">Đọc nhiều</span>
              </h3>
              <ol className="mt-4 space-y-4">
                {TOP_READ.map((t, i) => (
                  <li key={i} className="group flex gap-3 cursor-pointer">
                    <span className="font-serif text-3xl font-light leading-none text-accent/80 w-8 shrink-0">
                      {i + 1}
                    </span>
                    <h4 className="font-serif text-base font-semibold leading-snug text-pretty group-hover:text-accent transition-colors">
                      {t}
                    </h4>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="border-b-2 border-foreground pb-2 font-serif text-xl font-bold uppercase tracking-wider">
                <span className="border-l-4 border-accent pl-3">Từ khoá</span>
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {TAGS.map((t) => (
                  <a
                    key={t}
                    href="#"
                    className="border border-foreground/30 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70 hover:bg-foreground hover:text-background transition-colors"
                  >
                    #{t}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-2 border-foreground/80 bg-paper-warm p-5 stamp-corner relative">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Số đặc biệt
              </span>
              <h4 className="mt-1 font-serif text-xl font-bold leading-tight">
                Tạp chí in số 287 — Hà Nội xưa qua ảnh
              </h4>
              <p className="mt-2 font-serif text-sm text-foreground/75 leading-relaxed">
                160 trang, hơn 200 bức ảnh tư liệu lần đầu công bố. Đặt mua trên toàn quốc.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-foreground px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-background hover:bg-accent transition-colors"
              >
                Đặt mua →
              </a>
            </div>

            {/* Banner slot in sidebar */}
            <BannerSlot id="forum-sidebar" width={300} height={250} className="w-full" />
          </aside>
        </div>
      </div>
    </section>
  )
}
