import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { getAllTransactions } from "@/actions/transactions";
import { formatDate, formatNumber } from "@/lib/format";

export default async function TransactionsTable() {
  const transactions: any = await getAllTransactions();

  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Transactions</CardTitle>
          <CardDescription>Recent transactions.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {transactions.length < 1 && <div>No Transactions</div>}
        {transactions.length > 1 && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Remarks</TableHead>
                <TableHead className="hidden xl:table-column">Type</TableHead>
                <TableHead className="hidden xl:table-column">Status</TableHead>
                <TableHead className="hidden xl:table-column">Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction: any) => (
                <TableRow key={transaction.first_name}>
                  <TableCell>
                    <div className="font-medium">
                      {transaction.user.first_name} {transaction.user.last_name}
                    </div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      {transaction.email}
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    {transaction.type}
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs" variant="outline">
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    {formatDate(transaction.createdAt)}
                  </TableCell>
                  <TableCell className="text-right">
                    {formatNumber(transaction.amount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
