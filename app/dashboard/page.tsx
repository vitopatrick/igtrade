import { getUser } from '@/actions/user'
import TradingChart from '@/components/Chart/TradingChart'
import BonusCard from '@/components/balance-cards/Bonus'
import DashboardCards from '@/components/balance-cards/DashboardCards'
import TopAssets from '@/components/balance-cards/TopAssets'
import EmptyState from '@/components/empty-state/EmptyState'
import TransactionsList from '@/components/transactions-list/TransactionsList'
import QuickActions from '@/components/dashboard/QuickActions'

export default async function Dashboard() {
  const user: any = await getUser()

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      {user && (
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, {user?.first_name}!
          </h1>
          <p className="text-muted-foreground">
            Here's an overview of your trading activity
          </p>
        </div>
      )}

      {/* Stats Cards */}
      {user && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <DashboardCards amount={user?.revenue} />
          <TopAssets amount={user?.profit} />
          <BonusCard amount={user?.trading_bonus} />
        </div>
      )}

      {/* Quick Actions */}
      <QuickActions />

      {/* Trading Chart */}
      {user && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Market Overview</h2>
          </div>
          <TradingChart chart={user?.chartData} />
        </div>
      )}

      {/* Recent Transactions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
        </div>
        {user?.transactions?.length < 1 ? (
          <EmptyState
            icon="chart"
            title="No transactions yet"
            description="Start trading to see your transaction history here"
            action={{
              label: 'Make a Deposit',
              href: '/dashboard/deposit',
            }}
          />
        ) : (
          <TransactionsList />
        )}
      </div>
    </div>
  )
}
