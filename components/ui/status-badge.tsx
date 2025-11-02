import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Clock, XCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatusBadgeProps {
  status: string
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusLower = status.toLowerCase()

  const statusConfig = {
    completed: {
      icon: CheckCircle2,
      label: 'Completed',
      className:
        'bg-success/10 text-success border-success/20 hover:bg-success/20',
    },
    approved: {
      icon: CheckCircle2,
      label: 'Approved',
      className:
        'bg-success/10 text-success border-success/20 hover:bg-success/20',
    },
    success: {
      icon: CheckCircle2,
      label: 'Success',
      className:
        'bg-success/10 text-success border-success/20 hover:bg-success/20',
    },
    pending: {
      icon: Clock,
      label: 'Pending',
      className:
        'bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20',
    },
    processing: {
      icon: Clock,
      label: 'Processing',
      className:
        'bg-blue-500/10 text-blue-500 border-blue-500/20 hover:bg-blue-500/20',
    },
    failed: {
      icon: XCircle,
      label: 'Failed',
      className:
        'bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20',
    },
    rejected: {
      icon: XCircle,
      label: 'Rejected',
      className:
        'bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20',
    },
    cancelled: {
      icon: AlertCircle,
      label: 'Cancelled',
      className:
        'bg-muted text-muted-foreground border-border hover:bg-muted/80',
    },
  }

  const config = statusConfig[statusLower as keyof typeof statusConfig] || {
    icon: AlertCircle,
    label: status,
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
