import React from "react";
import { AccountSummaryChart } from "../charts/AccountSummaryChart";

const TradingChart = ({ chart }: any) => {
  return (
    <div className="col-span-2 p-4 rounded-xl border shadow-sm">
      <div>
        <h4>Account Summary</h4>
      </div>
      <AccountSummaryChart chart={chart} />
    </div>
  );
};

export default TradingChart;
