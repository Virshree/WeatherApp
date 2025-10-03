
import { useEffect, useState } from 'react'
import './App.css'
import DailyForecast from './components/DailyForecast'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HourlyForecast from './components/HourlyForecast'
import SubCloud from './components/SubCloud'

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState("celsius");
  const [windUnit, setWindUnit] = useState("kmh");
  const [precipUnit, setPrecipUnit] = useState("mm");

  async function fetchWeather(lat = "52.52", lon = "13.41") { // default Berlin
    try {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=c72552d6953b41398d0105345251609&q=${lat},${lon}&days=7&aqi=no&alerts=no`;
      const res = await fetch(url);
      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  }

  useEffect(() => {
    fetchWeather(); // default load Berlin
  }, []);

  if (!weatherData) return <p className="text-white">Loading weather…</p>;

  return (
    <div className="bg-[#02012C] text-white min-h-screen p-3 flex flex-col items-center ">
      <Header
        temperature={temperatureUnit}
        setTemperature={setTemperatureUnit}
        wind={windUnit}
        setWind={setWindUnit}
        precipitation={precipUnit}
        setPrecipitation={setPrecipUnit}
      />

      <div className="flex flex-col md:flex-row gap-6 ">
        <div className="flex-1  ">
          <HeroSection
            weatherData={weatherData}
            temperatureUnit={temperatureUnit}
            onPlaceSelect={(lat, lon) => fetchWeather(lat, lon)}
          />
          <SubCloud
            weatherData={weatherData}
            temperatureUnit={temperatureUnit}
            windUnit={windUnit}
            precipUnit={precipUnit}
          />
          <DailyForecast
            forecast={weatherData.forecast.forecastday}
            temperatureUnit={temperatureUnit}
          />
        </div>

        <div className="flex-1 order-last md:order-none mt-35">
          <HourlyForecast
            forecast={weatherData.forecast.forecastday[0].hour}
            temperatureUnit={temperatureUnit}
          />
        </div>
      </div>
    </div>
  );
}

export default App
