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
// import { Button } from "../ui/button";
// import { Trash2Icon } from "lucide-react";
// import { toast } from "sonner";
// import { deleteTransaction } from "@/actions/transactions";

export default function TransactionHistory({ data }: any) {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Transactions</CardTitle>
        <CardDescription>Recent Transactions.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              {/* <TableHead className="text-right">Actions</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((transaction: any) => (
              <TableRow className="bg-accent" key={transaction.id}>
                <TableCell className="hidden sm:table-cell uppercase">
                  {transaction.type}
                </TableCell>

                <TableCell className="hidden md:table-cell">
                  {formatDate(transaction.createdAt)}
                </TableCell>
                <TableCell className="text-right">
                  {" "}
                  {formatNumber(transaction.amount)}
                </TableCell>
                {/* <TableCell className="text-right">
                  <Button variant={"destructive"}>
                    <Trash2Icon strokeWidth={1} />
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
