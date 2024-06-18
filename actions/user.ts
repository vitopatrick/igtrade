"use server";

import { prisma } from "@/prisma/script";

export type userData = {
  first_name: string;
  last_name: string;
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

    return {
      message: "Successful",
    };
  } catch (error) {
    return error;
  }
}

// Get user
async function getUser(id: string | any) {
  try {
    let user = await prisma.users.findUnique({
      where: {
        clerkId: id,
      },
      include: {
        transactions: true,
        chartData: true,
        deposits: true,
      },
    });

    return user;
  } catch (error) {
    return error;
  }
}

export { createUser, getUser };
