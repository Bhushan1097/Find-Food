import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/AuthPages/Login/Login";
import Register from "./pages/AuthPages/Register/Register";
import CustomerDashboard from "./pages/Customer/CustomerDashboard/CustomerDashboard";

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

      </Routes>
    </>
  );
}

export default App;