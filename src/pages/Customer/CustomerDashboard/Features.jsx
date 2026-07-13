import {
    FaHome,
    FaShieldAlt,
    FaShoppingBasket,
} from "react-icons/fa";

const Features = () => {
    const features = [
        {
            icon: <FaHome size={24} />,
            title: "Home-Tested & Verified",
            description: "All chefs are verified for quality",
        },
        {
            icon: <FaShieldAlt size={24} />,
            title: "Hygiene Certified",
            description: "Regular hygiene inspections",
        },
        {
            icon: <FaShoppingBasket size={24} />,
            title: "Fresh & Authentic",
            description: "Made with love, just like home",
        },
    ];

    return (
        <section className="flex justify-center bg-[#A230131F] py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-[18px]"
                        >
                            {/* Icon */}
                            <div
                                className="
                                    w-[54px]
                                    h-[54px]
                                    bg-white
                                    rounded-[10px]
                                    p-[11px]
                                    flex
                                    items-center
                                    justify-center
                                    shadow-sm
                                    flex-shrink-0
                                "
                            >
                                <div className="text-[#2D3135]">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Text */}
                            <div>
                                <h3
                                    className="
                                        font-poppins
                                        font-medium
                                        text-[18px]
                                        leading-[110%]
                                        tracking-[0]
                                        text-[#1F1F1F]
                                    "
                                >
                                    {feature.title}
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        font-poppins
                                        text-[15px]
                                        leading-[22px]
                                        text-[#6B7280]
                                    "
                                >
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