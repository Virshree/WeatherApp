import React from "react";

function DailyForecast({ forecast, temperatureUnit }) {
  function getWeekdayAbbrev(apiDate) {
    const dateObj = new Date(apiDate);
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekdays[dateObj.getDay()];
  }
  return (
    <div className="ml-76 mt-6">
      <h2 className="text-white text-xl mb-4">Daily Forecast</h2>
      <div className="flex gap-5 flex-wrap">
        {forecast.map((day) => (
          <div
            key={day.date}
            className="w-[100px] h-[140px] flex flex-col items-center justify-between bg-[#3C3B5E] p-3 rounded-lg shadow-md"
          >
            <span className="font-medium">{getWeekdayAbbrev(day.date)}</span>
            <img src={`https:${day.day.condition.icon}`} alt="icon" className="w-10 h-10" />
            <div className="flex gap-2">
              <p className="font-semibold">
                {temperatureUnit === "celsius" ? `${Math.round(day.day.maxtemp_c)}°C` : `${Math.round(day.day.maxtemp_f)}°F`}
              </p>
              <p className="text-gray-300">
                {temperatureUnit === "celsius" ? `${Math.round(day.day.mintemp_c)}°C` : `${Math.round(day.day.mintemp_f)}°F`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
