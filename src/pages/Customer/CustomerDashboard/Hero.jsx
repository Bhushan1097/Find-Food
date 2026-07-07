import { useState } from "react";
import { FaMapMarkerAlt, FaSearch, FaSlidersH } from "react-icons/fa";

import heroLeft from "../../../assets/hero-left.png";
import heroRight from "../../../assets/hero-right.png";

import FilterModal from "./FilterModal";

const Hero = () => {
    const [openFilter, setOpenFilter] = useState(false);

    return (
        <>
            <section className="relative bg-[#D9532A] overflow-hidden min-h-[500px] lg:h-[430px]">

                {/* Left Image */}
                <img
                    src={heroLeft}
                    alt=""
                    className="absolute bottom-0 -left-40 lg:-left-56 w-[420px] lg:w-[500px] pointer-events-none select-none"
                />

                {/* Right Image */}
                <img
                    src={heroRight}
                    alt=""
                    className="absolute bottom-0 -right-40 lg:-right-56 w-[420px] lg:w-[500px] pointer-events-none select-none"
                />

                {/* Content */}

                <div className="relative z-20 max-w-7xl mx-auto flex flex-col justify-center items-center h-full px-5 py-16 text-white">

                    <h1 className="text-5xl font-bold text-center">
                        Taste of Home, Delivered
                    </h1>

                    <h2 className="text-5xl font-bold mt-2 text-center">
                        Discover authentic home-cooked meals
                    </h2>

                    {/* Search */}

                    <div className="flex flex-col lg:flex-row items-center gap-4 mt-12">

                        {/* Location */}

                        <div className="w-[280px] h-[58px] bg-white rounded-xl flex items-center px-5 shadow-lg">

                            <FaMapMarkerAlt className="text-[#D9532A] text-xl" />

                            <input
                                placeholder="Wadgaon Sheri, Pune"
                                className="ml-4 w-full outline-none text-lg text-gray-700"
                            />

                        </div>

                        {/* Search */}

                        <div className="w-[430px] h-[58px] bg-white rounded-xl flex items-center shadow-lg overflow-hidden">

                            <div className="flex items-center flex-1 px-5">

                                <FaSearch className="text-gray-500 text-xl" />

                                <input
                                    placeholder="Search for mess"
                                    className="ml-4 w-full outline-none text-lg text-gray-700"
                                />

                            </div>

                            <button
                                onClick={() => setOpenFilter(true)}
                                className="mr-2 bg-[#C46A4B] hover:bg-[#b45d40] duration-300 text-white rounded-lg h-[44px] px-6 flex items-center gap-2 font-semibold text-base"
                            >
                                <FaSlidersH />
                                Filter
                            </button>

                        </div>

                    </div>


                </div>

            </section>

            <FilterModal
                open={openFilter}
                onClose={() => setOpenFilter(false)}
            />

        </>
    );
};

export default Hero;