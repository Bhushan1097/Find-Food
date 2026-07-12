import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">

      <button
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
        className="w-8 h-8 border rounded"
      >
        <FaChevronLeft className="mx-auto text-xs" />
      </button>

      {Array.from(
        { length: totalPages },
        (_, index) => (
          <button
            key={index}
            onClick={() =>
              setCurrentPage(index + 1)
            }
            className={`w-8 h-8 rounded text-sm ${
              currentPage === index + 1
                ? "bg-[#C85A3E] text-white"
                : "border"
            }`}
          >
            {index + 1}
          </button>
        )
      )}

      <button
        disabled={currentPage === totalPages}
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
        className="w-8 h-8 border rounded"
      >
        <FaChevronRight className="mx-auto text-xs" />
      </button>

    </div>
  );
};

export default Pagination;