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
    headers: await headers(),
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

async function createDepositAdmin(userId: string, data: any) {

  try {
    await db.insert(deposits).values({
      amount: +data.amount,
      method: data.method,
      remarks: data.remarks || 'Admin Deposit',
      userId: userId,
      status: data.status || 'approved',
    })

    // Also add to global transactions if approved or pending? The existing makeDeposit does this.
    await db.insert(transactions).values({
      amount: +data.amount,
      type: 'Deposit',
      remarks: data.remarks || 'Admin Deposit',
      userId: userId,
    })

    revalidatePath('/admin/clients')
    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
}

async function updateDepositAdmin(depositId: number, data: any) {

  try {
    await db.update(deposits).set(data).where(eq(deposits.id, depositId))
    revalidatePath('/admin/clients')
    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
}

async function deleteDepositAdmin(depositId: number) {

  try {
    await db.delete(deposits).where(eq(deposits.id, depositId))
    revalidatePath('/admin/clients')
    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
}

export {
  getDeposits,
  makeDeposit,
  createDepositAdmin,
  updateDepositAdmin,
  deleteDepositAdmin,
}
