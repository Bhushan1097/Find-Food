import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const ratingData = [
  { star: 5, value: 90, color: "bg-blue-500" },
  { star: 4, value: 72, color: "bg-green-500" },
  { star: 3, value: 62, color: "bg-yellow-400" },
  { star: 2, value: 35, color: "bg-orange-400" },
  { star: 1, value: 15, color: "bg-red-400" },
];

const CustomerReview = () => {
  return (
    <div className="w-[22rem] h-[22rem] rounded-2xl border border-gray-300 bg-white shadow-md overflow-hidden">

      {/* Header */}
      <div className="py-3 text-center shadow-[0px_1px_3px_0px_#00000026]">
        <h2 className="text-xl font-semibold">
          Customer Review
        </h2>
      </div>

      {/* Rating */}
      <div className="flex items-center justify-center px-4 py-4 shadow-[0px_1px_3px_0px_#00000026]">

        <div className="w-14 border-r text-center">
          <h1 className="text-3xl font-bold">4.5</h1>
        </div>

        <div className="pl-4">

          <div className="flex gap-1 text-yellow-400 text-lg mb-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>

          <p className="text-xs text-gray-500">
            5.2k Ratings 26 Reviews
          </p>

        </div>

      </div>

      {/* Bars */}

      <div className="px-4 py-4 space-y-6">

        {ratingData.map((item) => (
          <div
            key={item.star}
            className="flex items-center gap-3"
          >

            <div className="flex-1 bg-gray-200 rounded-full h-2.5">

              <div
                className={`${item.color} h-2.5 rounded-full`}
                style={{ width: `${item.value}%` }}
              />

            </div>

            <div className="flex items-center gap-1 w-10">
              <span className="text-xs">{item.star}</span>
              <FaStar className="text-yellow-400 text-xs" />
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default CustomerReview;