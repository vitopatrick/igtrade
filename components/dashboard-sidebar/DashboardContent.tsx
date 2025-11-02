'use client'

import { useSidebar } from './SidebarContext'
import DashboardHeader from '@/components/dashboard-header/Header'
import { cn } from '@/lib/utils'

export function DashboardContent({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar()

  return (
    <div
      className={cn(
        'transition-all duration-300',
        // Mobile: no padding
        'pl-0',
        // Desktop: padding based on collapsed state
        collapsed ? 'lg:pl-16' : 'lg:pl-64',
      )}
    >
      <DashboardHeader />

      <main className="p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  )
}
