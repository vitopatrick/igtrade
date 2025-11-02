import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileSearch, Inbox, TrendingUp, Plus } from 'lucide-react'
import Link from 'next/link'

interface EmptyStateProps {
  icon?: 'search' | 'inbox' | 'chart'
  title?: string
  description?: string
  action?: {
    label: string
    href: string
  }
}

const EmptyState = ({
  icon = 'inbox',
  title = 'No data yet',
  description = 'Get started by creating your first transaction',
  action,
}: EmptyStateProps) => {
  const IconComponent = {
    search: FileSearch,
    inbox: Inbox,
    chart: TrendingUp,
  }[icon]

  return (
    <Card className="border-border/50 w-full">
      <CardContent className="flex flex-col items-center justify-center py-16 px-6 text-center">
        {/* Animated Icon Circle */}
        <div className="relative mb-6">
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
          
          {/* Icon container */}
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center backdrop-blur-sm border border-primary/30">
            <IconComponent className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-2 mb-6">
          <h3 className="text-xl font-semibold tracking-tight">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto">
            {description}
          </p>
        </div>

        {/* Action Button */}
        {action && (
          <Link href={action.href}>
            <Button className="gap-2 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
              <Plus className="w-4 h-4" />
              {action.label}
            </Button>
          </Link>
        )}

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/20 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-purple-500/20 animate-pulse delay-150" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-primary/30 animate-pulse delay-300" />
      </CardContent>
    </Card>
  )
}

export default EmptyState
