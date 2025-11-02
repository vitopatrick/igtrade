import { StatusBadge } from '@/components/ui/status-badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatDate } from '@/lib/format'

export default function WithdrawalsList({ data }: any) {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle>Withdrawal History</CardTitle>
        <CardDescription>Recent withdrawals from your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Remarks</TableHead>
              <TableHead className="hidden sm:table-cell">Method</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((info: any, index: number) => (
              <TableRow key={index} className="hover:bg-muted/50">
                <TableCell>
                  <div className="font-medium">{info.remarks}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell uppercase">
                  {info.method}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <StatusBadge status={info.status} />
                </TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">
                  {formatDate(info.createdAt)}
                </TableCell>
                <TableCell className="text-right font-semibold">
                  ${info.amount.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
