import Image from "next/image"
import { Facebook, Youtube, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[1200px] px-4 py-10">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Logo & About */}
          <div className="md:col-span-4">
            <a href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-di-san.png"
                alt="Thế Giới Di Sản"
                width={160}
                height={50}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-background/60 text-sm leading-relaxed">
              Cơ quan ngôn luận của Hội Di sản Văn hóa Việt Nam. Tạp chí chuyên ngành về bảo tồn và phát huy giá trị di sản văn hóa dân tộc.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm uppercase mb-4">Chuyên mục</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-accent transition-colors">Thời sự</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Di sản</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Văn hóa</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Du lịch</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Nhân vật</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-sm uppercase mb-4">Về chúng tôi</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-accent transition-colors">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Liên hệ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Quảng cáo</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Tuyển dụng</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold text-sm uppercase mb-4">Liên hệ</h4>
            <address className="not-italic text-sm text-background/60 space-y-2">
              <p>Số 287 Phố Huế, Quận Hai Bà Trưng, Hà Nội</p>
              <p>Điện thoại: (024) 38 250 047</p>
              <p>Email: info@thegioidisan.vn</p>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/40">
          <p>© 2026 Thế Giới Di Sản. Bản quyền thuộc về Hội Di sản Văn hóa Việt Nam.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-background transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-background transition-colors">Bảo mật</a>
            <a href="#" className="hover:text-background transition-colors">RSS</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
