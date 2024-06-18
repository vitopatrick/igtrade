"use server";

import { prisma } from "@/prisma/script";
import { z } from "zod";
import { withdrawalSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";

async function createWithdrawals(
  details: z.infer<typeof withdrawalSchema>,
  id: string
) {
  try {
    await prisma.withdrawals.create({
      data: {
        amount: +details.amount,
        method: details.method,
        clerkId: id,
        status: "pending",
        remarks: details.remarks,
      },
    });

    await prisma.transactions.create({
      data: {
        amount: +details.amount,
        type: "withdrawal",
        clerkId: id,
        remarks: details.remarks,
      },
    });

    revalidatePath("/dashboard/withdrawal");

    return {
      message: "Request Pending",
    };
  } catch (error) {
    return error;
  }
}

async function getWithdrawals(id: string) {
  try {
    return await prisma.withdrawals.findMany({
      where: {
        clerkId: id,
      },
    });
  } catch (error) {
    return error;
  }
}

export { createWithdrawals, getWithdrawals };
