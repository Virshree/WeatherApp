import React, { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";
import loadingIcon from "../assets/images/icon-loading.svg";
import weather from "../assets/images/bg-today-large.svg";
function HeroSection() {
  const [searchPlace, setSearchPlace] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]); // list of matching locations

  const handleSearch = async () => {
    if (!searchPlace.trim()) return;
    setLoading(true);
    setResults([]);

    try {
      // ✅ 1. Call Open-Meteo Geocoding API
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        searchPlace
      )}&count=5&language=en&format=json`;

      const res = await fetch(geoUrl);
      const data = await res.json();

      if (data.results) {
        setResults(data.results);
      } else {
        setResults([]);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[713px] mx-auto text-center">
      <h3 className="text-white text-5xl font-bold">
        How’s the sky looking today?
      </h3>

      {/* Input + Button */}
      <div className="flex justify-center mt-6">
        <div className="relative bg-[#262540] rounded-xl text-[#D4D3D9] w-[526px] h-[56px] flex items-center">
          <img
            src={searchIcon}
            alt="search-icon"
            className="absolute left-4 w-5 h-5"
          />
          <input
            type="text"
            required
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
          className="ml-3 bg-[#4658D9] text-white w-[114px] cursor-pointer h-[56px] text-xl rounded-xl hover:bg-[#5a6df0]"
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

      {/* Results */}
      {!loading && results.length > 0 && (
        <div className="mt-4 bg-[#262540] text-left p-3 ml-10 rounded-xl text-[#D4D3D9] w-[526px]">
          {results.map((place) => (
            <div
              key={place.id}
              className="p-2 border-b border-[#3C3B5E] cursor-pointer hover:bg-[#3C3B5E]"
              onClick={() =>
                alert(
                  `Selected: ${place.name}, ${place.country}\nCoordinates: ${place.latitude}, ${place.longitude}`
                )
              }
            >
              <strong>{place.name}</strong>
              {place.admin1 ? `, ${place.admin1}` : ""}, {place.country}
            </div>
          ))}

        
        </div>
      )}

      {/* No results */}
      {!loading && searchPlace && results.length === 0 && (
        <p className="mt-4 text-[#D4D3D9]">No locations found.</p>
      )}
        <div className="relative w-[780px] h-[288px] right-44  mt-6 ">
            <img src={weather} alt="weatherImg" className="w-full h-full object-cover rounded-xl "/>
           <div className="absolute inset-0 flex gap-80 right-39 mt-10 ml-10  ">
           <div className="flex flex-col mt-20 text-left">
           <h2 className=" text-white text-2xl font-bold w-[210px]">Berlin, Germany</h2>
            <span className="  text-white text-md ">Tuesday, Aug 5, 2025</span>
           </div>
     
           <span className="text-6xl font-semibold mt-20 m-25">20°</span>
           </div>
          
            </div>
    </div>
  );
}

export default HeroSection;
