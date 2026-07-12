import React from "react";

const EditButton = () => {
  return (
    <div className="flex items-center gap-5 justify-end">
      <button className="w-25 h-10 bg-[#C85A3E] py-2 text-white font-semibold rounded-xl shadow-[0px_1px_3px_1px_#00000026,0px_1px_2px_0px_#0000004D] ">
        Edit
      </button>
      <button className="w-25 h-10 bg-[#22BB33] py-2 text-white font-semibold rounded-xl shadow-[0px_1px_3px_1px_#00000026,0px_1px_2px_0px_#0000004D] ">
        Save
      </button>
    </div>
  );
};

export default EditButton;
