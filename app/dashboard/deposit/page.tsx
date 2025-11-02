import { getDeposits } from '@/actions/deposit'
import { DepositFaq } from '@/components/deposits/DepositFaq'
import DepositForm from '@/components/deposits/DepositForm'
import DepositList from '@/components/deposits/DepositList'
import EmptyState from '@/components/empty-state/EmptyState'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { ArrowDownCircle } from 'lucide-react'

const DepositPage = async () => {
  const session = await auth.api.getSession({
    headers: headers(),
  })

  if (!session) {
    return <div>Please sign in</div>
  }

  const deposits: any = await getDeposits(session.user.id)

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <ArrowDownCircle className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Deposit Funds</h1>
          <p className="text-muted-foreground">
            Add funds to your trading account securely
          </p>
        </div>
      </div>

      {/* Form and FAQ */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DepositForm />
        </div>
        <div>
          <DepositFaq />
        </div>
      </div>

      {/* Deposit History */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Deposit History</h2>
        {deposits?.length < 1 ? (
          <EmptyState
            icon="inbox"
            title="No deposits yet"
            description="Your deposit history will appear here after your first transaction"
          />
        ) : (
          <DepositList data={deposits} />
        )}
      </div>
    </div>
  )
}

export default DepositPage
