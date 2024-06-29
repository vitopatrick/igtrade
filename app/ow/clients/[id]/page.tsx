import { getUserWithId } from "@/actions/user";
import EditDetails from "@/components/admin/EditDetails";
import TransactionsHistory from "@/components/admin/TransactionHistory";
import BonusCard from "@/components/balance-cards/Bonus";
import DashboardCards from "@/components/balance-cards/DashboardCards";
import TopAssets from "@/components/balance-cards/TopAssets";
import EmptyState from "@/components/empty-state/EmptyState";

export default async function Page({ params }: { params: { id: string } }) {
  const users: any = await getUserWithId(params.id);

  const user = users[0];

  return (
    <div>
      <div className="space-y-1">
        <div className="flex gap-4 items-center">
          <h2 className="font-bold text-2xl">
            {user.first_name} {user.last_name}
          </h2>
          <p className="text-sm text-foreground">
            {user.clerkId.substring(0, 4)}.... {user.clerkId.substring(10, 24)}
          </p>
        </div>
        <h4>{user.email}</h4>
      </div>
      {/* balances */}
      <div className="my-5 space-y-2">
        <EditDetails user={user} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <DashboardCards amount={user.revenue} />
          <TopAssets amount={user.profit} />
          <BonusCard amount={user.trading_bonus} />
        </div>
      </div>
      {/* Trades and transactions */}
      {user.transactions.length < 1 && <EmptyState />}
      {user.transactions.length > 1 && (
        <TransactionsHistory data={user.transactions} />
      )}
    </div>
  );
}
