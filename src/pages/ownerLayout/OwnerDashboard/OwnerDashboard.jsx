import React from "react";
import OwnerNavbar from "../../../components/OwnerNavbar/OwnerNavbar";
import Sidebar from "../components/OwnerSidebar/Sidebar";
import Footer from "../../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const OwnerDashboard = () => {
  return (
    <>
      <header>
        <OwnerNavbar />
      </header>

      <main className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1 p-8 flex flex-col gap-6 overflow-x-auto">
          <h1 className="text-6xl">Good Morning, Joe!</h1>
          <h1>It's time to track your finance and services.</h1>

          <Outlet />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OwnerDashboard;