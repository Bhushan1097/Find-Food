import React, { useState } from "react";
import MenuDayAccordion from "../MenuDetails/Components/MenuDayAccordion";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const morningDefault = ["Chapati", "Rice", "Dal", "Sabji"];
const eveningDefault = ["Chapati", "Rice", "Dal", "Sabji"];

const createDayMenus = (items) => {
  const data = {};

  days.forEach((day) => {
    data[day] = [...items];
  });

  return data;
};

const MenuData = () => {
  const [mealTime, setMealTime] = useState("morning");

  const [menus, setMenus] = useState({
    availableMenus: ["Chapati", "Rice", "Dal", "Sabji", "Salad", "Papad"],

    morning: createDayMenus(morningDefault),
    evening: createDayMenus(eveningDefault),
  });

  const [expandedDays, setExpandedDays] = useState(
    days.reduce((acc, day) => {
      acc[day] = false;
      return acc;
    }, {}),
  );

  const [menuInput, setMenuInput] = useState(
    days.reduce((acc, day) => {
      acc[day] = "";
      return acc;
    }, {}),
  );

  const [isEdit, setIsEdit] = useState(true);

  const expandAll = () => {
    const data = {};

    days.forEach((day) => {
      data[day] = true;
    });

    setExpandedDays(data);
  };

  const collapseAll = () => {
    const data = {};

    days.forEach((day) => {
      data[day] = false;
    });

    setExpandedDays(data);
  };

  const handleCheckbox = (day, item) => {
    if (!isEdit) return;

    setMenus((prev) => {
      const selected = prev[mealTime][day];

      return {
        ...prev,

        [mealTime]: {
          ...prev[mealTime],

          [day]: selected.includes(item)
            ? selected.filter((i) => i !== item)
            : [...selected, item],
        },
      };
    });
  };

  const addMenu = (day) => {
    const value = menuInput[day].trim();

    if (!value) return;

    if (
      menus.availableMenus.some(
        (menu) => menu.toLowerCase() === value.toLowerCase(),
      )
    ) {
      alert("Menu already exists");
      return;
    }

    setMenus((prev) => ({
      ...prev,

      availableMenus: [...prev.availableMenus, value],

      [mealTime]: {
        ...prev[mealTime],

        [day]: [...prev[mealTime][day], value],
      },
    }));

    setMenuInput((prev) => ({
      ...prev,
      [day]: "",
    }));
  };

  const handleSave = () => {
    console.log(menus);

    // axios.post('/api/menu',menus)

    setIsEdit(false);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  return (
    <div className="space-y-6 w-full mt-6 flex flex-col gap-4 p-8 bg-[#FEFBFA] rounded-xl border-[#767676] shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]">
      {/* Meal Toggle */}

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <button
            onClick={() => setMealTime("morning")}
            className={`px-6 py-2 rounded-md transition ${
              mealTime === "morning"
                ? "bg-[#C85A3E] text-white"
                : "bg-[#F0F0F0] border border-[#CFCFCF]"
            }`}
          >
            Morning Meal
          </button>

          <button
            onClick={() => setMealTime("evening")}
            className={`px-6 py-2 rounded-md transition ${
              mealTime === "evening"
                ? "bg-[#C85A3E] text-white"
                : "bg-[#F0F0F0] border border-[#CFCFCF]"
            }`}
          >
            Evening Meal
          </button>
        </div>

        <div className="flex gap-3">
          <button
            onClick={expandAll}
            className="bg-[#C85A3E] text-white px-5 py-2 rounded-md"
          >
            Expand All
          </button>

          <button
            onClick={collapseAll}
            className="border border-[#6E6E6E] px-5 py-2 rounded-md"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Accordion */}

      <MenuDayAccordion
        days={days}
        expandedDays={expandedDays}
        setExpandedDays={setExpandedDays}
        menus={menus}
        mealTime={mealTime}
        menuInput={menuInput}
        setMenuInput={setMenuInput}
        addMenu={addMenu}
        handleCheckbox={handleCheckbox}
        isEdit={isEdit}
      />

      {/* Footer Buttons */}

      <div className="flex justify-end gap-4 mt-8">
        {isEdit ? (
          <button
            onClick={handleSave}
            className="bg-[#22BB33] text-white px-8 py-2 rounded-md"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-[#C85A3E] text-white px-8 py-2 rounded-md"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuData;
