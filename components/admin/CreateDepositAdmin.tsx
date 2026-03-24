'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { toast } from 'sonner'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from '../ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { createDepositAdmin } from '@/actions/deposit'
import { useState } from 'react'
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

import { useRouter } from 'next/navigation'

const FormSchema = z.object({
  amount: z.string().min(1, 'Amount is required'),
  method: z.string().min(1, 'Deposit method is required'),
  status: z.string().min(1, 'Status is required'),
  remarks: z.string().min(1, 'Remarks are required'),
})

const CreateDepositAdmin = ({ user, asDropdownItem = false }: { user: any, asDropdownItem?: boolean }) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      amount: '',
      method: '',
      status: 'approved',
      remarks: 'Admin Deposit',
    },
  })

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const res = await createDepositAdmin(user.id, values)
    if (res.success) {
      toast.success('Deposit created successfully')
      setOpen(false)
      form.reset()
      router.refresh()
    } else {
      toast.error('Failed to create deposit')
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {asDropdownItem ? (
          <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="cursor-pointer">
            Create Deposit
          </DropdownMenuItem>
        ) : (
          <Button variant="outline" className="border-2 border-green-600 text-green-600">
            Create Deposit
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Deposit</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="$10000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="method"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Method</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="btc">BTC</SelectItem>
                        <SelectItem value="usdt_trc20">USDT TRC20</SelectItem>
                        <SelectItem value="usdt_erc20">USDT ERC20</SelectItem>
                        <SelectItem value="bank transfer">Bank Transfer</SelectItem>
                        <SelectItem value="Paypal">PayPal</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="remarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Remarks</FormLabel>
                  <FormControl>
                    <Input placeholder="Admin Deposit..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateDepositAdmin
