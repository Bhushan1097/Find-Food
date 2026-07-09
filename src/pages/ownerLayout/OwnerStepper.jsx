import React from "react";
import styles from "./OwnerStepper.module.css";
import MessDetails from "./components/ownerPage/MessDetails/MessDetails";
import logo from "../../assets/logo.png";
import MenuDetails from "./components/ownerPage/MenuDetails/MenuDetails";
import TimeDetails from "./components/ownerPage/TimeDetails/TimeDetails";
import PriceDetails from "./components/ownerPage/PriceDetails/PriceDetails";
import { Outlet } from "react-router-dom";
import OwnerFormLinks from "../../components/OwnerForm/OwnerFormLinks";
import FormNavigatorButton from "../../components/OwnerForm/FormNavigatorButton";
import useFormNavigator from "../../hooks/OwnerHooks/useFormNavigator";
const OwnerStepper = () => {

  const {next,back} = useFormNavigator()
  console.log(next,back)
  return (
    <>
      <div className={`${styles.backgroundLayout} `}>
        <div
          className={`${styles.formLayoutContainer} items-center flex gap-10`}
        >
          <img src={logo} alt="" className={`w-55`} />

          <OwnerFormLinks />

          <Outlet />
          <div className="flex gap-5 w-full justify-end ">
            <FormNavigatorButton BtnName="Back" onClick = {back} />
            <FormNavigatorButton BtnName="Next" onClick = {next} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerStepper;
