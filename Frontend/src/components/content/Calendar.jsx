import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import React, { useState, useEffect } from "react";

// Simple Calendar Component
const Calendar = ({ enrolledDates = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [autoDates, setAutoDates] = useState(enrolledDates);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  //Auto mark today's date when user visits
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAutoDates((prev) => {
      if (!prev.includes(todayStr)) {
        return [...prev, todayStr];
      }
      return prev;
    });
  }, [todayStr]);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const isEnrolled = (day) => {
    const dateStr = `${year}-${month + 1}-${day}`;
    return autoDates.includes(dateStr);
  };

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`}></div>);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const isToday =
      d === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    days.push(
      <div
        key={d}
        className={`p-3 text-center rounded-lg cursor-pointer
        ${isEnrolled(d) ? "bg-green-500 text-white" : "bg-gray-100"}
        ${isToday ? "border-2 border-blue-500" : ""}`}
      >
        {d}
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto bg-white p-4 rounded-2xl shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="px-2 py-1 bg-gray-200 rounded"><ArrowLeft/></button>
        <h2 className="font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <button onClick={nextMonth} className="px-2 py-1 bg-gray-200 rounded"><ArrowRight/></button>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2 text-sm font-medium text-center mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2">{days}</div>
    </div>
  );
};

export default Calendar;