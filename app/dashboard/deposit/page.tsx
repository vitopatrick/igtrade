import { getDeposits } from "@/actions/deposit";
import { DepositFaq } from "@/components/deposits/DepositFaq";
import DepositForm from "@/components/deposits/DepositForm";
import DepositList from "@/components/deposits/DepositList";
import EmptyState from "@/components/empty-state/EmptyState";
import { currentUser } from "@clerk/nextjs/server";

const DepositPage = async () => {
  const auth: any = await currentUser();
  const id = auth.id;


  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4">
        <DepositForm />
        <DepositFaq />
      </div>
      {/* {deposits?.length < 1 ? <EmptyState /> : <DepositList data={deposits} />} */}
    </div>
  );
};

export default DepositPage;
