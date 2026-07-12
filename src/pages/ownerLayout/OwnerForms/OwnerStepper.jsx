import React from "react";
import styles from "./OwnerStepper.module.css";
import MessDetails from "../components/MenuDetails/MenuDetails";
import logo from "../../../assets/logo.png";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import OwnerFormLinks from "../../../components/OwnerForm/OwnerFormLinks";
import FormNavigatorButton from "../../../components/OwnerForm/FormNavigatorButton";
import useFormNavigator from "../../../hooks/OwnerHooks/useFormNavigator";


const OwnerStepper = () => {
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location.pathname);
  const { next, back } = useFormNavigator();

  const submit = ()=>{
    console.log('data submited')
    navigate('/ownerDashboard')

  }

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
            <FormNavigatorButton BtnName="Back" onClick={back} />
            {location.pathname == "/ownerForm/time" ? (
              <FormNavigatorButton BtnName="Submit" onClick={submit} />
            ) : (
              <FormNavigatorButton BtnName="Next" onClick={next} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerStepper;
