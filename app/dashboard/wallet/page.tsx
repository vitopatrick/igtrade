import BalanceCards from "@/components/balance-cards/Cards";
import { AccountSummaryChart } from "@/components/charts/AccountSummaryChart";
import { currentUser } from "@clerk/nextjs/server";

const WalletPage = async () => {
  const signedInUser = await currentUser();

  return (
    <div>
      {/* header */}
      <h4 className=" text-xl">Wallet</h4>

      {/* Card sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4">
        <BalanceCards />
        <BalanceCards />
        <BalanceCards />
      </div>
      {/* chart */}
      <div className="mt-[10%]">
        <AccountSummaryChart />
      </div>
    </div>
  );
};

export default WalletPage;
