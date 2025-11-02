'use client'

import Link from 'next/link'
import {
  ArrowDownCircle,
  ArrowUpCircle,
  TrendingUp,
  Wallet,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const quickActions = [
  {
    title: 'Deposit',
    description: 'Add funds to your account',
    icon: ArrowDownCircle,
    href: '/dashboard/deposit',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    title: 'Withdraw',
    description: 'Transfer funds out',
    icon: ArrowUpCircle,
    href: '/dashboard/withdrawal',
    color: 'text-success',
    bgColor: 'bg-success/10',
  },
  {
    title: 'Trade',
    description: 'Start trading now',
    icon: TrendingUp,
    href: '/dashboard/trade',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    title: 'Wallet',
    description: 'View your wallet',
    icon: Wallet,
    href: '/dashboard/wallet',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
  },
]

export default function QuickActions() {
  return (
    <Card className="border-border/50">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon
            return (
              <Link
                key={action.href}
                href={action.href}
                className="group relative p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105 bg-card"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-lg ${action.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-6 h-6 ${action.color}`} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{action.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
