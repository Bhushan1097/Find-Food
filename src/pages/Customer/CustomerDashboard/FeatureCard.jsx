import {
    FaHome,
    FaShieldAlt,
    FaUtensils,
} from "react-icons/fa";

const icons = {
    home: <FaHome size={28} />,
    shield: <FaShieldAlt size={28} />,
    food: <FaUtensils size={28} />,
};

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div
            className="
      bg-white
      rounded-2xl
      shadow-lg
      hover:shadow-2xl
      duration-300
      p-5
      text-center
      flex
      flex-col
      items-center
      cursor-pointer
      "
        >
            <div
                className="
        w-10
        h-10
        rounded-full
        bg-orange-100
        text-[#D9532A]
        flex
        items-center
        justify-center
        mb-5
        "
            >
                {icons[icon]}
            </div>

            <h2 className="text-xl font-bold mb-3">
                {title}
            </h2>

            <p className="text-gray-500 text-sm leading-6">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;