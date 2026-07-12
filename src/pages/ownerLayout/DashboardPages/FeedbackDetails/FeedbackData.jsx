import React, { useState } from "react";
import FeedbackCard from "./Components/FeedbackCard ";
import Pagination from "./Components/Pagination";

const feedbacks = Array.from({ length: 18 }, (_, index) => ({
  id: index + 1,
  name: `Customer ${index + 1}`,
  rating: 5,
  title: index % 2 === 0 ? "Food taste good" : "Great at the service",
  review:
    "Very good place. Food is amazing. Very cozy place. Food is delicious and service is excellent.",
}));

const FeedbackData = () => {
  const cardsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * cardsPerPage;
  const indexOfFirst = indexOfLast - cardsPerPage;

  const currentCards = feedbacks.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(feedbacks.length / cardsPerPage);

  return (
    <div className="space-y-6 w-full mt-6 flex flex-col gap-4 p-8 bg-[#FEFBFA] rounded-xl border-[#767676] shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]">
      <h1 className="text-4xl font-semibold">Customer Review</h1>

      <p className="text-sm text-[#767676] mt-2">
        Based on 397 ratings by customers
      </p>

      {/* Cards */}

      <div className="grid grid-cols-3 gap-6 mt-8">
        {currentCards.map((item) => (
          <FeedbackCard key={item.id} feedback={item} />
        ))}
      </div>

      {/* Pagination */}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default FeedbackData;
