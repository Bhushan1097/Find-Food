import React ,{useState} from "react";
import ImageGallery from "./Components/ImageGallery";
import InputField from "../../../../components/OwnerForm/InputField";
import FileUpload from "../../../../components/OwnerForm/FileUpload";
import FoodTypeSelector from "../../../../components/OwnerForm/FoodTypeSelector";
import ImageUpload from "../../../../components/OwnerForm/ImageUpload";
import EditButton from "../Components/EditButton";

const MessData = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleSave = () => {
    // API Call
    setIsEdit(false);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };
  return (
    <div className="space-y-6 w-full mt-6 flex flex-col gap-4 p-8 bg-[#FEFBFA] rounded-xl border-[#767676] shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]">
      <div>
        <h1 className="text-3xl mb-3 font-medium">Menu Images</h1>
        <ImageGallery />
      </div>
      <form className="space-y-5 w-full">
        {/* Name */}
        <div>
          <h1 className="text-3xl mb-3 font-medium ">Mess Name</h1>
          <InputField type="text" placeholder="Name*" className="w-full" />
        </div>

        {/* Address */}
        <div>
          <h1 className="text-3xl mb-3 font-medium ">Address</h1>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-medium">Shop Number</label>
              <InputField placeholder="Shop number/Building number*" />
            </div>
            <div>
              <label className="font-medium">Area / Locality</label>

              <InputField placeholder="Area/Locality*" />
            </div>

            <InputField placeholder="City*" />

            <InputField placeholder="Pincode*" />
          </div>

          <div className="mt-5">
            <label className="font-medium">Landmark</label>

            <InputField className="w-full" placeholder="Add nearby landmark*" />
          </div>
        </div>

        {/* Contact & Email */}

        <h1 className="text-3xl mb-3 font-medium">Contact</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Contact</label>
            <InputField placeholder="Mobile number*" />
          </div>

          <div>
            <label className="font-medium">Email</label>
            <InputField placeholder="Email ID*" />
          </div>
        </div>

        {/* License */}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-medium">License</label>
            <InputField placeholder="Food license number*" />
          </div>

          <div>
            <label htmlFor="">.</label>
            <FileUpload id="fileUpload" text="Upload Licence Images" />
          </div>
        </div>

        <h1 className="text-3xl mb-3 font-medium">Food</h1>
        {/* Food Type */}

        <div>
          <FoodTypeSelector />
        </div>

        {/* Image Upload */}
      </form>
      <EditButton isEdit={isEdit} onSave={handleSave} onEdit={handleEdit} />
    </div>
  );
};

export default MessData;
