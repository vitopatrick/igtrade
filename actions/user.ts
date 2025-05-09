"use server";

import { updateSchema } from "@/lib/schemas";
import { prisma } from "@/prisma/script";
import { revalidatePath } from "next/cache";
import { currentUser } from "@clerk/nextjs/server";

import { z } from "zod";

// Get user
async function getUser() {
  const session = await currentUser();

  const userId = session?.id as string;

  try {
    const user = await prisma.user.findFirst({
      where: {
        clerkId: userId,
        email: session?.emailAddresses[0].emailAddress,
      },
      include: {
        chartData: true,
        transactions: true,
        deposits: true,
      },
    });

    if (user) return user;
  } catch (error) {
    return error;
  }
}

// Get user
async function getUserWithId(clerkId: string | any) {
  try {
    return await prisma.user.findFirst({
      where: {
        clerkId,
      },
      include: {
        chartData: true,
        transactions: true,
        deposits: true,
      },
    });
  } catch (error) {
    return error;
  }
}

// get All the users
async function getAllUsers() {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    return error;
  }
}

// update user profit
async function updateUserBalance(
  email: string,
  details: z.infer<typeof updateSchema>
) {
  try {
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        profit: {
          increment: +details.profit,
        },
        revenue: {
          increment: +details.revenue,
        },
        trading_bonus: {
          increment: +details.trading_bonus,
        },
      },
    });

    revalidatePath("/admin");

    return { message: "Update done" };
  } catch (error) {
    return error;
  }
}

export { getUser, getAllUsers, getUserWithId, updateUserBalance };
