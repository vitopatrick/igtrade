'use server'

import { TransactionSchema } from '@/lib/schemas'
import { db } from '@/db'
import { transactions, deposits, withdrawals, users } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { eq } from 'drizzle-orm'

export const getTransactions = async (id: string) => {
  try {
    const user = await db.query.users.findFirst({
      where: eq(users.id, id),
      with: {
        transactions: true,
      },
    })

    return user?.transactions || []
  } catch (error) {
    return error
  }
}

export const getAllTransactions = async () => {
  try {
    return await db.query.transactions.findMany({
      with: {
        user: true,
      },
    })
  } catch (error) {
    return error
  }
}

export const createTransactions = async (
  email: string,
  values: z.infer<typeof TransactionSchema>,
  id: string,
) => {
  try {
    if (values.type === 'deposit') {
      await db.insert(deposits).values({
        amount: +values.amount,
        userId: id,
        method: values.deposit_method,
        remarks: values.remarks,
        status: 'Pending',
      })
    }

    if (values.type === 'withdrawal') {
      await db.insert(withdrawals).values({
        amount: +values.amount,
        userId: id,
        method: values.deposit_method,
        remarks: values.remarks,
        status: 'Pending',
      })
    }

    await db.insert(transactions).values({
      amount: +values.amount,
      remarks: values.remarks,
      type: values.type,
      userId: id,
    })

    revalidatePath('/admin')

    return {
      message: 'Created Transactions',
    }
  } catch (error) {
    return error
  }
}

export const deleteTransaction = async (id: number, type: string) => {
  try {
    if (type === 'deposit') {
      await db.delete(deposits).where(eq(deposits.id, id))
    }

    if (type === 'withdrawal') {
      await db.delete(withdrawals).where(eq(withdrawals.id, id))
    }

    await db.delete(transactions).where(eq(transactions.id, id))

    revalidatePath('/admin')

    return {
      message: 'Deleted',
    }
  } catch (error) {
    return error
  }
}
