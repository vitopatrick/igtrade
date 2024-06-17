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
async function getUser(email: string | any) {
  try {
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
      select: {
        email: true,
        avaliable_balance: true,
        balance: true,
        profit: true,
        clerkId: true,
      },
    });

    return user;
  } catch (error) {
    return error;
  }
}

export { createUser, updateUser, deleteUser, getUser };
