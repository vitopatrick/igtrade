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
    await prisma.withdrawal.create({
      data: {
        amount: +details.amount,
        method: details.method,
        clerkId: id,
        status: "pending",
        remarks: details.remarks,
      },
    });

    await prisma.transaction.create({
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

async function getWithdrawals(email: string) {
  try {
    return await prisma.withdrawal.findMany({
      where: {
        user: {
          email,
        },
      },
    });
  } catch (error) {
    return error;
  }
}

export { createWithdrawals, getWithdrawals };
