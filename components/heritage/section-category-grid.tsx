import Image from "next/image"

const CATEGORIES = [
  {
    name: "CONG NGHE",
    items: [
      { img: "/images/heritage-1.png", title: "Thap thi thi voi nguy dien cho rang iPhone 17 se co AI rieng" },
      { title: "iPhone gap su co manh khong the xu ly" },
      { title: "Thi tren bay nguoi dung nghe nhin nghe" },
    ],
  },
  {
    name: "DOI SONG",
    items: [
      { img: "/images/heritage-2.png", title: "Nhieu nguoi tim ho hap ngay cang kho khan do o nhiem" },
      { title: "Rung toc hang ngay cach khac phuc the nao" },
      { title: "Cach di xung phat nhan vien dien theo cach" },
    ],
  },
  {
    name: "DU LICH",
    items: [
      { img: "/images/heritage-3.png", title: "Thung mung Seo con lai xu ly van ban nho den Thai" },
      { title: "Tu Mat cap co quan cau Thai Cu hay, gia bat va cang kho khan" },
      { title: "Noi thich hop ca nguoi nuoi tren tinh yeu" },
    ],
  },
  {
    name: "THE GIOI",
    items: [
      { img: "/images/heritage-4.png", title: "Ha Noi giai to phuc 2.070 di dong 0.5 the gioi Quoc phong" },
      { title: "NASDI giai ti pha Jeff Bezos xin thong bao Cung co nuoc" },
      { title: "Ha truong hang trang ban den du an Ho Guom" },
    ],
  },
  {
    name: "GIAO DUC",
    items: [
      { img: "/images/heritage-5.png", title: "Phu huynh boi toan cho con hoc tro cho dai hoc bat cap" },
      { title: "Thuc gian day them duong quan quy dinh hoc sinh" },
      { title: "Lam sao de hoc sinh yeu thich hoc" },
    ],
  },
]

export function SectionCategoryGrid() {
  return (
    <section className="border-b border-foreground/15">
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((cat, i) => (
            <div key={i}>
              <h3 className="font-serif text-sm font-bold text-accent border-b border-foreground/20 pb-2 mb-3">
                {cat.name}
              </h3>
              
              {cat.items[0].img && (
                <article className="group cursor-pointer mb-3">
                  <div className="relative aspect-[4/3] overflow-hidden border border-foreground/15">
                    <Image
                      src={cat.items[0].img}
                      alt={cat.items[0].title}
                      fill
                      className="object-cover sepia-strong transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="mt-2 font-serif text-sm leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    {cat.items[0].title}
                  </h4>
                </article>
              )}

              <ul className="space-y-2">
                {cat.items.slice(1).map((item, j) => (
                  <li key={j} className="group cursor-pointer">
                    <h5 className="font-serif text-xs leading-snug text-foreground/80 group-hover:text-accent transition-colors line-clamp-2">
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
