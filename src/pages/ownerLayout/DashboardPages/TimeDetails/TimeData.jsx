import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EditButton from "../Components/EditButton";

const TimeDetails = () => {
  const [timeData, setTimeData] = useState({
    morningFrom: null,
    morningTo: null,
    eveningFrom: null,
    eveningTo: null,
    holiday: "Monday",
  });

  return (
    <div className="space-y-6 w-full mt-6 flex flex-col gap-4 p-8 bg-[#FEFBFA] rounded-xl border-[#767676] shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]">
      {/* Morning */}
      <div>
        <h3 className="font-semibold mb-3">Morning Time</h3>

        <div className="flex items-center gap-4">
          <label>From</label>

          <DatePicker
            selected={timeData.morningFrom}
            onChange={(time) =>
              setTimeData((prev) => ({
                ...prev,
                morningFrom: time,
              }))
            }
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="hh:mm aa"
            placeholderText="00:00 AM"
            className="border rounded-md px-3 py-2 w-36"
          />

          <label>To</label>

          <DatePicker
            selected={timeData.morningTo}
            onChange={(time) =>
              setTimeData((prev) => ({
                ...prev,
                morningTo: time,
              }))
            }
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="hh:mm aa"
            placeholderText="00:00 PM"
            className="border rounded-md px-3 py-2 w-36"
          />
        </div>
      </div>

      {/* Evening */}

      <div>
        <h3 className="font-semibold mb-3">Evening Time</h3>

        <div className="flex items-center gap-4">
          <label>From</label>

          <DatePicker
            selected={timeData.eveningFrom}
            onChange={(time) =>
              setTimeData((prev) => ({
                ...prev,
                eveningFrom: time,
              }))
            }
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="hh:mm aa"
            placeholderText="00:00 AM"
            className="border rounded-md px-3 py-2 w-36"
          />

          <label>To</label>

          <DatePicker
            selected={timeData.eveningTo}
            onChange={(time) =>
              setTimeData((prev) => ({
                ...prev,
                eveningTo: time,
              }))
            }
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="hh:mm aa"
            placeholderText="00:00 PM"
            className="border rounded-md px-3 py-2 w-36"
          />
        </div>
      </div>

      {/* Holiday */}

      <div>
        <h3 className="font-semibold mb-2">Holiday</h3>

        <select
          className="border rounded-md px-3 py-2 w-60"
          value={timeData.holiday}
          onChange={(e) =>
            setTimeData((prev) => ({
              ...prev,
              holiday: e.target.value,
            }))
          }
        >
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
        </select>
      </div>

    <EditButton/>
    </div>
  );
};

export default TimeDetails;
