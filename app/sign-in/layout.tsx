import { ThemeProvider } from '@/provider/ThemProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In - Trade terminal',
  description: 'Sign in to your Trade terminal account',
}

export default function SignInLayout({
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
