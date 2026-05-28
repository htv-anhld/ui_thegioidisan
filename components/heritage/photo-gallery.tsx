import Image from "next/image"

const PHOTOS = [
  { src: "https://picsum.photos/400/400?random=110", title: "Một ngày về bà mẹ Việt Nam anh hùng (28 17 tuổi)", cat: "Phóng sự" },
  { src: "https://picsum.photos/400/400?random=111", title: "Ann Trịnh, Thanh Thảo kết hợp trong MV mới", cat: "Văn hóa" },
  { src: "https://picsum.photos/400/400?random=112", title: "Vỉ xưa đất lửa quê hương đau đáu trong lòng Việt kiều", cat: "Cộng đồng" },
  { src: "https://picsum.photos/400/400?random=113", title: "Danh ca Thùy Yên, Mía Lệ cùng hội ngộ sau 5 năm", cat: "Sự kiện" },
]

export function PhotoGallery() {
  return (
    <section className="bg-white py-8 border-b border-border">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-pink-500 rounded"></div>
            <h2 className="text-xl font-bold uppercase">Magazine</h2>
          </div>
          <a href="#" className="text-sm text-accent hover:underline">Xem tất cả</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PHOTOS.map((p, i) => (
            <article key={i} className="group">
              <a href="#" className="block">
                <div className="img-zoom rounded-lg overflow-hidden mb-3">
                  <div className="relative aspect-square">
                    <Image
                      src={p.src}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-white/80 text-[10px] font-semibold uppercase">{p.cat}</span>
                      <h3 className="text-white text-sm font-semibold leading-snug mt-1 group-hover:text-accent transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
