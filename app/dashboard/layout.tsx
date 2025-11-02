import { Sidebar } from '@/components/dashboard-sidebar/Sidebar'
import DashboardHeader from '@/components/dashboard-header/Header'
import { ThemeProvider } from '@/provider/ThemProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard - TradePro',
  description: 'Professional Trading Dashboard',
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background">
        <Sidebar />

        <div className="pl-16 lg:pl-64 transition-all duration-300">
          <DashboardHeader />

          <main className="p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}
