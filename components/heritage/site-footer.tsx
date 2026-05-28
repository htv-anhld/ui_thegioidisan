import { Feather } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-double border-sepia/50 bg-paper-dark/40">
      <div className="mx-auto max-w-[1440px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Feather className="h-6 w-6 -rotate-12 text-sepia" />
              <h3 className="font-display text-3xl font-black italic text-ink">Di Sản</h3>
            </div>
            <p className="mt-4 max-w-md font-serif text-base leading-relaxed text-ink-faded">
              Báo chí di sản — một dự án phi lợi nhuận do nhóm nhà báo, nhà nghiên cứu và những
              người yêu lịch sử Việt Nam khởi xướng từ năm 2014.
            </p>
            <p className="mt-4 font-hand text-xl text-rust">
              &ldquo;Lưu giữ ký ức — kể lại tương lai.&rdquo;
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="border-b border-sepia/50 pb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink">
              Chuyên mục
            </h4>
            <ul className="mt-4 space-y-2 font-serif text-base text-ink-faded">
              <li><a href="#" className="hover:text-rust">Tin nổi bật</a></li>
              <li><a href="#" className="hover:text-rust">Di sản văn hoá</a></li>
              <li><a href="#" className="hover:text-rust">Lịch sử</a></li>
              <li><a href="#" className="hover:text-rust">Hồ sơ lưu trữ</a></li>
              <li><a href="#" className="hover:text-rust">Nhân vật</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="border-b border-sepia/50 pb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink">
              Toà soạn
            </h4>
            <ul className="mt-4 space-y-2 font-serif text-base text-ink-faded">
              <li><a href="#" className="hover:text-rust">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-rust">Ban biên tập</a></li>
              <li><a href="#" className="hover:text-rust">Cộng tác viên</a></li>
              <li><a href="#" className="hover:text-rust">Liên hệ</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="border-b border-sepia/50 pb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink">
              Toà soạn — Hà Nội
            </h4>
            <address className="mt-4 not-italic font-serif text-base leading-relaxed text-ink-faded">
              Số 47 Hàng Trống<br />
              Quận Hoàn Kiếm, Hà Nội<br />
              <br />
              <span className="font-mono text-xs tracking-[0.15em]">Điện thoại — (024) 38 250 047</span><br />
              <span className="font-mono text-xs tracking-[0.15em]">Bưu điện — disan@toasoan.vn</span>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-sepia/40 pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faded md:flex-row">
          <p>© MMXXVI Báo Di Sản — Mọi tài liệu thuộc bản quyền toà soạn</p>
          <p className="flex items-center gap-3">
            <span>In trên giấy gió tái chế</span>
            <span className="h-px w-6 bg-sepia/50" />
            <span>ấn bản điện tử</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
