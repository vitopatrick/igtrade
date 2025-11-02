'use client'

import { TrendingUp, TrendingDown, Activity } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatNumber } from '@/lib/format'
import { useEffect, useState } from 'react'

export default function TopAssets({ amount = 0 }: any) {
  const [displayAmount, setDisplayAmount] = useState(0)
  const trend = -3.2 // Mock trend percentage
  const isPositive = trend >= 0

  useEffect(() => {
    const duration = 1000
    const steps = 60
    const increment = amount / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= amount) {
        setDisplayAmount(amount)
        clearInterval(timer)
      } else {
        setDisplayAmount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [amount])

  return (
    <Card className="w-full card-hover border-border/50 bg-gradient-to-br from-card to-card/50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl" />

      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Total Profit
        </CardTitle>
        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
          <Activity className="h-5 w-5 text-purple-500" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-3xl font-bold tracking-tight">
          {formatNumber(displayAmount)}
        </div>
        <div className="flex items-center gap-1 text-xs">
          {isPositive ? (
            <TrendingUp className="w-3 h-3 text-success" />
          ) : (
            <TrendingDown className="w-3 h-3 text-destructive" />
          )}
          <span
            className={`font-medium ${
              isPositive ? 'text-success' : 'text-destructive'
            }`}
          >
            {isPositive ? '+' : ''}
            {trend}%
          </span>
          <span className="text-muted-foreground">vs last month</span>
        </div>
      </CardContent>
    </Card>
  )
}
