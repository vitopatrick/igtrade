"use server";

import { TransactionSchema } from "@/lib/schemas";
import { prisma } from "@/prisma/script";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const getTransactions = async (id: string) => {
  try {
    return await prisma.transactions.findMany({
      where: {
        user: {
          clerkId: id,
        },
      },
    });
  } catch (error) {
    return error;
  }
};

export const getAllTransactions = async () => {
  try {
    return await prisma.transactions.findMany({
      include: {
        user: true,
      },
    });
  } catch (error) {
    return error;
  }
};

export const createTransactions = async (
  email: string,
  values: z.infer<typeof TransactionSchema>,
  id: string
) => {
  try {
    if (values.type === "deposit") {
      await prisma.deposits.create({
        data: {
          amount: +values.amount,
          clerkId: id,
          method: values.deposit_method,
          remarks: values.remarks,
          status: "Pending",
        },
      });
    }

    if (values.type === "withdrawal") {
      await prisma.withdrawals.create({
        data: {
          amount: +values.amount,
          clerkId: id,
          method: values.deposit_method,
          remarks: values.remarks,
          status: "Pending",
        },
      });
    }

    await prisma.transactions.create({
      data: {
        amount: +values.amount,
        remarks: values.remarks,
        type: values.type,
        clerkId: id,
      },
    });

    revalidatePath("/ow");

    return {
      message: "Created Transactions",
    };
  } catch (error) {
    return error;
  }
};
