import { Routes, Route, Navigate } from "react-router-dom";
import CustomerDashboard from "../pages/Customer/CustomerDashboard/CustomerDashboard";


const CustomerRoutes = () => {
    return (
        <Routes>

            <Route path="/customer-dashboard" element={<CustomerDashboard />} />

            {/* <Route path="/register" element={<Register />} /> */}

        </Routes>
    );
};

export default CustomerRoutes;