import { useState } from "react";
import { FaHeart, FaUser } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";

const OwnerNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 ">

                {/* Logo */}
                <img
                    src={logo}
                    alt="Find Food"
                    className="w-24 md:w-28 cursor-pointer"
                />

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-10 text-sm font-medium">
                    <NavLink className="text-[#D85C39] cursor-pointer">Home</NavLink>

                    <NavLink className="cursor-pointer hover:text-[#D85C39] transition">
                        Services
                    </NavLink>

                    <NavLink className="cursor-pointer hover:text-[#D85C39] transition">
                        Support
                    </NavLink>

                    <NavLink className="cursor-pointer hover:text-[#D85C39] transition">
                        About
                    </NavLink>
                </ul>

                {/* Desktop Right */}
                <div className="hidden lg:flex items-center gap-6">
                    <FaHeart className="text-xl cursor-pointer hover:text-red-500 transition" />

                    <button className="flex items-center gap-2 bg-[#D85C39] text-white px-5 py-2 rounded-lg hover:bg-[#bf4f30] transition">
                        <FaUser />
                    
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-3xl text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden border-t bg-white shadow-md">
                    <ul className="flex flex-col text-center">
                        <li
                            className="py-4 border-b hover:bg-gray-50 cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </li>

                        <li
                            className="py-4 border-b hover:bg-gray-50 cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                        >
                            Services
                        </li>

                        <li
                            className="py-4 border-b hover:bg-gray-50 cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                        >
                            Support
                        </li>

                        <li
                            className="py-4 border-b hover:bg-gray-50 cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </li>

                        <div className="flex justify-center items-center gap-6 py-5">
                            <FaHeart className="text-xl cursor-pointer hover:text-red-500 transition" />

                            <button className="flex items-center gap-2 bg-[#D85C39] text-white px-5 py-2 rounded-lg hover:bg-[#bf4f30] transition">
                                <FaUser />
                                Sign In
                            </button>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default OwnerNavbar;