import { getAllUsers } from "@/actions/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatNumber } from "@/lib/format";
import Link from "next/link";

export default async function UsersTable() {
  const users: any = await getAllUsers();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sign Ups</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {users.map((user: any) => (
          <Link
            href={`/ow/clients/${user.clerkId}`}
            className="flex items-center gap-4"
            key={user.first_name}
          >
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="" alt="Avatar" />
              <AvatarFallback className="uppercase">
                {user.first_name.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">
                {user.first_name} {user.last_name}
              </p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            <div className="ml-auto font-medium">
              {formatNumber(user.revenue)}
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
