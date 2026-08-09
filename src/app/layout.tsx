import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const display = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-display' })

const siteUrl = 'https://town-team.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Town Team | Egyptian Streetwear for Everyday Movement', template: '%s | Town Team' },
  description: 'Discover Town Team, Egyptian streetwear made in Cairo for confident everyday movement. Shop premium jackets, shirts, and denim with unmistakable street style.',
  keywords: ['Egyptian streetwear', 'Cairo fashion', 'men’s urban fashion', 'Egypt clothing brand', 'Town Team', 'streetwear Egypt'],
  applicationName: 'Town Team',
  generator: 'Next.js',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Town Team',
    title: 'Town Team | Egyptian Streetwear for Everyday Movement',
    description: 'Premium Egyptian streetwear born in Cairo and built for the streets.',
    images: [{ url: '/images/hero.png', width: 1200, height: 1200, alt: 'Town Team Egyptian streetwear collection' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Town Team | Egyptian Streetwear',
    description: 'Premium Egyptian streetwear born in Cairo and built for the streets.',
    images: ['/images/hero.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/apple-icon.png',
  },
}
export const viewport: Viewport = { colorScheme: 'light dark', themeColor: [{ media: '(prefers-color-scheme: light)', color: '#f7f4ec' }, { media: '(prefers-color-scheme: dark)', color: '#151515' }] }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${geist.variable} ${geistMono.variable} ${display.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
