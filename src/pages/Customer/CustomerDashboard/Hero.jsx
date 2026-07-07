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
          className="absolute bottom-0 -left-40 lg:-left-56 w-[420px] lg:w-[560px] pointer-events-none select-none"
        />

        {/* Right Image */}
        <img
          src={heroRight}
          alt=""
          className="absolute bottom-0 -right-40 lg:-right-56 w-[420px] lg:w-[560px] pointer-events-none select-none"
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

          <div className="flex flex-col lg:flex-row items-center gap-5 mt-14">

            {/* Location */}

            <div className="w-[350px] h-[72px] bg-white rounded-2xl flex items-center px-6 shadow-xl">

              <FaMapMarkerAlt className="text-[#D9532A] text-2xl" />

              <input
                placeholder="Wadgaon Sheri, Pune"
                className="ml-5 w-full outline-none text-2xl text-gray-700"
              />

            </div>

            {/* Search */}

            <div className="w-[530px] h-[72px] bg-white rounded-2xl flex items-center shadow-xl overflow-hidden">

              <div className="flex items-center flex-1 px-6">

                <FaSearch className="text-gray-500 text-2xl" />

                <input
                  placeholder="Search for mess"
                  className="ml-5 w-full outline-none text-2xl text-gray-700"
                />

              </div>

              <button
                onClick={() => setOpenFilter(true)}
                className="mr-3 bg-[#C46A4B] hover:bg-[#b45d40] duration-300 text-white rounded-xl h-[54px] px-8 flex items-center gap-3 font-semibold text-xl"
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