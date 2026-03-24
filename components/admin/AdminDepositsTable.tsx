"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate, formatNumber } from "@/lib/format";
import { Button } from "../ui/button";
import { CheckIcon, XIcon, Trash2Icon } from "lucide-react";
import { toast } from "sonner";
import { updateDepositAdmin, deleteDepositAdmin } from "@/actions/deposit";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export default function AdminDepositsTable({ data }: { data: any[] }) {
  const router = useRouter();

  const handleUpdate = async (id: number, status: string) => {
    const res = await updateDepositAdmin(id, { status })
    // @ts-ignore
    if (res?.success) {
      toast.success(`Deposit updated to ${status}`);
      router.refresh();
    }
    else toast.error("Update failed")
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this deposit?")) return;
    const res = await deleteDepositAdmin(id)
    // @ts-ignore
    if (res?.success) {
      toast.success("Deposit deleted");
      router.refresh();
    }
    else toast.error("Delete failed")
  }

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Deposits</CardTitle>
        <CardDescription>Client deposit requests and records.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Remarks</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((deposit: any) => (
              <TableRow className="bg-accent/50 hover:bg-accent" key={deposit.id}>
                <TableCell>{formatDate(deposit.createdAt)}</TableCell>
                <TableCell className="uppercase">{deposit.method}</TableCell>
                <TableCell>{deposit.remarks}</TableCell>
                <TableCell className="capitalize">
                  <Badge variant={deposit.status === 'approved' ? 'default' : deposit.status === 'rejected' ? 'destructive' : 'secondary'}>
                    {deposit.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{formatNumber(deposit.amount)}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    title="Approve"
                    className="text-green-600 hover:text-green-700"
                    onClick={() => handleUpdate(deposit.id, "approved")}
                  >
                    <CheckIcon size={16} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    title="Reject"
                    className="text-orange-600 hover:text-orange-700"
                    onClick={() => handleUpdate(deposit.id, "rejected")}
                  >
                    <XIcon size={16} />
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="icon" 
                    title="Delete"
                    onClick={() => handleDelete(deposit.id)}
                  >
                    <Trash2Icon size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {data.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground h-24">
                  No deposits found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
