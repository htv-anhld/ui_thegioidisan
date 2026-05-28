import Image from "next/image"
import { BannerSlot } from "./banner-slot"

const FORUM = [
  {
    img: "https://picsum.photos/200/150?random=100",
    title: "Dấu ấn trầm mặc của những đền tháp cuối cùng vùng Panduranga",
    author: "GS. Trần Đình Sơn",
    excerpt: "Vùng đất khô cằn nắng gió phía Nam Khánh Hoà từng là tiểu vương quốc Panduranga của Champa.",
  },
  {
    img: "https://picsum.photos/200/150?random=101",
    title: "Văn bia Vạn Tường — phải chăng có tư liệu mới về Lê Thánh Tông?",
    author: "TS. Nguyễn Hoàng Tuấn",
    excerpt: "Bia đá khắc được tiếp nhận năm 2021 vẫn còn nhiều tranh luận.",
  },
  {
    img: "https://picsum.photos/200/150?random=102",
    title: "Nam Phương Hoàng hậu với di sản kiến trúc cổ ở ngõ 186 Ngọc Hà",
    author: "Lê Mai Hương",
    excerpt: "Câu chuyện về dinh thự bị lãng quên hơn nửa thế kỷ.",
  },
]

const TOP_READ = [
  "Đôi nét về 54 dân tộc Việt Nam",
  "Nguyễn Ái Quốc ở Pháp (1917-1923) và những dấu ấn",
  "Khu di tích Cổ Loa — vòng thành xoáy ốc 2.300 năm tuổi",
  "Trang phục dân tộc Tày qua các vùng cư trú",
  "Bác Hồ ra đi tìm đường cứu nước",
]

const TAGS = ["UNESCO", "Hà Nội", "Huế", "Áo dài", "Quan họ", "Tháp Chăm", "Di tích", "Bảo tàng", "Làng nghề"]

export function SectionForumWithSidebar() {
  return (
    <section className="bg-white py-8 border-b border-border">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-12 gap-8">
          {/* Forum */}
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-yellow-500 rounded"></div>
              <h2 className="text-xl font-bold uppercase">Diễn đàn</h2>
            </div>

            <div className="space-y-4">
              {FORUM.map((it, i) => (
                <article key={i} className="group flex gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <div className="shrink-0 img-zoom rounded overflow-hidden">
                    <div className="relative w-32 h-24">
                      <Image
                        src={it.img}
                        alt={it.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <span className="text-accent text-xs font-semibold uppercase">Nghiên cứu</span>
                    <h3 className="text-lg font-bold leading-snug mt-1 group-hover:text-accent transition-colors line-clamp-2">
                      <a href="#">{it.title}</a>
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 line-clamp-1">{it.excerpt}</p>
                    <span className="text-muted-foreground text-xs mt-1 block">{it.author}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-4 space-y-6">
            {/* Top read */}
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <div className="w-1 h-5 bg-accent rounded"></div>
                <h3 className="font-bold text-sm uppercase">Xem nhiều nhất</h3>
              </div>
              <ol className="space-y-3">
                {TOP_READ.map((t, i) => (
                  <li key={i} className="group flex gap-3">
                    <span className="text-2xl font-bold text-accent/30 leading-none w-6 shrink-0">
                      {i + 1}
                    </span>
                    <h4 className="text-sm font-medium leading-snug group-hover:text-accent transition-colors line-clamp-2">
                      <a href="#">{t}</a>
                    </h4>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tags */}
            <div className="bg-white border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <div className="w-1 h-5 bg-blue-600 rounded"></div>
                <h3 className="font-bold text-sm uppercase">Từ khoá</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {TAGS.map((t) => (
                  <a
                    key={t}
                    href="#"
                    className="bg-muted px-3 py-1 text-xs rounded hover:bg-accent hover:text-white transition-colors"
                  >
                    #{t}
                  </a>
                ))}
              </div>
            </div>

            {/* Banner */}
            <BannerSlot id="forum-sidebar" width={300} height={250} className="w-full rounded-lg" />
          </aside>
        </div>
      </div>
    </section>
  )
}
