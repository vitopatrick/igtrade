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

export default function DepositList({ data }: any) {
  return (
    <Card className="my-5 shadow-none border-none">
      <CardHeader className="px-7">
        <CardTitle className="text-lg">Deposit</CardTitle>
        <CardDescription>Recent deposit from your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Remarks</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* {data.map((info: any, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="font-medium">{info.remarks}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell uppercase">
                  {info.method}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs capitalize" variant="secondary">
                    {info.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {formatDate(info.createdAt)}
                </TableCell>
                <TableCell className="text-right">${info.amount}</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
