# Báo Cáo Rà Soát Lỗi - v0-website-layout-adjustments

## 🔴 Lỗi Chính

### 1. **Tailwind Color Class Issues** (CRITICAL)
**Vị trí**: Tất cả component heritage
**Lỗi**: Sử dụng Tailwind color classes nhưng colors không được define trong Tailwind config

```
Lỗi tìm thấy:
- border-sepia/50      ❌ 'sepia' không định nghĩa
- text-sepia           ❌
- text-ink             ❌ 'ink' không định nghĩa
- text-ink-faded       ❌
- text-rust            ❌ 'rust' không định nghĩa
- text-gold            ❌
- bg-paper-dark/40     ❌ 'paper-dark' không định nghĩa
- bg-paper             ❌
```

**Nguyên nhân**: CSS variables được định nghĩa trong `globals.css` nhưng Tailwind CSS v4 không biết về chúng.

**File ảnh hưởng** (~30 files):
- site-footer.tsx
- pull-quote.tsx
- section-*.tsx
- Hầu hết component trong heritage/

---

### 2. **tsconfig.json Path Alias Issue** (MEDIUM)
**File**: tsconfig.json (dòng 25-28)

```json
"paths": {
  "@/*": [
    "./*"  // ❌ SAI - trỏ đến root thay vì components
  ]
}
```

**Sửa**:
```json
"paths": {
  "@/*": [
    "./"
  ]
}
```

**Ảnh hưởng**: Imports như `@/components/...` vẫn hoạt động nhưng cấu hình không chuẩn.

---

### 3. **Missing Theme Provider in Layout** (MEDIUM)
**File**: app/layout.tsx

**Lỗi**: 
- Không import `ThemeProvider`
- Không wrap children với `<ThemeProvider>`
- Không setup dark mode support

**Sửa**: Thêm vào layout.tsx (xem fix details bên dưới)

---

### 4. **Tailwind Theme Configuration Mismatch**
**File**: globals.css (dòng 39-79)

**Vấn đề**: 
- CSS define custom colors với `--color-sepia`, `--color-ink`, etc
- Nhưng Tailwind không biết extend từ CSS variables
- Khi build, Tailwind bỏ qua các color class không recognized

**Hệ quả**:
```
<h3 className="text-sepia">...</h3>  
<!-- Được compile thành:  h3 {} - không có color!-->

<h3 style="color: var(--sepia)">...</h3>  
<!-- Cách làm này sẽ hoạt động-->
```

---

### 5. **Images Path Issues** (MINOR - hoạt động nhưng cần verify)
**File**: Nhiều component
- `/images/flag-us.png` ✅ Tồn tại
- `/images/logo-di-san.png` ✅ Tồn tại
- `/images/map-old.png` ✅ Tồn tại

→ **OK, nhưng nên optimize (quá lớn: 1-2MB)**

---

### 6. **Font-Family Usage Issues**
**Vấn đề**: Sử dụng `font-sans`, `font-mono`, `font-serif`, `font-display`, `font-hand` nhưng Next.js font variables không được properly injected

**File**: layout.tsx
- ✅ Font được import từ Google Fonts
- ✅ CSS variables được set
- ✅ Tailwind @theme được update

Nhưng: Cần verify trong browser tại sao fonts không apply đúng cách.

---

## ✅ Các Thay Đổi Cần Làm

### Fix 1: Cập nhật globals.css để Tailwind nhận dạng colors

**Chỉnh sửa thêm vào globals.css sau @theme block:**

```css
@layer components {
  /* Utility classes cho custom colors */
  .text-ink { @apply text-[oklch(0.22_0.04_40)]; }
  .text-ink-faded { @apply text-[oklch(0.42_0.05_50)]; }
  .text-sepia { @apply text-[oklch(0.38_0.09_45)]; }
  .text-rust { @apply text-[oklch(0.55_0.13_50)]; }
  .text-gold { @apply text-[oklch(0.68_0.12_75)]; }
  .text-paper { @apply text-[oklch(0.93_0.025_80)]; }
  .text-paper-dark { @apply text-[oklch(0.86_0.04_70)]; }
  
  .bg-paper { @apply bg-[oklch(0.93_0.025_80)]; }
  .bg-paper-dark { @apply bg-[oklch(0.86_0.04_70)]; }
  .bg-ink { @apply bg-[oklch(0.22_0.04_40)]; }
  .bg-sepia { @apply bg-[oklch(0.38_0.09_45)]; }
  
  .border-ink { @apply border-[oklch(0.22_0.04_40)]; }
  .border-sepia { @apply border-[oklch(0.38_0.09_45)]; }
  .border-ink-faded { @apply border-[oklch(0.42_0.05_50)]; }
}

/* Hoặc, tùy chọn tốt hơn: sử dụng CSS variables với arbitrary values */
.text-ink { color: var(--ink); }
.text-ink-faded { color: var(--ink-faded); }
.text-sepia { color: var(--sepia); }
.text-rust { color: var(--rust); }
.text-gold { color: var(--gold); }
```

---

### Fix 2: Cập nhật layout.tsx

```typescript
import type { Metadata } from 'next'
import { Special_Elite, Crimson_Text, Playfair_Display, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'  // ✅ ADD
import './globals.css'

// ... fonts config ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      className={`${typewriter.variable} ${serif.variable} ${display.variable} ${handwritten.variable} bg-background`}
      suppressHydrationWarning  // ✅ ADD
    >
      <body className="font-serif antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

---

### Fix 3: Verify tailwind.config.js hoặc next.config mjs

Hãy kiểm tra next.config.mjs:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Optimize images
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  }
};

export default nextConfig;
```

---

### Fix 4: Kiểm tra fonts.ts (nếu có) hoặc tạo fonts.ts

Tạo file `lib/fonts.ts`:

```typescript
import { Special_Elite, Crimson_Text, Playfair_Display, Caveat } from 'next/font/google'

export const typewriter = Special_Elite({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-typewriter',
  display: 'swap',
})

export const serif = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const handwritten = Caveat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-hand',
  display: 'swap',
})
```

Sau đó import trong layout.tsx:
```typescript
import { typewriter, serif, display, handwritten } from '@/lib/fonts'
```

---

## 📊 Summary of Issues

| # | Lỗi | Severity | Files Affected | Fix Status |
|---|-----|----------|----------------|-----------|
| 1 | Tailwind color classes undefined | 🔴 CRITICAL | ~30 files | Cần FIX |
| 2 | Missing ThemeProvider | 🟠 MEDIUM | layout.tsx | Cần ADD |
| 3 | tsconfig paths alias | 🟡 MINOR | tsconfig.json | Cần UPDATE |
| 4 | Large images (unoptimized) | 🟡 MINOR | public/images | Cần OPTIMIZE |
| 5 | Font display strategy | 🟡 MINOR | layout.tsx, globals.css | Cần ADD `display: 'swap'` |

---

## 🎯 Priority Order

1. **FIRST**: Fix globals.css - add color utility classes (5 min)
2. **SECOND**: Update layout.tsx - add ThemeProvider (2 min)
3. **THIRD**: Verify fonts are displaying correctly (testing)
4. **FOURTH**: Optimize images with next/image (optional but recommended)

---

## ⚡ Quick Fixes (Copy-Paste Ready)

### Lỗi #1: Add này vào cuối globals.css (trước closing brace)

```css
@layer components {
  .text-ink { color: var(--ink); }
  .text-ink-faded { color: var(--ink-faded); }
  .text-sepia { color: var(--sepia); }
  .text-rust { color: var(--rust); }
  .text-gold { color: var(--gold); }
  .text-paper { color: var(--paper); }
  .text-paper-dark { color: var(--paper-dark); }
  
  .bg-paper { background-color: var(--paper); }
  .bg-paper-dark { background-color: var(--paper-dark); }
  .bg-ink { background-color: var(--ink); }
  .bg-sepia { background-color: var(--sepia); }
  
  .border-ink { border-color: var(--ink); }
  .border-sepia { border-color: var(--sepia); }
  .border-ink-faded { border-color: var(--ink-faded); }
}
```

---

## 📝 Test Checklist

After fixes:
- [ ] Build completes without errors
- [ ] Homepage renders correctly
- [ ] Colors display correctly
- [ ] Fonts render in correct typeface
- [ ] Images load properly
- [ ] Responsive layout works (mobile, tablet, desktop)
- [ ] Dark mode toggle works (if implemented)

---

**Status**: Ready for fixes  
**Estimated Time**: 15-20 minutes  
**Priority**: HIGH (styling issues affect UX)
