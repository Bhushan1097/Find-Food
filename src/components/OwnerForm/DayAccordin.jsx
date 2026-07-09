import React from "react";

const DayAccordion = ({
  days,
  activeDay,
  setActiveDay,
  menus,
  mealTime,
  menuInput,
  setMenuInput,
  addMenu,
  handleCheckbox,
}) => {
  return (
    <>
      {days.map((day) => (
        <div key={day} className="border border-[#6E6E6E] rounded-lg mb-4">
          <div
            onClick={() => setActiveDay(activeDay === day ? "" : day)}
            className="cursor-pointer p-4 font-semibold"
          >
            {day}
          </div>

          {activeDay === day && (
            <div className="p-4 bg-[#F0F0F080]">
              <div className="flex flex-wrap gap-4 mb-5">
                {menus.availableMenus.map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={menus[mealTime][day].includes(item)}
                      onChange={() => handleCheckbox(day, item)}
                    />

                    {item}
                  </label>
                ))}
              </div>

              <div className="flex gap-3">
                <input
                  value={menuInput}
                  onChange={(e) => setMenuInput(e.target.value)}
                  placeholder="Add your menu"
                  className="border px-3 py-2 rounded-md"
                />

                <button
                  onClick={addMenu}
                  className="bg-[#C85A3E] text-white px-6 rounded-md"
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

export default DayAccordion;
