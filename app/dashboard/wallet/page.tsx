import { getUser } from "@/actions/user";
import BonusCard from "@/components/balance-cards/Bonus";
import DashboardCards from "@/components/balance-cards/DashboardCards";
import TopAssets from "@/components/balance-cards/TopAssets";
import { AccountSummaryChart } from "@/components/charts/AccountSummaryChart";
import { currentUser } from "@clerk/nextjs/server";

;

const WalletPage = async () => {
  const auth = await currentUser();

  const user: any = await getUser(auth?.id);

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
      <div className="mt-[10%] border shadow-md p-4 rounded-xl">
        <h4 className="underline">Account Summary</h4>
        <AccountSummaryChart chart={user.chartData} />
      </div>
    </div>
  );
};

export default WalletPage;
