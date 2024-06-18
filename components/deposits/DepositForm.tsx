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
import { useEffect, useState } from "react";
import { addresses } from "@/lib/address";
import { CopyIcon } from "lucide-react";

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

  const selectAddress = form.watch("method");
  const [selected, setSelected] = useState<any>();

  async function onSubmit(values: z.infer<typeof depositFormSchema>) {
    const returnText = await makeDeposit(values, userId);

    console.log(returnText);
  }

  useEffect(() => {
    // watch for change in the coin value
    const subscription = form.watch((value) => {
      const selectedCoin = addresses.find(
        (address) => address.method === value.method
      );
      setSelected(selectedCoin);
    });

    // return clean up function
    return () => subscription.unsubscribe();
  }, [selected, form.watch("method")]);

  // copy address
  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  };

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
                          <SelectItem value="usdt">USDT</SelectItem>
                          <SelectItem value="trc20">USDT TRC20</SelectItem>
                          {/* <SelectItem value="paypal">Paypal</SelectItem> */}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {selected && (
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm my-2">Wallet Address</p>
                  <p className="font-mono">{selected?.address}</p>
                </div>

                <CopyIcon onClick={() => copyAddress(selected.address)} />
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

export default DepositForm;
