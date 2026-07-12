import React from "react";

const MenuDayAccordion = ({
  days,
  expandedDays,
  setExpandedDays,
  menus,
  mealTime,
  menuInput,
  setMenuInput,
  addMenu,
  handleCheckbox,
  isEdit,
}) => {
  const toggleDay = (day) => {
    setExpandedDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  return (
    <>
      {days.map((day) => (
        <div
          key={day}
          className="border border-[#6E6E6E] rounded-lg mb-4 overflow-hidden"
        >
          {/* Header */}

          <div
            onClick={() => toggleDay(day)}
            className="flex items-center justify-between p-4 cursor-pointer font-semibold bg-white"
          >
            <span>{day}</span>

            <svg
              className={`w-5 h-5 transition-all duration-300 ${
                expandedDays[day] ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Body */}

          {expandedDays[day] && (
            <div className="p-5 bg-[#F0F0F080] border-t border-[#D9D9D9]">
              {/* Menu List */}

              <div className="flex flex-wrap gap-x-10 gap-y-3 mb-6">
                {menus.availableMenus.map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      disabled={!isEdit}
                      checked={menus[mealTime][day].includes(item)}
                      onChange={() => handleCheckbox(day, item)}
                      className="accent-[#C85A3E] w-4 h-4 cursor-pointer"
                    />

                    <span>{item}</span>
                  </label>
                ))}
              </div>

              {/* Add Menu */}

              <h4 className="font-medium mb-2">
                Add your menu
              </h4>

              <div className="flex items-center gap-4">
                <input
                  disabled={!isEdit}
                  value={menuInput[day]}
                  onChange={(e) =>
                    setMenuInput((prev) => ({
                      ...prev,
                      [day]: e.target.value,
                    }))
                  }
                  placeholder="Enter menu"
                  className="w-72 h-11 border border-[#6E6E6E] rounded-md px-3 outline-none disabled:bg-gray-100"
                />

                <button
                  disabled={!isEdit}
                  onClick={() => addMenu(day)}
                  className="bg-[#C85A3E] text-white px-8 h-11 rounded-md hover:bg-[#b94d32] disabled:bg-gray-400"
                >
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default MenuDayAccordion;