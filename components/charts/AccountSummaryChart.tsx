"use client";

import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const AccountSummaryChart = ({ data }: any) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis tickLine={false} />
        <Tooltip />
        <Bar dataKey="profit" fill="#1d4ed8" barSize={50} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AccountSummaryChart;
