import React, { useState } from "react";
import DayAccordion from "../../../../components/OwnerForm/DayAccordin";
import styles from "./MenuDetails.module.css";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Default checked items
const morningDefault = ["Chapati", "Rice", "Dal", "Sabji"];

const eveningDefault = ["Chapati", "Rice", "Dal", "Sabji"];

// Create default menu for all days
const createDayMenus = (defaultItems) => {
  const data = {};

  days.forEach((day) => {
    data[day] = [...defaultItems];
  });

  return data;
};

const MenuDetails = () => {
  const [mealTime, setMealTime] = useState("morning");
  const [activeDay, setActiveDay] = useState("Monday");
  const [menuInput, setMenuInput] = useState("");

  const [menus, setMenus] = useState({
    availableMenus: [
      "Chapati",
      "Rice",
      "Dal",
      "Sabji",
      "Salad",
      "Papad",
    ],

    // Default checked items
    morning: createDayMenus(morningDefault),

    evening: createDayMenus(eveningDefault),
  });

  const addMenu = () => {
    const value = menuInput.trim();

    if (!value) return;

    if (
      menus.availableMenus.some(
        (menu) => menu.toLowerCase() === value.toLowerCase()
      )
    ) {
      alert("Menu already exists");
      return;
    }

    setMenus((prev) => ({
      ...prev,
      availableMenus: [...prev.availableMenus, value],
    }));

    setMenuInput("");
  };

  const handleCheckbox = (day, item) => {
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

  return (
    <div className="w-full">
      <h3 className="font-medium font-bold">Menu</h3>

      <div className={styles.toggleContainer}>
        <button
          onClick={() => setMealTime("morning")}
          className={
            mealTime === "morning"
              ? styles.activeBtn
              : styles.inactiveBtn
          }
        >
          Morning Meal
        </button>

        <button
          onClick={() => setMealTime("evening")}
          className={
            mealTime === "evening"
              ? styles.activeBtn
              : styles.inactiveBtn
          }
        >
          Evening Meal
        </button>
      </div>

      <DayAccordion
        days={days}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        menus={menus}
        mealTime={mealTime}
        menuInput={menuInput}
        setMenuInput={setMenuInput}
        addMenu={addMenu}
        handleCheckbox={handleCheckbox}
      />
    </div>
  );
};

export default MenuDetails;