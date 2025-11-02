'use client'

import { Gift, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatNumber } from '@/lib/format'
import { useEffect, useState } from 'react'

export default function BonusCard({ amount = 0 }: any) {
  const [displayAmount, setDisplayAmount] = useState(0)

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
    <Card className="w-full card-hover border-border/50 bg-gradient-to-br from-amber-500/5 via-card to-card overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />

      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Trading Bonus
        </CardTitle>
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center relative">
          <Gift className="h-5 w-5 text-amber-500" />
          <Sparkles className="w-3 h-3 text-amber-400 absolute -top-1 -right-1" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-3xl font-bold tracking-tight">
          {formatNumber(displayAmount)}
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="text-amber-500 font-medium">Active</span>
          <span className="text-muted-foreground">• Available for trading</span>
        </div>
      </CardContent>
    </Card>
  )
}
