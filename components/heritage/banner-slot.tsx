import Image from "next/image"

interface BannerSlotProps {
  id: string
  width: number
  height: number
  className?: string
  imageSrc?: string
}

export function BannerSlot({ 
  id, 
  width, 
  height, 
  className = "",
  imageSrc 
}: BannerSlotProps) {
  const defaultSrc = `/images/banner-${id}.png`
  const src = imageSrc || defaultSrc

  return (
    <div 
      className={`relative bg-muted/50 border border-dashed border-foreground/30 flex items-center justify-center overflow-hidden ${className}`}
      style={{ width: '100%', maxWidth: width, height }}
      data-banner-slot={id}
    >
      <Image
        src={src}
        alt="Banner quảng cáo"
        fill
        className="object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
      <span className="absolute text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/40 pointer-events-none">
        Banner {width}x{height}
      </span>
    </div>
  )
}

export function FullWidthBanner({ id, height = 90 }: { id: string; height?: number }) {
  return (
    <div className="border-y border-foreground/15 bg-muted/30">
      <div className="mx-auto max-w-[1440px] px-4 py-4">
        <div 
          className="relative w-full bg-muted/50 border border-dashed border-foreground/30 flex items-center justify-center overflow-hidden"
          style={{ height }}
          data-banner-slot={id}
        >
          <Image
            src={`/images/banner-${id}.png`}
            alt="Banner quảng cáo"
            fill
            className="object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <span className="absolute text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/40 pointer-events-none">
            Banner Full Width x {height}
          </span>
        </div>
      </div>
    </div>
  )
}
