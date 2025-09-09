import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const stored = localStorage.getItem('theme'); const theme = stored ? stored : 'dark'; if (theme === 'dark') { document.documentElement.classList.add('dark'); } else { document.documentElement.classList.remove('dark'); } } catch (_) {} })();`
          }}
        />
        {children}
      </body>
    </html>
  )
}
