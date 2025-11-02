import { ThemeProvider } from '@/provider/ThemProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up - TradePro',
  description: 'Create your TradePro account',
}

export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
