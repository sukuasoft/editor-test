import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
title: 'ARO - CODE By AROTEC',
  description: 'An Online Code Editor and Compiler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="PT">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
