import Image from "next/image"

export function Masthead() {
  return (
    <header className="border-b border-foreground/20 bg-background">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <Image 
            src="/images/logo-di-san.png" 
            alt="The Gioi Di San" 
            width={105} 
            height={30}
            className="w-[105px] h-auto"
          />
        </a>

        {/* Banner 675x90 */}
        <div className="hidden lg:block">
          <div 
            className="relative overflow-hidden border border-foreground/10"
            style={{ width: 675, height: 90 }}
            data-banner-slot="masthead-right"
          >
            <Image
              src="/images/banner-masthead-right.png"
              alt="Banner"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
