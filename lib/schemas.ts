import { z } from "zod";

export const depositFormSchema = z.object({
  amount: z.string().min(2).max(50),
  method: z.string().min(2).max(50),
  remarks: z.string().min(2).max(50),
});
