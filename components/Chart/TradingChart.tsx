import React from "react";
import AccountSummaryChart from "../charts/AccountSummaryChart";
import { formatDate } from "@/lib/format";

const TradingChart = ({ chart }: any) => {
  const newData = chart.map((data: any) => {
    return {
      date: formatDate(data.date),
      profit: data.profit,
    };
  });

  return (
    <div className="col-span-2 p-4 rounded-xl border shadow-sm">
      <div className="lg:mb-[10%] mb-[5%]">
        <h4 className="capitalize font-bold text-xl">Account Summary</h4>
      </div>
      <AccountSummaryChart data={newData} />
    </div>
  );
};

export default TradingChart;
