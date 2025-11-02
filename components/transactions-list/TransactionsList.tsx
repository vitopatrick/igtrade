import { getTransactions } from '@/actions/transactions'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import TransactionsTableClient from './TransactionsTableClient'

// Server component to fetch data
export default async function TransactionsList() {
  const session = await auth.api.getSession({
    headers: headers(),
  })

  if (!session) {
    return null
  }

  const transactions: any = await getTransactions(session.user.id)

  return <TransactionsTableClient transactions={transactions || []} />
}
