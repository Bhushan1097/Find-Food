import {
    FaHeart,
    FaStar,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaRegClock,
    FaArrowRight,
} from "react-icons/fa";

const MessCard = ({
    image,
    title,
    rating,
    reviews,
    address,
    distance,
    lunch,
    dinner,
    phone,
    onMenuClick,
}) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">

            {/* Image */}
            <div className="p-4 pb-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-44 object-cover rounded-xl"
                />
            </div>

            <div className="p-4">

                {/* Heading */}
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">
                        {title}
                    </h2>

                    <button>
                        <FaHeart className="text-xl text-gray-400 hover:text-red-500 transition" />
                    </button>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between mt-4">

                    <div className="flex items-center gap-2">

                        <div className="flex text-yellow-400 text-sm">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar className="text-yellow-300" />
                        </div>

                        <div className="bg-gray-100 px-2 py-1 rounded-md text-xs font-semibold">
                            {rating} | {reviews}
                        </div>

                    </div>

                    {/* Veg / Non-Veg */}
                    <div className="flex gap-2">

                        <div className="w-5 h-5 border border-green-600 rounded-sm bg-green-100 flex justify-center items-center">
                            <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        </div>

                        <div className="w-5 h-5 border border-red-600 rounded-sm bg-red-100 flex justify-center items-center">
                            <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        </div>

                    </div>
                </div>

                {/* Address */}
                <p className="text-gray-600 mt-4 text-sm leading-6">
                    {address}
                </p>

                {/* Distance */}
                <div className="flex items-center gap-2 mt-4 text-sm text-gray-700">
                    <FaMapMarkerAlt className="text-gray-500" />
                    <span>{distance}</span>
                </div>

                {/* Lunch */}
                <div className="flex items-center gap-2 mt-3 text-sm text-gray-700">
                    <FaRegClock className="text-gray-500" />
                    <span>{lunch}</span>
                </div>

                {/* Dinner */}
                <div className="flex items-center gap-2 mt-3 text-sm text-gray-700">
                    <FaRegClock className="text-gray-500" />
                    <span>{dinner}</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 mt-3 text-sm text-gray-700">
                    <FaPhoneAlt className="text-gray-500" />
                    <span>{phone}</span>
                </div>

                {/* Button */}
                <div className="flex justify-end mt-6">
                    <button
                        onClick={onMenuClick}
                        className="bg-[#D86E49] hover:bg-[#c95f3b] text-white rounded-lg px-5 py-2.5 flex items-center gap-2 text-sm font-medium transition-all"
                    >
                        <FaArrowRight />
                        Menu
                    </button>
                </div>


            </div>
        </div>
    );
};

export default MessCard;