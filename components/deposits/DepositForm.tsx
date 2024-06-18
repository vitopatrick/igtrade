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
import { depositFormSchema } from "@/lib/schemas";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { makeDeposit } from "@/actions/deposit";
import { useAuth } from "@clerk/nextjs";

const DepositForm = () => {
  const form = useForm<z.infer<typeof depositFormSchema>>({
    resolver: zodResolver(depositFormSchema),
    defaultValues: {
      amount: "",
      method: "",
      remarks: "",
    },
  });

  const auth = useAuth();
  const userId: string | any = auth.userId;

  async function onSubmit(values: z.infer<typeof depositFormSchema>) {
    const returnText = await makeDeposit(values, userId);

    console.log(returnText);
  }

  return (
    <div className="p-4 flex-1">
      <h3 className="my-4 text-xl underline">Fund Account</h3>
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
                    <FormLabel>Deposit Amount</FormLabel>
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

export default DepositForm;
