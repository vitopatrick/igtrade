import { prisma } from "@/prisma/script";

export const getTransactions = async (id: string) => {
  try {
    return prisma.transactions.findMany({
      where: {
        clerkId: id,
      },
    });
  } catch (error) {
    return error;
  }
};
