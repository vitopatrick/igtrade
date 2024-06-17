import TradingChart from "@/components/Chart/TradingChart";
import BonusCard from "@/components/balance-cards/Bonus";
import DashboardCards from "@/components/balance-cards/DashboardCards";
import TopAssets from "@/components/balance-cards/TopAssets";
import { TradeCard } from "@/components/balance-cards/TradeCard";
import TransactionsList from "@/components/transactions-list/TransactionsList";

export default function Dashboard() {
  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="flex flex-col lg:flex-row gap-4 col-span-2">
        <DashboardCards />
        <TopAssets />
        <BonusCard />
      </div>
      {/* chart */}
      <TradingChart />

      {/* transactions list */}
      <TransactionsList />
    </div>
  );
}
