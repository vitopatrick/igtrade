import { Sidebar } from '@/components/dashboard-sidebar/Sidebar'
import { ThemeProvider } from '@/provider/ThemProvider'
import { SidebarProvider } from '@/components/dashboard-sidebar/SidebarContext'
import { DashboardContent } from '@/components/dashboard-sidebar/DashboardContent'
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
      enableSystem={false}
      disableTransitionOnChange
    >
      <SidebarProvider>
        <div className="min-h-screen bg-background">
          <Sidebar />
          <DashboardContent>{children}</DashboardContent>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}
