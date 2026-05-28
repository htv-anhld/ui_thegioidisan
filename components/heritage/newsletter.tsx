import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="relative border-2 border-double border-sepia/60 bg-paper p-10 paper-burn">
        <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2" aria-hidden="true" />
        <div className="text-center">
          <Mail className="mx-auto h-8 w-8 text-rust" />
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-rust">
            Đăng ký phát hành
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold italic text-ink md:text-4xl">
            Nhận Báo Di Sản qua thư bưu điện
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-serif text-base leading-relaxed text-ink-faded">
            Mỗi nửa tháng một số. Chuyên đề mới, hồ sơ lưu trữ chưa công bố, và những bộ ảnh
            quý hiếm — gửi thẳng đến hộp thư của quý độc giả.
          </p>

          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="thuong.dinh@email.vn"
              aria-label="Địa chỉ email"
              className="flex-1 border border-sepia/50 bg-paper-dark/30 px-4 py-3 font-mono text-sm text-ink placeholder:text-ink-faded/60 focus:border-rust focus:outline-none"
            />
            <button
              type="submit"
              className="border border-sepia bg-sepia px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] text-paper transition hover:bg-rust hover:border-rust"
            >
              Đăng ký
            </button>
          </form>

          <p className="mt-4 font-hand text-lg text-ink-faded">
            — miễn phí · huỷ bất cứ lúc nào —
          </p>
        </div>
      </div>
    </section>
  )
}
