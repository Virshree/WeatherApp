import React from "react";

function HourlyForecast({forecast,temperatureUnit}) {

// console.log(forecast)
// Helper to convert 24-hour time to 12-hour with AM/PM
function formatTime(dateTime) {
  const [date, time] = dateTime.split(" "); // "2025-09-29", "14:30"
    let hours=parseInt(time.split(":")[0],10);

    const ampm=hours>=12?"PM":"AM";
    hours=hours%12;
    hours=hours?hours:12;

    return `${hours} ${ampm}`;
}

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
      <div className="space-y-3 overflow-y-scroll  h-[600px]">
      
        {forecast.slice(0,15).map((hour)=>(
         <div key={hour.time}
         className="flex items-center justify-between  bg-[#3C3B5E] rounded-lg px-4 py-3">
          <div className="flex items-center gap-3 ">
              <img src={`https:${hour.condition.icon}`} alt="weather icon" className="w-8 h-8" />
              <h4 className="text-md">{formatTime(hour.time)}</h4>
            </div>
            <span className="text-lg font-medium">{temperatureUnit === "celsius" ? `${Math.round(hour.temp_c)}°C` :`${Math.round( hour.temp_f)}°F`}</span>
         </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
