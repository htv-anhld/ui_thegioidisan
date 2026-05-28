import Image from "next/image"
import { Play } from "lucide-react"

const MAIN_VIDEO = {
  img: "/images/hero-heritage.png",
  title: "Tham vo vi tri tau ngam Hai quan Viet Nam co ai noi khong",
  duration: "15:32",
}

const VIDEO_LIST = [
  { img: "/images/heritage-1.png", title: "Ha noi hung vien minh lam sao de hoi phuc", time: "10:24" },
  { img: "/images/heritage-2.png", title: "Ha van noi the gioi tro lai ho ca nhan", time: "8:15" },
  { img: "/images/heritage-3.png", title: "La dia da xuat khau than dau noi len dinh cao", time: "12:45" },
  { img: "/images/heritage-4.png", title: "Ly Ly da roi khoi Li Hue, ma so hoc van da biet", time: "6:30" },
  { img: "/images/heritage-5.png", title: "Ha noi quyet dinh moi lang nghe cho ngu dan", time: "9:18" },
]

export function SectionVideo() {
  return (
    <section className="bg-foreground text-background py-8">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex items-center gap-2 mb-6">
          <Play className="size-5 text-accent fill-accent" />
          <span className="font-serif text-lg font-bold text-accent">VIDEO</span>
        </div>

        <div className="grid grid-cols-12 gap-6">
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
                  <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Play className="w-8 h-8 text-background fill-background ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-foreground/80 px-2 py-1 text-xs font-mono">
                  {MAIN_VIDEO.duration}
                </div>
              </div>
              <h3 className="mt-3 font-serif text-xl font-bold leading-tight group-hover:text-accent transition-colors">
                {MAIN_VIDEO.title}
              </h3>
            </article>
          </div>

          {/* Video list */}
          <div className="col-span-12 lg:col-span-5 space-y-3">
            {VIDEO_LIST.map((video, i) => (
              <article key={i} className="group cursor-pointer flex gap-3">
                <div className="relative w-32 h-20 shrink-0 overflow-hidden">
                  <Image
                    src={video.img}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-accent/80 flex items-center justify-center">
                      <Play className="w-3 h-3 text-background fill-background ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-1 right-1 bg-foreground/80 px-1 py-0.5 text-[10px] font-mono">
                    {video.time}
                  </div>
                </div>
                <h4 className="flex-1 font-serif text-sm leading-snug group-hover:text-accent transition-colors line-clamp-2">
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
