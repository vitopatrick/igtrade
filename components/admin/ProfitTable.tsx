import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function ProfitTable({ data }: any) {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Profit Table</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden sm:table-cell">Amount</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              {/* <TableHead className="text-right">Actions</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((transaction: any) => (
              <TableRow className="bg-accent" key={transaction.id}>
                <TableCell>{formatNumber(transaction.profit)}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {formatDate(transaction.createdAt)}
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
