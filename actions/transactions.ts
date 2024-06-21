import User from "@/lib/models/User.Model";

export const getTransactions = async (id: string) => {
  try {
    const transactions = await User.find({ clerkId: id });

    return transactions;
  } catch (error) {
    return error;
  }
};
