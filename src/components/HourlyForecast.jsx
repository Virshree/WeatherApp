import React from "react";
import snow from "../assets/images/icon-snow.webp";

function HourlyForecast() {
  // ✅ Sample hourly data (replace with API later)
  const hours = [
    { time: "3 PM", temp: 20 },
    { time: "4 PM", temp: 19 },
    { time: "5 PM", temp: 18 },
    { time: "6 PM", temp: 17 },
    { time: "7 PM", temp: 16 },
  ];

  return (
    <div className="bg-[#262540] text-white rounded-2xl p-4 w-full max-w-[364px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Hourly Forecast</h3>

        <select className="bg-[#262540] text-white border border-gray-600 px-2 py-1 rounded-md text-sm focus:outline-none">
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
        </select>
      </div>

      {/* Forecast List */}
      <div className="space-y-3">
        {hours.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#3C3B5E] rounded-lg px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <img src={snow} alt="weather icon" className="w-8 h-8" />
              <h4 className="text-md">{item.time}</h4>
            </div>
            <span className="text-lg font-medium">{item.temp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
