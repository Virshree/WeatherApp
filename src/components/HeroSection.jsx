import React, { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";
import loadingIcon from "../assets/images/icon-loading.svg";
import weather from "../assets/images/bg-today-large.svg";
import weatherMobile from "../assets/images/bg-today-small.svg";

function HeroSection({ weatherData, temperatureUnit, onPlaceSelect }) {
  const [searchPlace, setSearchPlace] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  // 🔹 Handle Search
  const handleSearch = async () => {
    if (!searchPlace.trim()) return;
    setLoading(true);
    setResults([]);

    try {
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        searchPlace
      )}&count=5&language=en&format=json`;

      const res = await fetch(geoUrl);
      const data = await res.json();

      if (!data.results) {
        setResults([]);
        return;
      }

      const weatherResults = await Promise.all(
        data.results.map(async (place) => {
          try {
            const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=c72552d6953b41398d0105345251609&q=${place.latitude},${place.longitude}`;
            const weatherRes = await fetch(weatherUrl);
            const weatherData = await weatherRes.json();

            return {
              id: place.id,
              name: place.name,
              country: place.country,
              lat: place.latitude,
              lon: place.longitude,
              temp_c: weatherData.current.temp_c,
              temp_f: weatherData.current.temp_f,
              icon: weatherData.current.condition.icon,
            };
          } catch {
            return null;
          }
        })
      );

      setResults(weatherResults.filter(Boolean));
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Format date as: Monday, 29 Sept 2025
  function formatDateCustom(apiDate) {
    const dateObj = new Date(apiDate);
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const dayName = weekdays[dateObj.getDay()];
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    return `${dayName}, ${day} ${month}, ${year}`;
  }

  return (
    <div className="w-full max-w-[780px] mx-auto px-4 mt-5">
      {/* Heading */}
      <h3 className="text-white text-3xl whitespace-nowrap  overflow-x-auto sm:text-4xl md:text-5xl font-bold leading-snug text-center">
        How’s the sky looking today?
      </h3>

      {/* Search Input + Button */}
      <div className="flex flex-col sm:flex-row justify-center mt-6 gap-3">
        <div className="relative bg-[#262540] rounded-xl text-[#D4D3D9] w-full sm:w-[526px] h-[56px] flex items-center">
          <img src={searchIcon} alt="search-icon" className="absolute left-4 w-5 h-5" />
          <input
            type="text"
            value={searchPlace}
            onChange={(e) => setSearchPlace(e.target.value)}
            placeholder="Search for a place"
            className="pl-12 pr-10 w-full bg-transparent outline-none text-md"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          {searchPlace && (
            <button
              onClick={() => setSearchPlace("")}
              className="absolute right-3 text-[#D4D3D9] text-lg hover:text-white"
            >
              ×
            </button>
          )}
        </div>

        <button
          onClick={handleSearch}
          className="bg-[#4658D9] text-white w-full sm:w-[114px] h-[56px] text-lg md:text-xl rounded-xl hover:bg-[#5a6df0]"
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="mt-4 flex justify-center items-center gap-2 text-[#D4D3D9]">
          <img src={loadingIcon} alt="loading" className="w-5 h-5 animate-spin" />
          <span>Searching...</span>
        </div>
      )}

      {/* Search Results */}
      {!loading && results.length > 0 && (
        <div className="mt-4 bg-[#262540] text-left p-3 mx-auto rounded-xl text-[#D4D3D9] w-full sm:w-[526px]">
          {results.map((place) => (
            <div
              key={place.id}
              className="p-2 border-b border-[#3C3B5E] cursor-pointer hover:bg-[#3C3B5E] flex justify-between items-center"
              onClick={() => onPlaceSelect(place.lat, place.lon)}
            >
              <div>
                <strong>{place.name}</strong>, {place.country}
                <div className="text-sm text-gray-300">
                  {temperatureUnit === "celsius"
                    ? `${Math.round(place.temp_c)}°C`
                    : `${Math.round(place.temp_f)}°F`}
                </div>
              </div>
              <img src={`https:${place.icon}`} alt="icon" className="w-8 h-8" />
            </div>
          ))}
        </div>
      )}

      {/* Weather Banner */}
      {weatherData && (
        <div className="relative w-full h-[288px] mt-6">
          {/* Desktop & Mobile Images */}
          <img src={weather} alt="weatherImg" className="hidden md:block w-full h-full object-cover rounded-xl" />
          <img src={weatherMobile} alt="weatherImgMobile" className="block md:hidden w-full h-full object-cover rounded-xl" />

          {/* Overlay: Location + Icon + Temp */}
          <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-center md:items-start px-6 md:px-10 py-6">
            {/* Location & Date */}
            <div className="flex flex-col text-center md:text-left mt-6 md:mt-20">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                {weatherData.location?.name}, {weatherData.location?.country}
              </h2>
              <span className="text-white text-sm md:text-md">
                {formatDateCustom(weatherData.location.localtime)}
              </span>
            </div>

            {/* Weather Icon & Temperature */}
            <div className="flex flex-col items-center md:items-start mt-6 md:mt-20">
              <img
                src={`https:${weatherData.current.condition.icon}`}
                alt="weatherIcon"
                className="object-cover rounded-xl w-12 h-12 md:w-16 md:h-16"
              />
              <span className="text-4xl md:text-6xl font-semibold mt-4 md:mt-6">
                {temperatureUnit === "celsius"
                  ? `${Math.round(weatherData.current.temp_c)}°C`
                  : `${Math.round(weatherData.current.temp_f)}°F`}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
