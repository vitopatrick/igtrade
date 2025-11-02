'use server'

import { db } from '@/db'
import { deposits, transactions, users } from '@/db/schema'
import { z } from 'zod'
import { depositFormSchema } from '@/lib/schemas'
import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

async function getDeposits(userId: string) {
  try {
    const user = await db.query.users.findFirst({
      where: eq(users.id, userId),
      with: {
        deposits: true,
      },
    })

    return user?.deposits || []
  } catch (error) {
    return error
  }
}

async function makeDeposit(depositData: z.infer<typeof depositFormSchema>) {
  const session = await auth.api.getSession({
    headers: headers(),
  })

  if (!session) {
    throw new Error('Unauthorized')
  }

  try {
    await db.insert(deposits).values({
      amount: +depositData.amount,
      method: depositData.method,
      remarks: depositData.remarks,
      userId: session.user.id,
      status: 'pending',
    })

    await db.insert(transactions).values({
      amount: +depositData.amount,
      type: 'Deposit',
      remarks: depositData.remarks,
      userId: session.user.id,
    })

    revalidatePath('/dashboard/deposit')

    return {
      msg: 'Successfull',
    }
  } catch (error) {
    return error
  }
}

export { getDeposits, makeDeposit }
