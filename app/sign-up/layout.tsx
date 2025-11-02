import { ThemeProvider } from '@/provider/ThemProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up - Trade terminal',
  description: 'Create your Trade terminal account',
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
