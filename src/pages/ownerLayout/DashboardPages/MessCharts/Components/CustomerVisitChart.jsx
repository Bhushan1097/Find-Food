import React, { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const monthlyData = [
  { month: "Jan", visits: 6 },
  { month: "Feb", visits: 32 },
  { month: "Mar", visits: 63 },
  { month: "Apr", visits: 80 },
  { month: "May", visits: 17 },
  { month: "Jun", visits: 85 },
  { month: "Jul", visits: 72 },
  { month: "Aug", visits: 68 },
];

const CustomerVisitChart = () => {
  const [active, setActive] = useState("Monthly");

  const chartData = monthlyData.map((item) => ({
    ...item,
    max: 100,
  }));

  return (
    <div className="w-full rounded-2xl border border-gray-300 bg-white shadow-md p-5">

      {/* Header */}

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-3xl font-semibold">
          Customer Visit
        </h2>

        <div className="flex gap-2">

          {["Daily", "Weekly", "Monthly", "Yearly"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-4 py-1 rounded-md text-sm border transition ${
                active === item
                  ? "bg-[#C85A3E] text-white"
                  : "bg-white"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

      </div>

      {/* Chart */}

      <div className="h-[420px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={chartData}
            barGap={-30}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis dataKey="month" />

            <YAxis domain={[0, 100]} />

            {/* Background Bars */}

            <Bar
              dataKey="max"
              fill="#F5E9E5"
              radius={[5, 5, 0, 0]}
              barSize={42}
            />

            {/* Actual Bars */}

            <Bar
              dataKey="visits"
              fill="#C85A3E"
              radius={[5, 5, 0, 0]}
              barSize={42}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default CustomerVisitChart;