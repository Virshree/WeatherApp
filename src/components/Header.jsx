import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import units from "../assets/images/icon-units.svg";
import dropdown from "../assets/images/icon-dropdown.svg";
import checkmark from "../assets/images/icon-checkmark.svg";

function Header() {
  const [toggleUnits, setToggleUnits] = useState(false);
  const [system, setSystem] = useState("metric"); // metric | imperial
  const [temperature, setTemperature] = useState("celsius"); // celsius | fahrenheit
  const [wind, setWind] = useState("kmh"); // kmh | mph
  const [precipitation, setPrecipitation] = useState("mm"); // mm | in

  const handleSwitchUnits = () => setToggleUnits(!toggleUnits);

  const switchText = system === "metric" ? "Switch to Imperial" : "Switch to Metric";

  // When user selects Imperial, update all related values
  const handleSystemChange = (newSystem) => {
    setSystem(newSystem);
    if (newSystem === "metric") {
      setTemperature("celsius");
      setWind("kmh");
      setPrecipitation("mm");
    } else {
      setTemperature("fahrenheit");
      setWind("mph");
      setPrecipitation("in");
    }
  };

  return (
    <div className="flex justify-between max-w-[1250px] mx-auto m-[24px] gap-200">
      <img src={logo} alt="weather-logo" className="w-[154px] h-[30px] " />

      <div className="relative">
        {/* Button */}
        <div
          className="flex items-center cursor-pointer w-[119px] gap-2 h-[43px]
          bg-[#262540] p-3 text-white rounded-md"
          onClick={handleSwitchUnits}
        >
          <img src={units} alt="icon-units" className="w-[16px] h-[19px]" />
          <span>Units</span>
          <img src={dropdown} alt="dropdown" className="w-5 h-5" />
        </div>

        {/* Dropdown */}
        {toggleUnits && (
          <div
            className="absolute left-0 mt-2 bg-[#262540] p-3 space-y-1.5
            text-left rounded-2xl text-white w-[214px] z-50 shadow-lg"
          >
            {/* Switch text */}
            <span
              className="block text-white p-2 font-medium cursor-pointer"
              onClick={() =>
                handleSystemChange(system === "metric" ? "imperial" : "metric")
              }
            >
              {switchText}
            </span>

            {/* Temperature */}
            <p className="text-[#ACACB7] p-1">Temperature</p>
            <p
              className={`w-full p-2 h-[39px] flex justify-between items-center rounded-xl cursor-pointer ${
                temperature === "celsius" ? "bg-[#3C3B5E]" : ""
              }`}
              onClick={() => setTemperature("celsius")}
            >
              Celsius (°C)
              {temperature === "celsius" && (
                <img src={checkmark} alt="checkmark" className="w-5 h-5" />
              )}
            </p>
            <p
              className={`w-full p-2 h-[39px] flex justify-between items-center rounded-xl cursor-pointer ${
                temperature === "fahrenheit" ? "bg-[#3C3B5E]" : ""
              }`}
              onClick={() => setTemperature("fahrenheit")}
            >
              Fahrenheit (°F)
              {temperature === "fahrenheit" && (
                <img src={checkmark} alt="checkmark" className="w-5 h-5" />
              )}
            </p>

            <hr className="border-[#3C3B5E]" />

            {/* Wind Speed */}
            <p className="text-[#ACACB7] p-1">Wind Speed</p>
            <p
              className={`w-full p-2 h-[39px] flex justify-between items-center rounded-xl cursor-pointer ${
                wind === "kmh" ? "bg-[#3C3B5E]" : ""
              }`}
              onClick={() => setWind("kmh")}
            >
              km/h
              {wind === "kmh" && (
                <img src={checkmark} alt="checkmark" className="w-5 h-5" />
              )}
            </p>
            <p
              className={`w-full p-2 h-[39px] flex justify-between items-center rounded-xl cursor-pointer ${
                wind === "mph" ? "bg-[#3C3B5E]" : ""
              }`}
              onClick={() => setWind("mph")}
            >
              mph
              {wind === "mph" && (
                <img src={checkmark} alt="checkmark" className="w-5 h-5" />
              )}
            </p>

            <hr className="border-[#3C3B5E]" />

            {/* Precipitation */}
            <p className="text-[#ACACB7] p-1">Precipitation</p>
            <p
              className={`w-full p-2 h-[39px] flex justify-between items-center rounded-xl cursor-pointer ${
                precipitation === "mm" ? "bg-[#3C3B5E]" : ""
              }`}
              onClick={() => setPrecipitation("mm")}
            >
              Millimeters (mm)
              {precipitation === "mm" && (
                <img src={checkmark} alt="checkmark" className="w-5 h-5" />
              )}
            </p>
            <p
              className={`w-full p-2 h-[39px] flex justify-between items-center rounded-xl cursor-pointer ${
                precipitation === "in" ? "bg-[#3C3B5E]" : ""
              }`}
              onClick={() => setPrecipitation("in")}
            >
              Inches (in)
              {precipitation === "in" && (
                <img src={checkmark} alt="checkmark" className="w-5 h-5" />
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
