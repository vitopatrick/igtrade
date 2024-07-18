"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { withdrawalSchema } from "@/lib/schemas";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { createWithdrawals } from "@/actions/withdrawal";
import { useAuth } from "@clerk/nextjs";

const WithdrawalForm = () => {
  const auth: any = useAuth();

  // account, routing number, bank name,benifi name

  const form = useForm<z.infer<typeof withdrawalSchema>>({
    resolver: zodResolver(withdrawalSchema),
    defaultValues: {
      amount: "",
      method: "",
      remarks: "",
      address: "",
      payPal: "",
    },
  });

  const method = form.watch("method");

  const methods = ["btc", "eth"];

  async function onSubmit(values: z.infer<typeof withdrawalSchema>) {
    await createWithdrawals(values, auth.userId);
  }

  return (
    <div className="p-4 lg:flex-1 w-full">
      <h3 className="my-4 text-xl underline">Withdrawal Form</h3>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Deposit Amount */}
            <div>
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Withdrawal Amount</FormLabel>
                    <FormControl>
                      <Input placeholder="$10000" {...field} />
                    </FormControl>
                    <FormDescription>
                      please enter amount you'd wish to deposit
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Deposit Method */}
            <div>
              <FormField
                control={form.control}
                name="method"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Deposit Method</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="btc">Bitcoin</SelectItem>
                          <SelectItem value="eth">Ethereum</SelectItem>

                          <SelectItem value="paypal">Paypal</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Wallet Address */}
            {methods.includes(method) && (
              <div>
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Wallet Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Wallet Address..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {/* Paypal Name */}
            {method == "paypal" && (
              <div>
                <FormField
                  control={form.control}
                  name="payPal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PayPal Name</FormLabel>
                      <FormControl>
                        <Input placeholder="PayPal Name..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Deposit Remarks */}
            <div>
              <FormField
                control={form.control}
                name="remarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Transaction Remarks</FormLabel>
                    <FormControl>
                      <Input placeholder="First Deposit..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full block">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default WithdrawalForm;
