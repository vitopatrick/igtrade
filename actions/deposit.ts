"use server";

import { prisma } from "@/prisma/script";
import { z } from "zod";
import { depositFormSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";

async function getDeposits(id: string) {
  try {
    return await prisma.deposits.findMany({
      where: {
        user: {
          clerkId: id,
        },
      },
    });
  } catch (error) {
    return error;
  }
}

async function makeDeposit(
  deposits: z.infer<typeof depositFormSchema>,
  clerkId: string
) {
  try {
    await prisma.deposits.create({
      data: {
        amount: +deposits.amount,
        method: deposits.method,
        remarks: deposits.remarks,
        clerkId,
        status: "pending",
      },
    });

    await prisma.transactions.create({
      data: {
        amount: +deposits.amount,
        type: "Deposit",
        remarks: deposits.remarks,
        clerkId,
      },
    });

    return {
      msg: "Successfull",
    };
  } catch (error) {
    return error;
  }
}

export { getDeposits, makeDeposit };
