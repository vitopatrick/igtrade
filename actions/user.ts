"use server";

import { connectDb } from "@/lib/db";
import User from "@/lib/models/User.Model";

export type userData = {
  first_name: string;
  last_name: string;
  email: string;
  clerkId: string | any;
};

// create user
async function createUser(userData: userData) {
  try {
    await connectDb();

    const newUser = new User(userData);

    await newUser.save();

    console.log("Saved");
  } catch (error) {
    return error;
  }
}

// Get user
async function getUser(id: string | any) {
  try {
    await connectDb();

    const user = await User.findOne({ clerkId: id });

    return user;
  } catch (error) {
    return error;
  }
}

export { createUser, getUser };
