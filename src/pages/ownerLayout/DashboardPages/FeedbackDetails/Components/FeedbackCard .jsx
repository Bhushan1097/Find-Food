import React from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="w-full rounded-xl border border-[#D9D9D9] bg-white p-4 shadow-[0px_1px_3px_0px_#00000026]">

      <div className="flex items-center gap-3">

        <FaUserCircle className="text-4xl text-gray-400" />

        <h3 className="font-semibold text-lg">
          {feedback.name}
        </h3>

      </div>

      <div className="flex gap-1 mt-3 text-yellow-400">

        {Array.from({ length: feedback.rating }).map((_, i) => (
          <FaStar key={i} />
        ))}

      </div>

      <h3 className="font-semibold mt-3">
        {feedback.title}
      </h3>

      <p className="text-sm text-[#6E6E6E] mt-2">
        {feedback.review}
      </p>

    </div>
  );
};

export default FeedbackCard;