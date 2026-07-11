import FileUpload from "../../../../components/OwnerForm/FileUpload";
import FoodTypeSelector from "../../../../components/OwnerForm/FoodTypeSelector";
import ImageUpload from "../../../../components/OwnerForm/ImageUpload";
import InputField from "../../../../components/OwnerForm/InputField";

const MessDetails = () => {
  return (
    <form className="space-y-5 w-full">
      {/* Name */}
      <div>
        <label className="font-medium">Name</label>
        <InputField type="text" placeholder="Name*" className="w-full" />
      </div>

      {/* Address */}
      <div>
        <label className="font-medium">Address</label>

        <div className="grid grid-cols-2 gap-4">
          <InputField placeholder="Shop number/Building number*" />

          <InputField placeholder="Area/Locality*" />

          <InputField placeholder="City*" />

          <InputField placeholder="Pincode*" />
        </div>

        <InputField
          className="w-full mt-4"
          placeholder="Add nearby landmark*"
        />
      </div>

      {/* Contact & Email */}

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
         <FileUpload id = 'fileUpload' text='Upload Licence Images'/>

        </div>
      </div>

      {/* Food Type */}

      <div>
        <FoodTypeSelector />
      </div>

      {/* Image Upload */}

      <div>
        <label className="font-medium">Add your mess images</label>
        <ImageUpload />
      </div>
    </form>
  );
};

export default MessDetails;
