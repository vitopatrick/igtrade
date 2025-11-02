import { getUser } from '@/actions/user'
import EmptyState from '@/components/empty-state/EmptyState'
import TransactionsList from '@/components/transactions-list/TransactionsList'
import { History } from 'lucide-react'

const TransactionsPage = async () => {
  const user: any = await getUser()

  const transactions = user.transactions

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
          <History className="w-6 h-6 text-purple-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
          <p className="text-muted-foreground">
            View and manage all your trading transactions
          </p>
        </div>
      </div>

      {/* Transactions List */}
      {transactions?.length < 1 ? (
        <EmptyState
          icon="search"
          title="No transactions found"
          description="Your transaction history will appear here once you start trading"
          action={{
            label: 'Make a Deposit',
            href: '/dashboard/deposit',
          }}
        />
      ) : (
        <TransactionsList />
      )}
    </div>
  )
}

export default TransactionsPage
