import { getTransactions } from "@/actions/transactions";
import { Badge } from "@/components/ui/badge";
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
import { formatDate } from "@/lib/format";
import { currentUser } from "@clerk/nextjs/server";

export default async function TransactionsList() {
  const auth: any = await currentUser();

  const transactions: any = await getTransactions(auth?.id);

  return (
    <Card className="my-5 shadow-sm border w-full col-span-2">
      <CardHeader className="px-7">
        <CardTitle className="text-2xl">Transactions</CardTitle>
        <CardDescription>
          Recent Transactions from your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Remarks</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction: any, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="font-medium">{transaction.remarks}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {transaction.type}
                </TableCell>

                <TableCell className="hidden md:table-cell">
                  {formatDate(transaction.createdAt)}
                </TableCell>
                <TableCell className="text-right">
                  ${transaction.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
