import { getWithdrawals } from "@/actions/withdrawal";
import EmptyState from "@/components/empty-state/EmptyState";
import { WithdrawalFaq } from "@/components/withdrawals/WithdrawalFaq";
import WithdrawalForm from "@/components/withdrawals/WithdrawalForm";
import WithdrawalsList from "@/components/withdrawals/WithdrawalsList";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

;

const WithdrawalsPage = async () => {
  const auth = await currentUser();
  let email: any = auth?.emailAddresses[0].emailAddress;

  const withdrawals: any = await getWithdrawals(email);


  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 items-center w-full">
        <WithdrawalForm />
        <WithdrawalFaq />
      </div>
      {withdrawals.length < 1 ? (
        <EmptyState />
      ) : (
        <WithdrawalsList data={withdrawals} />
      )}
    </div>
  );
};

export default WithdrawalsPage;
