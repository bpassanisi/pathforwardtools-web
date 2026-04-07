import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'PathForward Tools — Done standing still.',
  description:
    'PathForward Tools builds apps for people navigating what comes next. Clarity, momentum, progress — whatever that means for you.',
  openGraph: {
    title: 'PathForward Tools',
    description: 'Done standing still.',
    url: 'https://pathforwardtools.com',
    siteName: 'PathForward Tools',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/brand/pf-tools-icon.svg',
    apple: '/brand/pf-tools-icon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className="bg-[#1B2A4A] font-[family-name:var(--font-inter)] antialiased"
      >
        {children}
      </body>
    </html>
  )
}
