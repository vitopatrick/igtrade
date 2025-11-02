import { Badge } from '@/components/ui/badge'
import { ArrowDownCircle, ArrowUpCircle, TrendingUp, Gift } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TypeBadgeProps {
  type: string
  className?: string
}

export function TypeBadge({ type, className }: TypeBadgeProps) {
  const typeLower = type.toLowerCase()

  const typeConfig = {
    deposit: {
      icon: ArrowDownCircle,
      label: 'Deposit',
      className:
        'bg-success/10 text-success border-success/20 hover:bg-success/20',
    },
    withdrawal: {
      icon: ArrowUpCircle,
      label: 'Withdrawal',
      className:
        'bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20',
    },
    profit: {
      icon: TrendingUp,
      label: 'Profit',
      className:
        'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20',
    },
    bonus: {
      icon: Gift,
      label: 'Bonus',
      className:
        'bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20',
    },
  }

  const config = typeConfig[typeLower as keyof typeof typeConfig] || {
    icon: TrendingUp,
    label: type,
    className: 'bg-muted text-muted-foreground border-border',
  }

  const Icon = config.icon

  return (
    <Badge
      variant="outline"
      className={cn(
        'gap-1.5 font-medium capitalize transition-colors',
        config.className,
        className,
      )}
    >
      <Icon className="w-3 h-3" />
      {config.label}
    </Badge>
  )
}
