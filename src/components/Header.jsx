import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.svg";
import units from "../assets/images/icon-units.svg";
import dropdown from "../assets/images/icon-dropdown.svg";
import checkmark from "../assets/images/icon-checkmark.svg";

function Header({ temperature, setTemperature, wind, setWind, precipitation, setPrecipitation }) {
  const [toggleUnits, setToggleUnits] = useState(false);

  const handleSwitchUnits = () => setToggleUnits(!toggleUnits);
 
  return (
    <div className="flex justify-between max-w-[1250px] mx-auto  mt-[40px] gap-[860px]">
      <img src={logo} alt="weather-logo" className="w-[164px] h-[35px]" />

      <div className="relative">
        {/* Button */}
        <div
          className="flex items-center cursor-pointer w-[119px] gap-2 h-[43px] bg-[#262540] p-3 text-white rounded-md"
          onClick={handleSwitchUnits}
        >
          <img src={units} alt="icon-units" className="w-[16px] h-[19px]" />
          <span>Units</span>
          <img src={dropdown} alt="dropdown" className="w-5 h-5" />
        </div>

        {/* Dropdown */}
        {toggleUnits && (
          <div className="absolute left-0 mt-2 bg-[#262540] p-3 space-y-1.5 text-left rounded-2xl text-white w-[214px] z-50 shadow-lg">
            {/* Temperature */}
            <p className="text-[#ACACB7] p-1">Temperature</p>
            <p
              className={`w-full p-2 h-[39px] flex justify-between items-center rounded-xl cursor-pointer ${
                temperature === "celsius" ? "bg-[#3C3B5E]" : ""
              }`}
              onClick={() => setTemperature("celsius")}
            >
              Celsius (°C)
              {temperature === "celsius" && <img src={checkmark} alt="checkmark" className="w-5 h-5" />}
            </p>
            <p
              className={`w-full p-2 h-[39px] flex justify-between items-center rounded-xl cursor-pointer ${
                temperature === "fahrenheit" ? "bg-[#3C3B5E]" : ""
              }`}
              onClick={() => setTemperature("fahrenheit")}
            >
              Fahrenheit (°F)
              {temperature === "fahrenheit" && <img src={checkmark} alt="checkmark" className="w-5 h-5" />}
            </p>

            <hr className="border-[#3C3B5E]" />

            {/* Wind */}
            <p className="text-[#ACACB7] p-1">Wind Speed</p>
            <p
              className={`w-full p-2 h-[39px] flex justify-between items-center rounded-xl cursor-pointer ${
                wind === "kmh" ? "bg-[#3C3B5E]" : ""
              }`}
              onClick={() => setWind("kmh")}
            >
              km/h
              {wind === "kmh" && <img src={checkmark} alt="checkmark" className="w-5 h-5" />}
            </p>
            <p
              className={`w-full p-2 h-[39px] flex justify-between items-center rounded-xl cursor-pointer ${
                wind === "mph" ? "bg-[#3C3B5E]" : ""
              }`}
              onClick={() => setWind("mph")}
            >
              mph
              {wind === "mph" && <img src={checkmark} alt="checkmark" className="w-5 h-5" />}
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
              {precipitation === "mm" && <img src={checkmark} alt="checkmark" className="w-5 h-5" />}
            </p>
            <p
              className={`w-full p-2 h-[39px] flex justify-between items-center rounded-xl cursor-pointer ${
                precipitation === "in" ? "bg-[#3C3B5E]" : ""
              }`}
              onClick={() => setPrecipitation("in")}
            >
              Inches (in)
              {precipitation === "in" && <img src={checkmark} alt="checkmark" className="w-5 h-5" />}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
