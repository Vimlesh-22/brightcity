import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/contexts/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BrightCity - Your Home\'s Best Friend',
  description: 'Professional home services at your fingertips. From cleaning to repairs, find verified experts who care about your home as much as you do.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
