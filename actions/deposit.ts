"use server";

import { prisma } from "@/prisma/script";
import { z } from "zod";
import { depositFormSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";

async function getDeposits(id: string) {
}

async function makeDeposit(
  deposits: z.infer<typeof depositFormSchema>,
  clerkId: string
) {}

export { getDeposits, makeDeposit };
