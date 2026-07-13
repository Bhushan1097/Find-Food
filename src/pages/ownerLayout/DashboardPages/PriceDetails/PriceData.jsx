import React ,{useState} from "react";
import InputField from "../../../../components/OwnerForm/InputField";
import EditButton from "../Components/EditButton";

const PriceData = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleSave = () => {
    setIsEdit(false);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  return (
    <div className="w-full mt-6 flex flex-col gap-4 p-8 bg-[#FEFBFA] rounded-xl border-[#767676] shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]">
      <div>
        <label htmlFor="" className="font-medium">
          Monthly membership charges
        </label>
        <InputField type="number" />
      </div>
      <div>
        <label htmlFor="" className="font-medium">
          Single time meal charges
        </label>
        <InputField type="number" />
      </div>
      <div>
        <label htmlFor="" className="font-medium">
          Special day veg charges
        </label>
        <InputField type="number" />
      </div>
      <div>
        <label htmlFor="" className="font-medium">
          Special day non-veg charges
        </label>
        <InputField type="number" />
      </div>
      <EditButton isEdit={isEdit} onSave={handleSave} onEdit={handleEdit} />
    </div>
  );
};

export default PriceData;
