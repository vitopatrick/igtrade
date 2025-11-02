import { getWithdrawals } from '@/actions/withdrawal'
import EmptyState from '@/components/empty-state/EmptyState'
import { WithdrawalFaq } from '@/components/withdrawals/WithdrawalFaq'
import WithdrawalForm from '@/components/withdrawals/WithdrawalForm'
import WithdrawalsList from '@/components/withdrawals/WithdrawalsList'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { ArrowUpCircle } from 'lucide-react'

const WithdrawalsPage = async () => {
  const session = await auth.api.getSession({
    headers: headers(),
  })

  if (!session) {
    return <div>Please sign in</div>
  }

  const withdrawals: any = await getWithdrawals(session.user.id)

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <ArrowUpCircle className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Withdrawals</h1>
          <p className="text-muted-foreground">
            Request a withdrawal from your trading account
          </p>
        </div>
      </div>

      {/* Form and FAQ Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        <WithdrawalForm />
        <WithdrawalFaq />
      </div>

      {/* Withdrawal History */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Withdrawal History</h2>
        {withdrawals.length < 1 ? (
          <EmptyState
            icon="inbox"
            title="No withdrawals yet"
            description="Your withdrawal history will appear here after you make a withdrawal request"
          />
        ) : (
          <WithdrawalsList data={withdrawals} />
        )}
      </div>
    </div>
  )
}

export default WithdrawalsPage
