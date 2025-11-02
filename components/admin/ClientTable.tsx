import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatDate, formatNumber } from '@/lib/format'
import Link from 'next/link'

const ClientTable = ({ users }: any) => {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead className="hidden sm:table-cell">Signed Up</TableHead>
              <TableHead className="hidden sm:table-cell">Revenue</TableHead>
              <TableHead className="hidden md:table-cell">Profit</TableHead>
              <TableHead className="text-right">Trading Bonus</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: any) => (
              <TableRow className="bg-accent" key={user.id}>
                <TableCell>
                  <Link href={`/admin/clients/${user.id}`}>
                    <div className="font-medium">
                      {user.first_name} {user.last_name}
                    </div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      {user.email}
                    </div>
                  </Link>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {formatDate(user.createdAt)}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <div>{formatNumber(user.revenue)}</div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div>{formatNumber(user.profit)}</div>
                </TableCell>
                <TableCell className="text-right">
                  <div>{formatNumber(user.trading_bonus)}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default ClientTable
