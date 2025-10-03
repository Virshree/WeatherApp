import React from "react";

function DailyForecast({ forecast, temperatureUnit }) {
  function getWeekdayAbbrev(apiDate) {
    const dateObj = new Date(apiDate);
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekdays[dateObj.getDay()];
  }

  return (
    <div className="mt-6 px-4 md:px-0">
      <h2 className="text-white text-xl mb-4">Daily Forecast</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:flex lg:flex-wrap gap-4">
        {forecast.map((day) => (
          <div
            key={day.date}
            className="flex flex-col items-center justify-between bg-[#3C3B5E] p-3 rounded-lg shadow-md w-full sm:w-[120px] h-[140px]"
          >
            {/* Day name */}
            <span className="font-medium">
              {getWeekdayAbbrev(day.date)}
            </span>

            {/* Weather icon */}
            <img
              src={`https:${day.day.condition.icon}`}
              alt="icon"
              className="w-10 h-10"
            />

            {/* Temps */}
            <div className="flex gap-2">
              <p className="font-semibold">
                {temperatureUnit === "celsius"
                  ? `${Math.round(day.day.maxtemp_c)}°C`
                  : `${Math.round(day.day.maxtemp_f)}°F`}
              </p>
              <p className="text-gray-300">
                {temperatureUnit === "celsius"
                  ? `${Math.round(day.day.mintemp_c)}°C`
                  : `${Math.round(day.day.mintemp_f)}°F`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
