'use server'

import { db } from '@/db'
import { withdrawals, transactions, users } from '@/db/schema'
import { z } from 'zod'
import { withdrawalSchema } from '@/lib/schemas'
import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

async function createWithdrawals(details: z.infer<typeof withdrawalSchema>) {
  const session = await auth.api.getSession({
    headers: headers(),
  })

  if (!session) {
    throw new Error('Unauthorized')
  }

  try {
    await db.insert(withdrawals).values({
      amount: +details.amount,
      method: details.method,
      userId: session.user.id,
      status: 'pending',
      remarks: details.remarks,
    })

    await db.insert(transactions).values({
      amount: +details.amount,
      type: 'withdrawal',
      userId: session.user.id,
      remarks: details.remarks,
    })

    revalidatePath('/dashboard/withdrawal')

    return {
      message: 'Request Pending',
    }
  } catch (error) {
    return error
  }
}

async function getWithdrawals(userId: string) {
  try {
    const user = await db.query.users.findFirst({
      where: eq(users.id, userId),
      with: {
        withdrawals: true,
      },
    })

    return user?.withdrawals || []
  } catch (error) {
    return error
  }
}

export { createWithdrawals, getWithdrawals }
