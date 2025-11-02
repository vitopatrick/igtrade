import { ThemeProvider } from '@/provider/ThemProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forgot Password - Trade terminal',
  description: 'Reset your Trade terminal account password',
}

export default function ForgotPasswordLayout({
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
