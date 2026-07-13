import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/AuthPages/Login/Login";
import Register from "./pages/AuthPages/Register/Register";

import CustomerDashboard from "./pages/Customer/CustomerDashboard/CustomerDashboard";

import OwnerStepper from "./pages/ownerLayout/OwnerForms/OwnerStepper";
import MessDetails from "./pages/ownerLayout/components/MessDetails/MessDetails";
import MenuDetails from "./pages/ownerLayout/components/MenuDetails/MenuDetails";
import PriceDetails from "./pages/ownerLayout/components/PriceDetails/PriceDetails";
import TimeDetails from "./pages/ownerLayout/components/TimeDetails/TimeDetails";
import OwnerDashboard from "./pages/ownerLayout/OwnerDashboard/OwnerDashboard";

import MessChart from "./pages/ownerLayout/DashboardPages/MessCharts/MessCharts";
import MessData from "./pages/ownerLayout/DashboardPages/MessDetails/MessData";
import MenuData from "./pages/ownerLayout/DashboardPages/MenuDetails/MenuData";
import PriceData from "./pages/ownerLayout/DashboardPages/PriceDetails/PriceData";
import TimeData from "./pages/ownerLayout/DashboardPages/TimeDetails/TimeData";
import FeedbackData from "./pages/ownerLayout/DashboardPages/FeedbackDetails/FeedbackData";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Customer */}
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />

        {/* OwnerLayput */}
        <Route path="/ownerForm" element={<OwnerStepper />}>
          <Route index element={<MessDetails />} />
          <Route path="messDetails" element={<MessDetails />} />
          <Route path="menu" element={<MenuDetails />} />
          <Route path="price" element={<PriceDetails />} />
          <Route path="time" element={<TimeDetails />} />
        </Route>

        {/* ownerDashboard Pages */}
        <Route path="/ownerDashboard" element={<OwnerDashboard />}>
          <Route index element={<MessChart />} />
          <Route path="dashboard" element={<MessChart />} />
          <Route path="messData" element={<MessData />} />
          <Route path="menuData" element={<MenuData />} />
          <Route path="priceData" element={<PriceData />} />
          <Route path="timeData" element={<TimeData />} />
          <Route path="feedbackData" element={<FeedbackData />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;