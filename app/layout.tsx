import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const cabinetGrotesk = localFont({
  src: '../fonts/CabinetGrotesk-Variable.ttf',
  variable: '--font-cabinet',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Trade terminal - Professional Trading Platform',
  description: 'Modern professional trading platform with real-time analytics',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cabinetGrotesk.variable} font-sans antialiased`}>
        {children}
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  )
}
