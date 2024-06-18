import BonusCard from "@/components/balance-cards/Bonus";
import DashboardCards from "@/components/balance-cards/DashboardCards";
import TopAssets from "@/components/balance-cards/TopAssets";
import { AccountSummaryChart } from "@/components/charts/AccountSummaryChart";

const WalletPage = async () => {
  return (
    <div>
      {/* header */}
      <h4 className=" text-xl">Wallet</h4>

      {/* Card sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4">
        <DashboardCards />
        <TopAssets />
        <BonusCard />
      </div>
      {/* chart */}
      <div className="mt-[10%]">
        <AccountSummaryChart />
      </div>
    </div>
  );
};

export default WalletPage;
