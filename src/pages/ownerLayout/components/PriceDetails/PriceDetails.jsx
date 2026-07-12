import React from "react";
import InputField from "../../../../components/OwnerForm/InputField";

const PriceDetails = () => {
  return (
    <div className="w-full mt-6 flex flex-col gap-4">
      <div>
        <label htmlFor="" className="font-medium">Monthly membership charges</label>
        <InputField type = 'number' />
      </div>
      <div>
        <label htmlFor="" className="font-medium">Single time meal charges</label>
        <InputField type = 'number' />
      </div>
      <div>
        <label htmlFor="" className="font-medium">Special day veg charges</label>
        <InputField type = 'number' />
      </div>
      <div>
        <label htmlFor="" className="font-medium">Special day non-veg charges</label>
        <InputField type = 'number' />
      </div>
    </div>
  );
};

export default PriceDetails;
