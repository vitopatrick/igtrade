"use server";

import { profitSchema } from "@/lib/schemas";
import { prisma } from "@/prisma/script";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createChartData = async (
  id: string,
  data: z.infer<typeof profitSchema>
) => {
  try {
    await prisma.chartData.create({
      data: {
        profit: +data.profit,
        clerkId: id,
        date: data.date,
      },
    });

    await prisma.transaction.create({
      data: {
        amount: +data.profit,
        type: "Market Trade",
        clerkId: id,
        remarks: "N/A",
      },
    });

    revalidatePath("/admin");

    return {
      message: "Added Data",
    };
  } catch (error) {
    return error;
  }
};
