import { z } from "zod";

export const depositFormSchema = z.object({
  amount: z.string().min(2).max(50),
  method: z.string().min(2).max(50),
  remarks: z.string().min(2).max(50),
});


export const withdrawalSchema = z.object({
  amount: z.string().min(2).max(50),
  method: z.string().min(2).max(50),
  remarks: z.string().min(2).max(50),
  payPal: z.string().min(0).max(50),
  address: z.string().min(0).max(50),
});

export const TransactionSchema = z.object({
  amount: z.string().min(2).max(50),
  type: z.string().min(2).max(50),
  remarks: z.string().min(2).max(50),
  deposit_method: z.string().min(0).max(50),
});

export const updateSchema = z.object({
  profit: z.string().min(0).max(50),
  revenue: z.string().min(0).max(50),
  trading_bonus: z.string().min(0).max(50),
});

export const profitSchema = z.object({
  profit: z.string().min(0).max(50),
  date: z.date(),
});