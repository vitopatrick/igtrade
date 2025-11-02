'use server'

import { updateSchema } from '@/lib/schemas'
import { db } from '@/db'
import { users, chartData, transactions, deposits } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { eq, sql } from 'drizzle-orm'
import { z } from 'zod'

// Get user
async function getUser() {
  const session = await auth.api.getSession({
    headers: headers(),
  })

  if (!session) return null

  try {
    const user = await db.query.users.findFirst({
      where: eq(users.id, session.user.id),
      with: {
        chartData: true,
        transactions: true,
        deposits: true,
      },
    })

    if (user) return user
  } catch (error) {
    return error
  }
}

// Get user by ID
async function getUserWithId(userId: string) {
  try {
    return await db.query.users.findFirst({
      where: eq(users.id, userId),
      with: {
        chartData: true,
        transactions: true,
        deposits: true,
      },
    })
  } catch (error) {
    return error
  }
}

// get All the users
async function getAllUsers() {
  try {
    return await db.select().from(users)
  } catch (error) {
    return error
  }
}

// update user profit
async function updateUserBalance(
  email: string,
  details: z.infer<typeof updateSchema>,
) {
  try {
    await db
      .update(users)
      .set({
        profit: sql`${users.profit} + ${+details.profit}`,
        revenue: sql`${users.revenue} + ${+details.revenue}`,
        trading_bonus: sql`${users.trading_bonus} + ${+details.trading_bonus}`,
      })
      .where(eq(users.email, email))

    revalidatePath('/admin')

    return { message: 'Update done' }
  } catch (error) {
    return error
  }
}

export { getUser, getAllUsers, getUserWithId, updateUserBalance }
