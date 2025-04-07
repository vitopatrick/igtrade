import { getUser } from "@/actions/user";
import TradingChart from "@/components/Chart/TradingChart";
import BonusCard from "@/components/balance-cards/Bonus";
import DashboardCards from "@/components/balance-cards/DashboardCards";
import TopAssets from "@/components/balance-cards/TopAssets";

const WalletPage = async () => {
  const user: any = await getUser();

  return (
    <div>
      {/* header */}
      <h4 className=" text-xl">Wallet</h4>

      {/* Card sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4 ">
        <DashboardCards amount={user?.revenue} />
        <TopAssets amount={user?.profit} />
        <BonusCard amount={user?.trading_bonus} />
      </div>
      {/* chart */}
      <TradingChart chart={user.chartData} />
    </div>
  );
};

export default WalletPage;
