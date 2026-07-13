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
                className={`fixed top-0 right-0 z-50 w-[696px] h-screen bg-white rounded-l-2xl shadow-2xl overflow-y-auto transform transition-transform duration-300 ${
                    open
                        ? "translate-x-0"
                        : "translate-x-full"
                }`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 left-5 w-10 h-10 rounded-full bg-[#222] text-white flex items-center justify-center hover:bg-black"
                >
                    <FaTimes />
                </button>

                <div className="px-14 py-14">

                    {/* Heading */}
                    <h1 className="text-5xl font-semibold text-gray-900">
                        Ratings
                    </h1>

                    {/* Rating Summary */}
                    <div className="flex items-center gap-3 mt-8">

                        <span className="text-3xl font-medium">
                            4.1
                        </span>

                        <div className="flex text-[#FDB022] text-2xl">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                        </div>

                        <span className="text-green-700 text-2xl font-semibold">
                            Excellent
                        </span>

                    </div>

                    <p className="text-gray-500 text-xl mt-2">
                        based on 397 ratings by customers
                    </p>

                    {/* Reviews */}
                    <div className="mt-10 space-y-6">

                        {reviews.map((item) => (
                            <div
                                key={item.id}
                                className="border rounded-2xl p-6 bg-[#FAFAFA]"
                            >
                                <div className="flex items-center gap-3">

                                    <FaUserCircle
                                        size={36}
                                        className="text-gray-400"
                                    />

                                    <h3 className="font-semibold text-2xl">
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

                                <p className="mt-4 text-gray-600 text-lg leading-8">
                                    {item.review}
                                </p>

                            </div>
                        ))}

                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-3 mt-10">

                        <button className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                            <FaAngleDoubleLeft />
                        </button>

                        <button className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                            <FaChevronLeft />
                        </button>

                        {[1, 2, 3, 4, 5].map((page) => (
                            <button
                                key={page}
                                className={`w-12 h-12 rounded-xl font-medium transition ${
                                    page === 1
                                        ? "bg-[#D9532A] text-white"
                                        : "bg-gray-100 hover:bg-gray-200"
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                            <FaChevronRight />
                        </button>

                        <button className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                            <FaAngleDoubleRight />
                        </button>

                    </div>

                    <hr className="my-10" />

                    {/* User Rating */}
                    <h3 className="font-semibold text-3xl">
                        Your Rating
                    </h3>

                    <div className="flex gap-4 mt-5 text-4xl">

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
                    <h3 className="font-semibold text-3xl mt-12">
                        Your Message
                    </h3>

                    <textarea
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your message..."
                        className="mt-5 w-full border rounded-2xl p-5 text-lg outline-none resize-none focus:border-[#D9532A]"
                    />

                    {/* Submit Button */}
                    <button
                        className="w-full h-[64px] rounded-2xl bg-[#D9532A] hover:bg-[#bf4622] text-white font-semibold text-2xl mt-10 transition"
                    >
                        Send Feedback
                    </button>

                </div>
            </div>
        </>
    );
};

export default RatingsDrawer;