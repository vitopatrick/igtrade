import EmptyState from "@/components/empty-state/EmptyState";
import { WithdrawalFaq } from "@/components/withdrawals/WithdrawalFaq";
import WithdrawalForm from "@/components/withdrawals/WithdrawalForm";
import WithdrawalsList from "@/components/withdrawals/WithdrawalsList";
import React from "react";

const WithdrawalsPage = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <WithdrawalForm />
        <WithdrawalFaq />
      </div>
      {/* <WithdrawalsList /> */}
      <EmptyState />
    </div>
  );
};

export default WithdrawalsPage;
