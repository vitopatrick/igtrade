'use client'

import { useState } from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from '../ui/form'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Badge } from '../ui/badge'
import { withdrawalSchema } from '@/lib/schemas'
import { z } from 'zod'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { createWithdrawals } from '@/actions/withdrawal'
import { toast } from 'sonner'
import { Bitcoin, Wallet, CheckCircle2 } from 'lucide-react'

const WithdrawalForm = () => {
  const [copied, setCopied] = useState(false)

  const form = useForm<z.infer<typeof withdrawalSchema>>({
    resolver: zodResolver(withdrawalSchema),
    defaultValues: {
      amount: '',
      method: '',
      remarks: '',
      address: '',
      payPal: '',
    },
  })

  const method = form.watch('method')
  const methods = ['btc', 'eth']

  async function onSubmit(values: z.infer<typeof withdrawalSchema>) {
    try {
      const result = (await createWithdrawals(values)) as any
      if (result && result.message) {
        toast.success(result.message)
        form.reset()
      }
    } catch (error: any) {
      toast.error(error?.message || 'Failed to submit withdrawal')
    }
  }

  const cryptos = [
    { value: 'btc', label: 'Bitcoin', symbol: 'BTC', color: 'bg-orange-500' },
    { value: 'eth', label: 'Ethereum', symbol: 'ETH', color: 'bg-blue-500' },
  ]

  return (
    <Card className="border-border/50 h-fit">
      <CardHeader>
        <CardTitle>Request Withdrawal</CardTitle>
        <CardDescription>
          Fill in the details to withdraw funds from your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1: Amount */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <h3 className="font-semibold">Withdrawal Amount</h3>
              </div>
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount (USD)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="10000"
                        {...field}
                        className="h-12 text-lg"
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the amount you wish to withdraw
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Step 2: Method */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <h3 className="font-semibold">Withdrawal Method</h3>
              </div>
              <FormField
                control={form.control}
                name="method"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select withdrawal method" />
                      </SelectTrigger>
                      <SelectContent>
                        {cryptos.map((crypto) => (
                          <SelectItem key={crypto.value} value={crypto.value}>
                            <div className="flex items-center gap-2">
                              <Bitcoin className="w-4 h-4" />
                              <span>{crypto.label}</span>
                              <Badge
                                variant="secondary"
                                className={`${crypto.color} text-white`}
                              >
                                {crypto.symbol}
                              </Badge>
                            </div>
                          </SelectItem>
                        ))}
                        <SelectItem value="paypal">
                          <div className="flex items-center gap-2">
                            <Wallet className="w-4 h-4" />
                            <span>PayPal</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Wallet Address for Crypto */}
            {methods.includes(method) && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Wallet Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your wallet address"
                          {...field}
                          className="h-12 font-mono text-sm"
                        />
                      </FormControl>
                      <FormDescription>
                        Funds will be sent to this address
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* PayPal Name */}
            {method === 'paypal' && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="payPal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PayPal Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your@email.com"
                          {...field}
                          className="h-12"
                        />
                      </FormControl>
                      <FormDescription>
                        Enter your PayPal email address
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Step 3: Remarks */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <h3 className="font-semibold">Transaction Details</h3>
              </div>
              <FormField
                control={form.control}
                name="remarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Remarks (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., First withdrawal"
                        {...field}
                        className="h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 text-base bg-gradient-to-r from-primary to-purple-600 hover:opacity-90"
            >
              Request Withdrawal
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default WithdrawalForm
