import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/AuthPages/Login/Login";
import Register from "./pages/AuthPages/Register/Register";
import CustomerDashboard from "./pages/Customer/CustomerDashboard/CustomerDashboard";
import OwnerStepper from "./pages/ownerLayout/OwnerStepper";

import MessDetails from "./pages/ownerLayout/components/ownerPage/MessDetails/MessDetails";
import MenuDetails from "./pages/ownerLayout/components/ownerPage/MenuDetails/MenuDetails";
import PriceDetails from "./pages/ownerLayout/components/ownerPage/PriceDetails/PriceDetails";
import TimeDetails from "./pages/ownerLayout/components/ownerPage/TimeDetails/TimeDetails";

function App() {
  return (
    <>
      <Routes>

        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Customer */}
        <Route
          path="/customer/dashboard"
          element={<CustomerDashboard />}
        />


        {/* OwnerLayput */}
        <Route path="/ownerForm" element = {<OwnerStepper/>}>
          <Route path="messDetails" element={<MessDetails/>}/>
          <Route path="menu" element={<MenuDetails/>}/>
          <Route path="price" element={<PriceDetails/>}/>
          <Route path="time" element={<TimeDetails/>}/>
        
        </Route>
        

      </Routes>
    </>
  );
}

export default App;