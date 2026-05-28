import Image from "next/image"
import { Play } from "lucide-react"

const MAIN_VIDEO = {
  img: "/images/hero-heritage.png",
  title: "Tham vọ vị trí tàu ngầm Hải quân Việt Nam có ai nói không",
  duration: "15:32",
}

const VIDEO_LIST = [
  { img: "/images/heritage-1.png", title: "Hà Nội hưng viện minh làm sao để hồi phục", time: "10:24" },
  { img: "/images/heritage-2.png", title: "Hà văn nói thế giới trở lại hồ cá nhân", time: "8:15" },
  { img: "/images/heritage-3.png", title: "La địa đã xuất khẩu thân dầu nổi lên đỉnh cao", time: "12:45" },
  { img: "/images/heritage-4.png", title: "Lý Lý đã rời khỏi Lý Huệ, mã số học văn đã biết", time: "6:30" },
  { img: "/images/heritage-5.png", title: "Hà Nội quyết định mới lắng nghe cho ngư dân", time: "9:18" },
]

export function SectionVideo() {
  return (
    <section className="bg-foreground text-background py-6">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex items-center gap-2 mb-5">
          <Play className="size-4 text-accent fill-accent" />
          <span className="font-serif text-base font-bold text-accent">VIDEO</span>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Main video */}
          <div className="col-span-12 lg:col-span-7">
            <article className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={MAIN_VIDEO.img}
                  alt={MAIN_VIDEO.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Play className="w-6 h-6 text-background fill-background ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-foreground/80 px-2 py-1 text-[10px] font-mono">
                  {MAIN_VIDEO.duration}
                </div>
              </div>
              <h3 className="mt-3 font-serif text-lg font-bold leading-tight group-hover:text-accent transition-colors">
                {MAIN_VIDEO.title}
              </h3>
            </article>
          </div>

          {/* Video list */}
          <div className="col-span-12 lg:col-span-5 space-y-3">
            {VIDEO_LIST.map((video, i) => (
              <article key={i} className="group cursor-pointer flex gap-3">
                <div className="relative w-28 h-[70px] shrink-0 overflow-hidden">
                  <Image
                    src={video.img}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-accent/80 flex items-center justify-center">
                      <Play className="w-3 h-3 text-background fill-background ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-1 right-1 bg-foreground/80 px-1 py-0.5 text-[9px] font-mono">
                    {video.time}
                  </div>
                </div>
                <h4 className="flex-1 font-serif text-[12px] leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  {video.title}
                </h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
