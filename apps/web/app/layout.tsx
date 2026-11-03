import type { Metadata } from 'next'
import { DM_Sans, Oswald } from 'next/font/google'
import type { ReactNode } from 'react'
import { SiteHeader } from '@/components/layout/site-header'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

// Weights match the design: Oswald has no 400, so unweighted Oswald text renders at 500.
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  // DM Sans has no arrow glyphs; skipping the Arial-based fallback lets → render in the
  // system font as designed. Turbopack only drops it when `fallback` is also set.
  adjustFontFallback: false,
  fallback: ['sans-serif'],
})
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s — ${siteConfig.name}` },
  description: siteConfig.description,
  // The preview image itself comes from app/opengraph-image.jpg. On Vercel, Next.js
  // makes its URL absolute using the production domain.
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${oswald.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <SiteHeader />
        {/* Each page renders its own <main> and footer: the home page ends with the full
            site footer, the other pages with the short "Back to studio" bar. */}
        {children}
      </body>
    </html>
  )
}
