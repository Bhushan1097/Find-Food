import { Routes, Route, Navigate } from "react-router-dom";

import AuthRoutes from "./routes/AuthRoutes";


function App() {
  return (
    <Routes>

      {/* Authentication */}
      <Route path="/*" element={<AuthRoutes />} />

    </Routes>
  );
}

export default App;