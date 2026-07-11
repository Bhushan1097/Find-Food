import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Veg", value: 20 },
  { name: "Non-Veg", value: 80 },
];

const COLORS = ["#6C63FF", "#FF7D7D"];

const FoodPreferenceChart = () => {
  return (
    <div className="w-[20rem] h-[22rem] rounded-2xl border border-gray-300 bg-white shadow-md overflow-hidden">

      {/* Header */}

      <div className="py-3 text-center shadow-[0px_1px_3px_0px_#00000026]">
        <h2 className="text-xl font-semibold">
          Food Preference
        </h2>
      </div>

      <div className="relative h-[18rem]">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={45}
              outerRadius={70}
              stroke="none"
            >
              {data.map((item, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

          </PieChart>
        </ResponsiveContainer>

        {/* Center */}

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold">
            100%
          </span>
        </div>

        {/* Veg */}

        <div className="absolute right-5 top-6 text-right">

          <p className="text-base">
            Veg
          </p>

          <p className="text-xl font-bold text-[#6C63FF]">
            20%
          </p>

          <div className="w-14 h-[2px] bg-[#6C63FF] ml-auto mt-1" />

        </div>

        {/* Non Veg */}

        <div className="absolute left-5 bottom-8">

          <p className="text-base">
            Non-Veg
          </p>

          <p className="text-xl font-bold text-[#FF7D7D]">
            80%
          </p>

          <div className="w-14 h-[2px] bg-[#FF7D7D] mt-1" />

        </div>

      </div>

    </div>
  );
};

export default FoodPreferenceChart;