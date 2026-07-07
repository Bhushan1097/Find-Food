import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ratings = ["Any", "3.5+", "4.5+", "5.0"];
const foodTypes = ["Veg Only", "Non-veg"];

const FilterModal = ({ open, onClose }) => {
    const [selectedRating, setSelectedRating] = useState("Any");
    const [selectedFood, setSelectedFood] = useState("");

    if (!open) return null;

    const resetFilters = () => {
        setSelectedRating("Any");
        setSelectedFood("");
    };

    const applyFilters = () => {
        console.log({
            rating: selectedRating,
            food: selectedFood,
        });

        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center px-4"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-[480px] rounded-md shadow-2xl p-8 animate-[fadeIn_.25s_ease]"
            >
                {/* Close Button */}

                <div className="flex justify-start">
                    <button
                        onClick={onClose}
                        className="w-12 h-12 rounded-full bg-[#222] text-white flex items-center justify-center text-xl hover:bg-black transition"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Rating */}

                <h2 className="text-3xl font-semibold mt-6">
                    Ratings
                </h2>

                <hr className="my-5" />

                <div className="flex gap-4 flex-wrap">

                    {ratings.map((item) => (
                        <button
                            key={item}
                            onClick={() => setSelectedRating(item)}
                            className={`h-14 px-8 rounded-xl border-2 font-medium text-lg transition
                ${selectedRating === item
                                    ? "bg-[#222] text-white border-[#222]"
                                    : "bg-white border-gray-700 text-gray-800 hover:bg-gray-100"
                                }`}
                        >
                            {item}
                        </button>
                    ))}

                </div>

                {/* Food Type */}

                <h2 className="text-3xl font-semibold mt-10">
                    Food Type
                </h2>

                <hr className="my-5" />

                <div className="flex gap-4">

                    {foodTypes.map((item) => (
                        <button
                            key={item}
                            onClick={() => setSelectedFood(item)}
                            className={`h-14 px-8 rounded-xl border-2 font-medium text-lg transition
                ${selectedFood === item
                                    ? "bg-[#222] text-white border-[#222]"
                                    : "bg-white border-gray-700 text-gray-800 hover:bg-gray-100"
                                }`}
                        >
                            {item}
                        </button>
                    ))}

                </div>

                {/* Buttons */}

                <div className="grid grid-cols-2 gap-4 mt-16">

                    <button
                        onClick={resetFilters}
                        className="h-14 border-2 border-gray-700 rounded-xl text-lg font-semibold hover:bg-gray-100 transition"
                    >
                        Reset Filter
                    </button>

                    <button
                        onClick={applyFilters}
                        className="h-14 border-2 border-gray-700 rounded-xl text-lg font-semibold hover:bg-gray-100 transition"
                    >
                        Apply Filter
                    </button>

                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from {
            transform: scale(.95);
            opacity:0;
          }
          to{
            transform:scale(1);
            opacity:1;
          }
        }
      `}</style>
        </div>
    );
};

export default FilterModal;