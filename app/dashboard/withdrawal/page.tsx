import { getWithdrawals } from "@/actions/withdrawal";
import EmptyState from "@/components/empty-state/EmptyState";
import { WithdrawalFaq } from "@/components/withdrawals/WithdrawalFaq";
import WithdrawalForm from "@/components/withdrawals/WithdrawalForm";
import WithdrawalsList from "@/components/withdrawals/WithdrawalsList";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export const runtime = "edge";

const WithdrawalsPage = async () => {
  const auth: any = await currentUser();

  const withdrawals: any = await getWithdrawals(auth.id);


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
