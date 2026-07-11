import React from "react";

const FormNavigatorButton = ({ BtnName, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`h-12 w-28 flex items-center justify-center rounded-[4.25rem] p-[0.7rem] text-[1.2rem] cursor-pointer 
        ${
          BtnName === "Next"
            ? "bg-[#1479FF] text-white"
            : BtnName === "Submit"
              ? "bg-[#22BB33] text-white"
              : "bg-[#E5E7EB] text-black"
        }`}
    >
      {BtnName}
    </div>
  );
};

export default FormNavigatorButton;
