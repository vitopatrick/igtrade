"use server";

import { prisma } from "@/prisma/script";

export type userData = {
  first_name: string | any;
  last_name: string | any;
  email: string;
  clerkId: string | any;
};

// create user
async function createUser(userData: userData) {
  try {
    await prisma.users.create({
      data: {
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        clerkId: userData.clerkId,
      },
    });

    console.log("Done");
  } catch (error) {
    return error;
  }
}

// Get user
async function getUser(id: string | any) {
  try {
    return await prisma.users.findMany({
      where: {
        clerkId: id,
      },
      include: {
        chartData: true,
        transactions: true,
        deposits: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export { createUser, getUser };
