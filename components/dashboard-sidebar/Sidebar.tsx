'use client'

import { useSidebar } from './SidebarContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  ArrowDownCircle,
  ArrowUpCircle,
  History,
  Wallet,
  TrendingUp,
  Newspaper,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const menuItems = [
  {
    title: 'Overview',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Deposit',
    href: '/dashboard/deposit',
    icon: ArrowDownCircle,
  },
  {
    title: 'Withdraw',
    href: '/dashboard/withdrawal',
    icon: ArrowUpCircle,
  },
  {
    title: 'Transactions',
    href: '/dashboard/transactions',
    icon: History,
  },
  {
    title: 'Wallet',
    href: '/dashboard/wallet',
    icon: Wallet,
  },
  {
    title: 'Trade',
    href: '/dashboard/trade',
    icon: TrendingUp,
  },
  {
    title: 'Market News',
    href: '/dashboard/market-news',
    icon: Newspaper,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const { collapsed, setCollapsed } = useSidebar()

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-border transition-all duration-300',
        collapsed ? 'w-16' : 'w-64',
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between px-4 border-b border-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg gradient-text">TradePro</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-accent transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group relative',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'hover:bg-accent text-sidebar-foreground hover:text-foreground',
              )}
            >
              <Icon className={cn('w-5 h-5 flex-shrink-0')} />
              {!collapsed && (
                <span className="font-medium text-sm">{item.title}</span>
              )}

              {/* Tooltip for collapsed state */}
              {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-lg">
                  {item.title}
                </div>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom section */}
      {!collapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/20">
            <h4 className="font-semibold text-sm mb-1">Need Help?</h4>
            <p className="text-xs text-muted-foreground mb-2">
              Contact our 24/7 support team
            </p>
            <Link
              href="/contact"
              className="text-xs text-primary hover:underline"
            >
              Get Support →
            </Link>
          </div>
        </div>
      )}
    </aside>
  )
}
