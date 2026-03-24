'use server'

import { db } from '@/db'
import { withdrawals, transactions, users } from '@/db/schema'
import { z } from 'zod'
import { withdrawalSchema } from '@/lib/schemas'
import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { sendWithdrawalEmail } from '@/lib/email'

async function createWithdrawals(details: z.infer<typeof withdrawalSchema>) {
  const session = await auth.api.getSession({
    headers: await headers(),
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

    // Fire and forget email specifically to the user withdrawing
    sendWithdrawalEmail(
      session.user.email, 
      session.user.name || 'Trader', 
      details.amount
    ).catch(console.error)

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

async function createWithdrawalAdmin(userId: string, data: any) {

  try {
    await db.insert(withdrawals).values({
      amount: +data.amount,
      method: data.method,
      remarks: data.remarks || 'Admin Withdrawal',
      userId: userId,
      status: data.status || 'approved',
    })

    await db.insert(transactions).values({
      amount: +data.amount,
      type: 'withdrawal',
      remarks: data.remarks || 'Admin Withdrawal',
      userId: userId,
    })

    revalidatePath('/admin/clients')
    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
}

async function updateWithdrawalAdmin(withdrawalId: number, data: any) {

  try {
    await db.update(withdrawals).set(data).where(eq(withdrawals.id, withdrawalId))
    revalidatePath('/admin/clients')
    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
}

async function deleteWithdrawalAdmin(withdrawalId: number) {

  try {
    await db.delete(withdrawals).where(eq(withdrawals.id, withdrawalId))
    revalidatePath('/admin/clients')
    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
}

export {
  createWithdrawals,
  getWithdrawals,
  createWithdrawalAdmin,
  updateWithdrawalAdmin,
  deleteWithdrawalAdmin,
}
