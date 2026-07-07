import { useState } from "react";
import MessCard from "./MessCard";
import MessDetailsModal from "./MessDetailsModal";

import mess1 from "../../../assets/mess1.jpg";
import mess2 from "../../../assets/mess2.jpg";
import mess3 from "../../../assets/mess3.jpg";
import mess4 from "../../../assets/mess4.jpg";

const messes = [
    {
        image: mess1,
        title: "Kolhapur Khanaval",
        category: "Authentic Punjabi Cuisine",
        rating: 4.1,
        reviews: 397,
        address: "925, Main Road, Bazar lane, Hadapsar, Pune",
        distance: "0.8 km away",
        lunch: "11:00 AM to 2:00 PM",
        dinner: "7:15 PM to 9:30 PM",
        phone: "+91 987456123",
    },
    {
        image: mess2,
        title: "Annapurna Mess",
        category: "Pure Veg",
        rating: 4.5,
        reviews: 256,
        address: "Near Phoenix Mall, Viman Nagar, Pune",
        distance: "1.1 km away",
        lunch: "11:30 AM to 2:30 PM",
        dinner: "7:00 PM to 10:00 PM",
        phone: "+91 987654321",
    },
    {
        image: mess3,
        title: "Maa Ki Rasoi",
        category: "Home Food",
        rating: 4.4,
        reviews: 311,
        address: "Kharadi Chowk, Pune",
        distance: "2 km away",
        lunch: "12 PM to 3 PM",
        dinner: "7 PM to 10 PM",
        phone: "+91 987111111",
    },
    {
        image: mess4,
        title: "Healthy Bites",
        category: "Healthy Meals",
        rating: 4.7,
        reviews: 210,
        address: "Magarpatta City, Pune",
        distance: "2.8 km away",
        lunch: "11 AM to 2 PM",
        dinner: "7 PM to 9:30 PM",
        phone: "+91 9898989898",
    },
];

export default function FeaturedMess() {
    const [selectedMess, setSelectedMess] = useState(null);

    return (
        <>
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-5">

                    <h2 className="text-4xl font-bold mb-3">
                        Featured Mess Near You
                    </h2>

                    <p className="text-gray-500 mb-10">
                        Fresh homemade food from trusted mess owners
                    </p>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {messes.map((mess, index) => (
                            <MessCard
                                key={index}
                                {...mess}
                                onMenuClick={() => setSelectedMess(mess)}
                            />
                        ))}
                    </div>

                </div>
            </section>

            {selectedMess && (
                <MessDetailsModal
                    mess={selectedMess}
                    onClose={() => setSelectedMess(null)}
                />
            )}
        </>
    );
}