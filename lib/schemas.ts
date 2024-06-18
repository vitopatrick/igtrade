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
