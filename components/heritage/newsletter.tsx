import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="bg-[#1a1a2e] py-12">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-white text-lg font-bold">Đăng ký nhận tin</h2>
              <p className="text-white/60 text-sm">Cập nhật tin tức mới nhất về di sản văn hóa</p>
            </div>
          </div>
          
          <form className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              required
              placeholder="Email của bạn"
              aria-label="Địa chỉ email"
              className="flex-1 md:w-80 bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 rounded focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="bg-accent px-6 py-3 text-sm font-semibold text-white rounded hover:bg-accent/90 transition-colors"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
