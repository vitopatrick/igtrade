'use server'

import { profitSchema } from '@/lib/schemas'
import { db } from '@/db'
import { chartData, transactions } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

export const createChartData = async (
  id: string,
  data: z.infer<typeof profitSchema>,
) => {
  try {
    await db.insert(chartData).values({
      profit: +data.profit,
      userId: id,
      date: data.date,
    })

    await db.insert(transactions).values({
      amount: +data.profit,
      type: 'Market Trade',
      userId: id,
      remarks: 'N/A',
    })

    revalidatePath('/admin')

    return {
      message: 'Added Data',
    }
  } catch (error) {
    return error
  }
}
