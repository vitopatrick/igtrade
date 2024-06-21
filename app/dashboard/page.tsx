import { getUser } from "@/actions/user";
import TradingChart from "@/components/Chart/TradingChart";
import BonusCard from "@/components/balance-cards/Bonus";
import DashboardCards from "@/components/balance-cards/DashboardCards";
import TopAssets from "@/components/balance-cards/TopAssets";
import EmptyState from "@/components/empty-state/EmptyState";
import TransactionsList from "@/components/transactions-list/TransactionsList";
import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const auth = await currentUser();

  const user: any = await getUser(auth?.id);

  console.log(user);

  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <h4 className="uppercase">
          Hello <span className="font-bold">{auth?.fullName}</span>
        </h4>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 col-span-2">
        <DashboardCards amount={user?.revenue} />
        <TopAssets amount={user?.profit} />
        <BonusCard amount={user?.trading_bonus} />
      </div>

      {/* chart */}
      <TradingChart chart={user?.chartData} />

      {/* transactions list */}
      {user.transactions?.length < 1 ? <EmptyState /> : <TransactionsList />}
    </div>
  );
}
