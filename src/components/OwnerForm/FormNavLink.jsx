import React from "react";
import { NavLink } from "react-router-dom";

const FormNavLink = ({ formNumber, formName, navigate }) => {
  return (
    <NavLink to={`/ownerForm/${navigate}`}>
      {({ isActive }) => (
        <div
          className={`flex gap-2 items-center ${
            isActive
              ? "font-medium text-[1.125rem] leading-none tracking-normal text-[#C85A3E]"
              : "text-[#2E2E2E]"
          }`}
        >
          <div
            className={`h-[1.430rem] w-[1.430rem] rounded-full flex items-center justify-center ${
              isActive ? "bg-[#C85A3E] text-white" : "bg-gray-300 text-white"
            }`}
          >
            {formNumber}
          </div>

          <span>{formName}</span>
        </div>
      )}
    </NavLink>
  );
};

export default FormNavLink;
