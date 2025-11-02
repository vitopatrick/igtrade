import React from 'react'
import AccountSummaryChart from '../charts/AccountSummaryChart'
import { formatDate } from '@/lib/format'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { TrendingUp, BarChart3 } from 'lucide-react'
import EmptyState from '../empty-state/EmptyState'

const TradingChart = ({ chart }: any) => {
  // Check if chart data exists and has items
  if (!chart || chart.length === 0) {
    return (
      <Card className="border-border/50 glassmorphism">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle>Account Performance</CardTitle>
              <CardDescription>Your trading profit over time</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon="chart"
            title="No performance data yet"
            description="Your trading performance chart will appear here once you start making profits"
          />
        </CardContent>
      </Card>
    )
  }

  const newData = chart.map((data: any) => {
    return {
      date: formatDate(data.date),
      profit: data.profit,
    }
  })

  const sortedArray = newData.sort((a: any, b: any) => a.date - b.date)

  // Calculate total profit and trend
  const totalProfit = sortedArray.reduce(
    (sum: number, item: any) => sum + item.profit,
    0,
  )
  const avgProfit = totalProfit / sortedArray.length
  const lastProfit = sortedArray[sortedArray.length - 1]?.profit || 0
  const trend = lastProfit > avgProfit ? 'up' : 'down'

  return (
    <Card className="border-border/50 glassmorphism">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle>Account Performance</CardTitle>
              <CardDescription>Your trading profit over time</CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2 text-success">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">
              ${totalProfit.toLocaleString()}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <AccountSummaryChart data={sortedArray} />
      </CardContent>
    </Card>
  )
}

export default TradingChart
