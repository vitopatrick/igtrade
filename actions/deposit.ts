"use server";

import { prisma } from "@/prisma/script";
import { z } from "zod";
import { depositFormSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";

async function getDeposits(id: string) {
  try {
    return prisma.deposits.findMany({
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
  await prisma.deposits.create({
    data: {
      amount: +deposits.amount,
      method: deposits.method,
      clerkId: clerkId,
      status: "pending",
      remarks: deposits.remarks,
      prove: "",
    },
  });

  await prisma.transactions.create({
    data: {
      amount: +deposits.amount,
      type: "deposit",
      clerkId: clerkId,
      remarks: deposits.remarks,
    },
  });

  revalidatePath("/dashboard/deposit");

  return {
    message: "Request Pending",
  };
}

export { getDeposits, makeDeposit };
