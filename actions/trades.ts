'use server'

import { db } from '@/db'
import { trades, users } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'

interface CreateTradeParams {
  userId: string
  asset: string
  amount: number
  totalUsd: number
  tradeType: 'buy' | 'sell'
  currentPrice: number
}

export const createTrade = async ({
  userId,
  asset,
  amount,
  totalUsd,
  tradeType,
  currentPrice,
}: CreateTradeParams) => {
  try {
    // Validate inputs
    if (!userId) {
      return { error: 'User not authenticated' }
    }

    if (!amount || amount <= 0) {
      return { error: 'Invalid amount' }
    }

    if (!totalUsd || totalUsd <= 0) {
      return { error: 'Invalid total' }
    }

    // Get user to check balance for buy orders
    const user = await db.query.users.findFirst({
      where: eq(users.id, userId),
    })

    if (!user) {
      return { error: 'User not found' }
    }

    // For buy orders, check if user has enough balance
    const fee = 2.5
    const totalWithFee = totalUsd + fee

    if (tradeType === 'buy') {
      // Check if user has sufficient balance (revenue)
      if (user.revenue < totalWithFee) {
        return { 
          error: `Insufficient balance. Required: $${totalWithFee.toFixed(2)}, Available: $${user.revenue.toFixed(2)}` 
        }
      }

      // Deduct amount from user's revenue
      await db
        .update(users)
        .set({
          revenue: user.revenue - totalWithFee,
        })
        .where(eq(users.id, userId))
    } else {
      // For sell orders, add amount to user's revenue
      await db
        .update(users)
        .set({
          revenue: user.revenue + (totalUsd - fee),
        })
        .where(eq(users.id, userId))
    }

    // Calculate profit (for now, just placeholder - in real scenario, this would be calculated based on position)
    const profit = 0

    // Create trade record
    await db.insert(trades).values({
      userId,
      commodity: asset,
      amount: tradeType === 'buy' ? amount : -amount, // Negative for sell
      profit,
      date: new Date(),
    })

    revalidatePath('/dashboard/trade')
    revalidatePath('/dashboard')

    return {
      success: true,
      message: `${tradeType === 'buy' ? 'Buy' : 'Sell'} order placed successfully! Total: $${totalWithFee.toFixed(2)}`,
    }
  } catch (error) {
    console.error('Error creating trade:', error)
    return { error: 'Failed to create trade' }
  }
}

export const getUserTrades = async (userId: string) => {
  try {
    if (!userId) {
      return []
    }

    const userTrades = await db.query.trades.findMany({
      where: eq(trades.userId, userId),
      orderBy: (trades, { desc }) => [desc(trades.date)],
    })

    return userTrades
  } catch (error) {
    console.error('Error fetching trades:', error)
    return []
  }
}

export const getAllTrades = async () => {
  try {
    return await db.query.trades.findMany({
      with: {
        user: true,
      },
      orderBy: (trades, { desc }) => [desc(trades.date)],
    })
  } catch (error) {
    console.error('Error fetching all trades:', error)
    return []
  }
}
