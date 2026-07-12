import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ navName, icon, navigateTo }) => {

   
  return(

      <>
  <NavLink
         
         to={`/ownerDashboard/${navigateTo}`}
         className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 mb-3 rounded-xl font-semibold text-[18px] transition-all duration-200 ${
                isActive
                ? "bg-[#C85A3E] text-white"
                : "text-black hover:bg-orange-100"
            }`
          }
        >
            
          <img src={icon} alt="" />
          <span>{navName}</span>
        </NavLink>
    </>
)
};

export default NavLinks;
