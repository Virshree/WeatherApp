import React from "react";

function SubCloud({ weatherData, temperatureUnit, windUnit, precipUnit }) {
  const current = weatherData.current;

  return (
    <div className="flex flex-wrap ml-75 mt-6">
      {/* Feels Like */}
      <Card
        title="Feels like"
        value={
          temperatureUnit === "celsius"
            ? `${Math.round(current.feelslike_c)}°C`
            : `${Math.round(current.feelslike_f)}°F`
        }
      />

      {/* Humidity */}
      <Card title="Humidity" value={`${current.humidity}%`} />

      {/* Wind */}
      <Card
        title="Wind"
        value={
          windUnit === "kmh"
            ? `${current.wind_kph} km/h`
            : `${current.wind_mph} mph`
        }
      />

      {/* Precipitation */}
      <Card
        title="Precipitation"
        value={
          precipUnit === "mm"
            ? `${current.precip_mm} mm`
            : `${current.precip_in} in`
        }
      />
    </div>
  );
}

// Reusable card component
function Card({ title, value }) {
  return (
    <div className="bg-[#3C3B5E] text-white w-[177px] flex flex-col m-4 rounded-2xl h-[118px] p-4 ">
      <span className="text-[#D4D3D9]">{title}</span>
      <span className="text-left text-[24px] mt-2">{value}</span>
    </div>
  );
}

export default SubCloud;
