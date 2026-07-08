import { useState } from "react";

const FoodTypeSelector = () => {
  const [foodType, setFoodType] = useState("Veg");
  console.log(foodType)

  return (
    <>
      <h3 className="font-medium mb-2">Food you serve</h3>

      <div className="flex w-fit rounded-full bg-[#E5E7EB] p-1">
        {["Veg", "Non-Veg", "Both"].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFoodType(item)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              foodType === item
                ? "bg-[#C85A3E] text-white"
                : "text-[#2E2E2E]"
            }`}
          >
            {item}  
          </button>
        ))}
      </div>

     
    </>
  );
};

export default FoodTypeSelector;