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
// update user
async function updateUser() {}

// Delete user
async function deleteUser() {}

// Get user
async function getUser(id: string | any) {
  try {
    return await prisma.users.findFirst({
      where: {
        clerkId: id,
      },
      select: {
        deposits: true,
        transactions: true,
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        revenue: true,
        profit: true,
        trading_bonus: true,
        chartData: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export { createUser, updateUser, deleteUser, getUser };
