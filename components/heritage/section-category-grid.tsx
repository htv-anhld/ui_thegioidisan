import Image from "next/image"

const CATEGORIES = [
  {
    name: "CÔNG NGHỆ",
    items: [
      { img: "/images/heritage-1.png", title: "Tháp thị với nguồn điện cho rằng iPhone 17 sẽ có AI riêng" },
      { title: "iPhone gặp sự cố mạnh không thể xử lý" },
      { title: "Thị trường điện thoại người dùng nghe nhìn" },
    ],
  },
  {
    name: "ĐỜI SỐNG",
    items: [
      { img: "/images/heritage-2.png", title: "Nhiều người tìm hô hấp ngày càng khó khăn do ô nhiễm" },
      { title: "Rụng tóc hàng ngày cách khắc phục thế nào" },
      { title: "Cách đi xử phạt nhân viên điện theo cách" },
    ],
  },
  {
    name: "DU LỊCH",
    items: [
      { img: "/images/heritage-3.png", title: "Thung mừng Seo còn lại xử lý vấn bản nhỏ đến Thái" },
      { title: "Từ Mặt cáp cơ quan cau Thái Cư hay, giá bát và càng khó khăn" },
      { title: "Nơi thích hợp cả người nuôi trên tình yêu" },
    ],
  },
  {
    name: "THẾ GIỚI",
    items: [
      { img: "/images/heritage-4.png", title: "Hà Nội giải tỏ phục 2.070 đi động 0.5 thế giới Quốc phòng" },
      { title: "NASA giải tí phá Jeff Bezos xin thông báo Cung cơ nước" },
      { title: "Hà Trường hàng trang bản đến dự án Hồ Gươm" },
    ],
  },
  {
    name: "GIÁO DỤC",
    items: [
      { img: "/images/heritage-5.png", title: "Phụ huynh bối toán cho con học trò cho đại học bất cập" },
      { title: "Thực giản dạy thêm đường quản quy định học sinh" },
      { title: "Làm sao để học sinh yêu thích học tập" },
    ],
  },
]

export function SectionCategoryGrid() {
  return (
    <section className="border-b border-foreground/10">
      <div className="mx-auto max-w-[1200px] px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {CATEGORIES.map((cat, i) => (
            <div key={i}>
              <h3 className="font-serif text-[13px] font-bold text-accent border-b border-foreground/15 pb-2 mb-3">
                {cat.name}
              </h3>
              
              {cat.items[0].img && (
                <article className="group cursor-pointer mb-3">
                  <div className="relative aspect-[4/3] overflow-hidden border border-foreground/10">
                    <Image
                      src={cat.items[0].img}
                      alt={cat.items[0].title}
                      fill
                      className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="mt-2 font-serif text-[12px] leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    {cat.items[0].title}
                  </h4>
                </article>
              )}

              <ul className="space-y-2">
                {cat.items.slice(1).map((item, j) => (
                  <li key={j} className="group cursor-pointer">
                    <h5 className="font-serif text-[11px] leading-snug text-foreground/80 group-hover:text-accent transition-colors line-clamp-2">
                      {item.title}
                    </h5>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
