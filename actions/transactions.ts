import { prisma } from "@/prisma/script";

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
