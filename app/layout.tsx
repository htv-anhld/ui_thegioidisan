import type { Metadata } from 'next'
import { Special_Elite, Crimson_Text, Playfair_Display, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const typewriter = Special_Elite({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-typewriter',
})

const serif = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const handwritten = Caveat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-hand',
})

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
      className={`${typewriter.variable} ${serif.variable} ${display.variable} ${handwritten.variable} bg-background`}
    >
      <body className="font-serif antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
