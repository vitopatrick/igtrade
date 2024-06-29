"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { updateUserBalance } from "@/actions/user";
import { updateSchema } from "@/lib/schemas";

const EditDetails = ({ user }: any) => {
  const form = useForm<z.infer<typeof updateSchema>>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      profit: "",
      revenue: "",
      trading_bonus: "",
    },
  });

  async function onSubmit(values: z.infer<typeof updateSchema>) {
    const returnText: any = await updateUserBalance(user.email, values);

    toast.success(returnText.message, {
      description: "Updated User Balance",
    });
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Edit Balance</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit User Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Revenue */}
              <div>
                <FormField
                  control={form.control}
                  name="revenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Revenue</FormLabel>
                      <FormControl>
                        <Input placeholder="$10000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Profit */}
              <div>
                <FormField
                  control={form.control}
                  name="profit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profit</FormLabel>
                      <FormControl>
                        <Input placeholder="$10000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Deposit trading bonus */}
              <div>
                <FormField
                  control={form.control}
                  name="trading_bonus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Trading Bonus</FormLabel>
                      <FormControl>
                        <Input placeholder="$10000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full block">
                Update
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditDetails;
