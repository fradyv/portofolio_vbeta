import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Syne, Plus_Jakarta_Sans, Caveat } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-caveat',
})

export const metadata: Metadata = {
  title: 'Fastu Nadya | Fradyva',
  description:
    'Portfolio of Fastu Nadya Progresiva, an Informatics student at Amikom University of Yogyakarta focused on web development, cybersecurity, and creative technology.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f6f3' },
    { media: '(prefers-color-scheme: dark)', color: '#0e110f' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${syne.variable} ${jakarta.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
