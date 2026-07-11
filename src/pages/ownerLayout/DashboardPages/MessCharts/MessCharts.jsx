import React from "react";
import CustomerReview from "./Components/CustomerReview";
import FoodPreferenceChart from "./Components/FoodPreferenceChart";
import viewIcon from "../../../../assets/eyeIcon.png";
import CustomerVisitChart from "./Components/CustomerVisitChart";

const MessCharts = () => {
  return (
    <>
      <div>
        <div className="flex w-full gap-4 items-stretch">
          <CustomerReview />
          <FoodPreferenceChart />

          <div className="w-[20rem] h-88 rounded-2xl border border-gray-300 bg-white shadow-md">
            <div className="py-3 text-center shadow-[0px_1px_3px_0px_#00000026]">
              <h2 className="text-xl font-semibold">Total Views</h2>
            </div>
            <div className="flex h-[80%] justify-center items-center gap-5">
              <h1 className="text-5xl">580</h1>
              <img src={viewIcon} alt="" className="w-[20%]" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <CustomerVisitChart />
      </div>
    </>
  );
};

export default MessCharts;
