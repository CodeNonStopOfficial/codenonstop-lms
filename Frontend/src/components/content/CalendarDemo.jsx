import React, { useState } from "react";

// Simple Calendar Component
const Calendar = ({ enrolledDates }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const isEnrolled = (day) => {
    const dateStr = `${year}-${month + 1}-${day}`;
    return enrolledDates.includes(dateStr);
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
    days.push(
      <div
        key={d}
        className={`p-3 text-center rounded-lg cursor-pointer
          ${isEnrolled(d) ? "bg-green-500 text-white" : "bg-gray-100"}`}
      >
        {d}
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-2xl shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="px-2 py-1 bg-gray-200 rounded">◀</button>
        <h2 className="font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <button onClick={nextMonth} className="px-2 py-1 bg-gray-200 rounded">▶</button>
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

// Example Usage Component
const CalendarDemo = () => {
  // Example enrolled dates (simulate when user enrolls)
  const enrolledDates = [
    "2026-3-5",
    "2026-3-10",
    "2026-3-18",
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Course Enrollment Calendar</h1>
      <Calendar enrolledDates={enrolledDates} />
    </div>
  );
};

export default CalendarDemo;