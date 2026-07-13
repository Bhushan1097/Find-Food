import { useState } from "react";
import {
    FaTimes,
    FaStar,
    FaRegStar,
    FaChevronLeft,
    FaChevronRight,
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
    FaUserCircle,
} from "react-icons/fa";

const reviews = [
    {
        id: 1,
        name: "Subhajit Paul",
        rating: 5,
        review:
            "Food taste good and the packaging is amazing. Home delivery in 30-35 minutes, they will take longer in some cases.",
    },
    {
        id: 2,
        name: "Kajal Agrawal",
        rating: 4,
        review:
            "Great service. Very nice service and food. Mr. Ayan served us very well, thank you.",
    },
    {
        id: 3,
        name: "Rahul Sharma",
        rating: 5,
        review:
            "Authentic home-cooked food. Loved the taste and quality.",
    },
    {
        id: 4,
        name: "Sneha Patil",
        rating: 4,
        review:
            "Very hygienic and affordable. Will order again.",
    },
];

const RatingsDrawer = ({ open, onClose }) => {
    const [userRating, setUserRating] = useState(0);
    const [message, setMessage] = useState("");

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end ${
                    open
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                }`}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 z-50 h-screen
                w-full sm:w-[80%] lg:w-[696px]
                bg-white shadow-2xl
                transform transition-transform duration-300
                overflow-y-auto
                ${
                    open
                        ? "translate-x-0"
                        : "translate-x-full"
                }`}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="sticky top-5 left-5 ml-5 mt-5 z-20
                    w-10 h-10 md:w-12 md:h-12
                    rounded-full bg-[#222]
                    text-white flex items-center justify-center
                    hover:bg-black"
                >
                    <FaTimes />
                </button>

                <div className="px-5 sm:px-8 lg:px-12 pb-10">

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mt-2">
                        Ratings
                    </h1>

                    {/* Summary */}
                    <div className="flex flex-wrap items-center gap-3 mt-8">

                        <span className="text-2xl md:text-3xl font-semibold">
                            4.1
                        </span>

                        <div className="flex text-[#FDB022] text-xl md:text-2xl">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                        </div>

                        <span className="text-green-700 text-lg md:text-xl font-semibold">
                            Excellent
                        </span>

                    </div>

                    <p className="text-gray-500 mt-2 text-sm md:text-lg">
                        based on 397 ratings by customers
                    </p>

                    {/* Reviews */}
                    <div className="mt-8 space-y-5">

                        {reviews.map((item) => (
                            <div
                                key={item.id}
                                className="border rounded-2xl p-5 bg-[#FAFAFA]"
                            >
                                <div className="flex items-center gap-3">

                                    <FaUserCircle
                                        size={40}
                                        className="text-gray-400 shrink-0"
                                    />

                                    <h3 className="font-semibold text-lg md:text-2xl">
                                        {item.name}
                                    </h3>

                                </div>

                                <div className="flex mt-3 text-[#FDB022] text-lg">
                                    {[1, 2, 3, 4, 5].map((star) =>
                                        star <= item.rating ? (
                                            <FaStar key={star} />
                                        ) : (
                                            <FaRegStar key={star} />
                                        )
                                    )}
                                </div>

                                <p className="mt-4 text-gray-600 text-sm md:text-lg leading-7">
                                    {item.review}
                                </p>
                            </div>
                        ))}

                    </div>

                    {/* Pagination */}
                    <div className="flex flex-wrap justify-center gap-2 mt-10">

                        <button className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                            <FaAngleDoubleLeft />
                        </button>

                        <button className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                            <FaChevronLeft />
                        </button>

                        {[1, 2, 3, 4, 5].map((page) => (
                            <button
                                key={page}
                                className={`w-10 h-10 rounded-lg font-medium transition ${
                                    page === 1
                                        ? "bg-[#D9532A] text-white"
                                        : "bg-gray-100 hover:bg-gray-200"
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                            <FaChevronRight />
                        </button>

                        <button className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                            <FaAngleDoubleRight />
                        </button>

                    </div>

                    <hr className="my-10" />

                    {/* Rating */}
                    <h3 className="font-semibold text-2xl md:text-3xl">
                        Your Rating
                    </h3>

                    <div className="flex gap-3 mt-5 text-3xl md:text-4xl">

                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => setUserRating(star)}
                            >
                                {star <= userRating ? (
                                    <FaStar className="text-[#FDB022]" />
                                ) : (
                                    <FaRegStar className="text-gray-300 hover:text-[#FDB022]" />
                                )}
                            </button>
                        ))}

                    </div>

                    {/* Message */}
                    <h3 className="font-semibold text-2xl md:text-3xl mt-10">
                        Your Message
                    </h3>

                    <textarea
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your message..."
                        className="mt-5 w-full border rounded-2xl p-4 md:p-5 text-base md:text-lg outline-none resize-none focus:border-[#D9532A]"
                    />

                    {/* Submit */}
                    <button
                        className="w-full h-14 md:h-16 rounded-2xl
                        bg-[#D9532A]
                        hover:bg-[#bf4622]
                        text-white
                        font-semibold
                        text-lg md:text-2xl
                        mt-8
                        transition"
                    >
                        Send Feedback
                    </button>

                </div>
            </div>
        </>
    );
};

export default RatingsDrawer;