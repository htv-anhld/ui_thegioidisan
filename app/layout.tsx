import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Di Sản — Báo chí Văn hóa & Lịch sử Việt Nam',
  description:
    'Hồ sơ lưu trữ về văn hóa, lịch sử và di sản Việt Nam. Một tờ báo di sản cao cấp với tinh thần bảo tàng và điện ảnh tài liệu.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      className="bg-background"
      suppressHydrationWarning
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
