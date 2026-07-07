import {
    FaHome,
    FaShieldAlt,
    FaShoppingBasket,
} from "react-icons/fa";

const Features = () => {
    const features = [
        {
            icon: <FaHome size={28} />,
            title: "Home-Tested & Verified",
            description: "All chefs are verified for quality",
        },
        {
            icon: <FaShieldAlt size={28} />,
            title: "Hygiene Certified",
            description: "Regular hygiene inspections",
        },
        {
            icon: <FaShoppingBasket size={28} />,
            title: "Fresh & Authentic",
            description: "Made with love, just like home",
        },
    ];

    return (
        <section className="bg-[#F8EEE9] py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-5"
                        >
                            {/* Icon Box */}
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
                                <div className="text-[#2D3135]">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-[18px] font-bold text-[#1F1F1F]">
                                    {feature.title}
                                </h3>

                                <p className="text-[15px] text-gray-500 mt-1">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;