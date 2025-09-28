import React from "react";
import rain from "../assets/images/icon-rain.webp";

function DailyForecast() {
  // ✅ Forecast data (replace with API data later)
  const forecast = [
    { day: "Tue", high: 20, low: 14 },
    { day: "Wed", high: 22, low: 15 },
    { day: "Thu", high: 18, low: 12 },
    { day: "Fri", high: 21, low: 13 },
    { day: "Sat", high: 19, low: 11 },
    { day: "Sun", high: 19, low: 11 },
    { day: "Mon", high: 19, low: 11 },
  ];

  return (
    <div className="ml-80">
      <h2 className="text-white text-xl mb-4">Daily Forecast</h2>

      {/* Cards container */}
      <div className="flex gap-5 flex-wrap">
        {forecast.map((item, index) => (
          <div
            key={index}
            className="w-[100px] h-[140px] flex flex-col items-center justify-between 
                       bg-[#3C3B5E] p-3 rounded-lg text-white shadow-md"
          >
            <span className="font-medium">{item.day}</span>
            <img src={rain} alt="rain" className="w-10 h-10" />
            <div className="flex gap-2">
              <p className="font-semibold">{item.high}°</p>
              <p className="text-gray-300">{item.low}°</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
