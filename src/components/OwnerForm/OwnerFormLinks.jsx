import React from "react";
import logo from "../../assets/logo.png";
import styles from "../OwnerForm/OwnerFormlinks.module.css";
import line from "./../..//assets/Line 7.png";
import FormNavLink from "./FormNavLink";

const OwnerFormLinks = () => {
  return (
    <div className="flex items-center justify-evenly gap-3" >
         <FormNavLink navigate = '/messDetails' formNumber = '1' formName = 'Mess Details' />
         <img src={line} alt="" className="w-15 h-1 " />

         <FormNavLink navigate = '/menu' formNumber = '2' formName = 'Menu' />
         <img src={line} alt="" className="w-12 h-1 " />

         <FormNavLink navigate = '/price' formNumber = '3' formName = 'Price' />
         <img src={line} alt="" className="w-15 h-1 " />

         <FormNavLink navigate = '/time' formNumber = '4' formName = 'Time' />
    </div>
  );
};

export default OwnerFormLinks;
