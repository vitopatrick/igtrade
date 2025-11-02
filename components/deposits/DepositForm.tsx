'use client'

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
import { depositFormSchema } from '@/lib/schemas'
import { z } from 'zod'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { makeDeposit } from '@/actions/deposit'
import { useEffect, useState } from 'react'
import { addresses } from '@/lib/address'
import { Copy, CheckCircle2, Loader2, Bitcoin, Wallet } from 'lucide-react'
import { toast } from 'sonner'
import { Badge } from '../ui/badge'

const DepositForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copied, setCopied] = useState(false)

  const form = useForm<z.infer<typeof depositFormSchema>>({
    resolver: zodResolver(depositFormSchema),
    defaultValues: {
      amount: '',
      method: '',
      remarks: '',
    },
  })

  const selectAddress = form.watch('method')
  const [selected, setSelected] = useState<any>()

  async function onSubmit(values: z.infer<typeof depositFormSchema>) {
    setIsSubmitting(true)
    try {
      const result = (await makeDeposit(values)) as any
      if (result?.msg) {
        toast.success('Deposit submitted!', {
          description: result.msg,
        })
        form.reset()
        setSelected(undefined)
      }
    } catch (error: any) {
      toast.error('Deposit failed', {
        description: error?.message || 'Failed to submit deposit',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    // watch for change in the coin value
    const subscription = form.watch((value) => {
      const selectedCoin = addresses.find(
        (address) => address.method === value.method,
      )
      setSelected(selectedCoin)
    })

    // return clean up function
    return () => subscription.unsubscribe()
  }, [selected, form.watch('method'), form])

  // copy address
  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    toast.success('Address copied!', {
      description: 'Wallet address copied to clipboard',
    })
    setTimeout(() => setCopied(false), 2000)
  }

  const getCryptoIcon = (method: string) => {
    switch (method) {
      case 'btc':
        return '₿'
      case 'eth':
        return 'Ξ'
      case 'usdt':
      case 'trc20':
        return '₮'
      default:
        return '💰'
    }
  }

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="w-5 h-5" />
          Deposit Form
        </CardTitle>
        <CardDescription>
          Fill in the details below to add funds to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1: Amount */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <h3 className="font-semibold">Enter Amount</h3>
              </div>

              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deposit Amount (USD)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          $
                        </span>
                        <Input
                          placeholder="10000"
                          {...field}
                          className="pl-7 h-11"
                          disabled={isSubmitting}
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Enter the amount you wish to deposit
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Step 2: Method */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <h3 className="font-semibold">Select Payment Method</h3>
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
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="w-full h-11">
                        <SelectValue placeholder="Choose cryptocurrency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="btc">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">₿</span>
                              Bitcoin (BTC)
                            </div>
                          </SelectItem>
                          <SelectItem value="eth">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">Ξ</span>
                              Ethereum (ETH)
                            </div>
                          </SelectItem>
                          <SelectItem value="usdt">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">₮</span>
                              USDT (ERC20)
                            </div>
                          </SelectItem>
                          <SelectItem value="trc20">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">₮</span>
                              USDT (TRC20)
                            </div>
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Wallet Address Display */}
            {selected && (
              <div className="space-y-4 p-4 rounded-lg bg-muted/50 border border-border/50 animate-slide-up">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">
                      {getCryptoIcon(selected.method)}
                    </span>
                    <div>
                      <p className="text-sm font-medium">Wallet Address</p>
                      <Badge variant="secondary" className="mt-1">
                        {selected.method.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-3 bg-background rounded-md border">
                    <code className="flex-1 text-xs break-all font-mono">
                      {selected?.address}
                    </code>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => copyAddress(selected.address)}
                      className="flex-shrink-0"
                    >
                      {copied ? (
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Send your {selected.method.toUpperCase()} to this address
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Remarks */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <h3 className="font-semibold">Add Transaction Details</h3>
              </div>

              <FormField
                control={form.control}
                name="remarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Transaction Remarks (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., First deposit, Monthly investment..."
                        {...field}
                        className="h-11"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormDescription>
                      Add a note to help identify this transaction
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all shadow-lg shadow-primary/25"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Deposit Request'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default DepositForm
