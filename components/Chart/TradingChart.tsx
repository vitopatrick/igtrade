import React from "react";
import { AccountSummaryChart } from "../charts/AccountSummaryChart";

const TradingChart = () => {
  return (
    <div className="col-span-2 p-4 rounded-xl border shadow-sm">
      <div>
        <h4>Account Summary</h4>
      </div>
      <AccountSummaryChart />
    </div>
  );
};

export default TradingChart;
