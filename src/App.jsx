import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/AuthPages/Login/Login";
import Register from "./pages/AuthPages/Register/Register";
import CustomerDashboard from "./pages/Customer/CustomerDashboard/CustomerDashboard";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/customer/dashboard"
        element={<CustomerDashboard />}
      />

    </Routes>
  );
}

export default App;