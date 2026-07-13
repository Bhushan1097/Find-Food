import {
    FaTimes,
    FaHeart,
    FaClock,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaStar,
} from "react-icons/fa";

import mess1 from "../../../assets/mess1.jpg";

export default function MessDetailsCard({ mess, onClose }) {
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end">

            {/* Right Side Drawer */}
            <div className="relative w-full md:w-[70%] lg:w-[50%] bg-white h-screen overflow-y-auto shadow-2xl">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 left-5 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
                >
                    <FaTimes className="text-lg text-gray-700" />
                </button>

                {/* Hero Section */}
                <div className="relative">
                    <img
                        src={mess.image}
                        alt={mess.title}
                        className="w-full h-64 object-cover"
                    />

                    <div className="absolute bottom-8 left-6 text-white">
                        <div className="flex items-center gap-3">
                            <h1 className="text-5xl font-bold">
                                {mess.title}
                            </h1>

                            <FaHeart className="text-red-500 text-3xl cursor-pointer" />
                        </div>

                        <p className="text-xl mt-2">
                            {mess.category}
                        </p>
                    </div>
                </div>

                {/* Information */}
                <div className="p-8">

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

                        <Card
                            title="Timing"
                            value={mess.lunch}
                            icon={<FaClock />}
                        />

                        <Card
                            title="Distance"
                            value={mess.distance}
                            icon={<FaMapMarkerAlt />}
                        />

                        <Card
                            title="Rating"
                            value={mess.rating}
                            icon={<FaStar />}
                        />

                        <Card
                            title="Veg/Non-Veg"
                            value="Pure Veg"
                        />

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">

                        <Card
                            title="Address"
                            value={mess.address}
                        />

                        <Card
                            title="Contact"
                            value={mess.phone}
                            icon={<FaPhoneAlt />}
                        />

                    </div>

                    <h2 className="text-4xl font-bold mt-10 mb-6">
                        Today's Menu
                    </h2>

                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h3 className="text-3xl font-bold text-center mb-8">
                            Today's Menu
                        </h3>

                        <MealCard />

                        <MealCard evening />

                    </div>

                </div>

            </div>

        </div>
    );
}

function Card({ title, value, icon }) {
    return (
        <div className="bg-[#F7EEEA] rounded-xl p-5">

            <div className="text-[#D86E49] flex items-center gap-2 text-lg font-medium">
                {icon}
                {title}
            </div>

            <div className="font-semibold mt-3 text-gray-700">
                {value}
            </div>

        </div>
    );
}

function MealCard({ evening }) {
    return (
        <div className="flex items-center justify-between bg-[#F9F2EF] rounded-2xl p-6 shadow mb-6">

            <div className="flex items-center gap-6">

                <img
                    src={mess1}
                    alt="Food"
                    className="w-28 h-28 rounded-full object-cover"
                />

                <div>

                    <h3 className="text-2xl font-bold">
                        {evening ? "Evening Meal" : "Morning Meal"}
                    </h3>

                    <div className="flex flex-wrap gap-3 mt-4">

                        <span className="bg-white px-4 py-2 rounded-lg">
                            Chapati
                        </span>

                        <span className="bg-white px-4 py-2 rounded-lg">
                            Dal
                        </span>

                        <span className="bg-white px-4 py-2 rounded-lg">
                            Rice
                        </span>

                        <span className="bg-white px-4 py-2 rounded-lg">
                            Bhendi
                        </span>

                    </div>

                </div>

            </div>

            <div className="text-4xl font-bold text-[#D86E49]">
                ₹60
            </div>

        </div>
    );
}