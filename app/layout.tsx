import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ActuPro Global - Actualités Mondiales',
  description: 'Actualités mondiales en temps réel avec analyse IA. Politique, Finance, Digital, Géopolitique.',
  keywords: ['actualités', 'news', 'IA', 'politique', 'finance', 'digital'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📡</text></svg>" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}