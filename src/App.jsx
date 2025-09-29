
import { useEffect, useState } from 'react'
import './App.css'
import DailyForecast from './components/DailyForecast'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HourlyForecast from './components/HourlyForecast'
import SubCloud from './components/SubCloud'

function App() {
  // const [weather, setWeather] = useState(null); // Holds result from Open-Meteo

  // Example callback to handle place selection (in HeroSection)
  // const handlePlaceSelect = async (place) => {
  //   const data = await fetchWeather(place.latitude, place.longitude);
  //   setWeather(data);
  // };
  
  const [weatherData, setWeatherData] = useState(null);

    // Units
    const [temperatureUnit, setTemperatureUnit] = useState("celsius"); // celsius | fahrenheit
    const [windUnit, setWindUnit] = useState("kmh");                   // kmh | mph
    const [precipUnit, setPrecipUnit] = useState("mm");                // mm | in
  async function fetchWeather() {
    try {
      const url =
        "https://api.weatherapi.com/v1/forecast.json?key=c72552d6953b41398d0105345251609&q=Berlin&days=7&aqi=no&alerts=no";
      const res = await fetch(url);
      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!weatherData) return <p className="text-white">Loading weather…</p>;


  return (
    <>
      <div className='bg-[#02012C] text-white h-[1000px] p-3  '>
        <div className='flex flex-col  '>
        <Header   temperature={temperatureUnit}
        setTemperature={setTemperatureUnit}
        wind={windUnit}
        setWind={setWindUnit}
        precipitation={precipUnit}
        setPrecipitation={setPrecipUnit}/>
        <HeroSection weatherData={weatherData} temperatureUnit={temperatureUnit}/>
        <SubCloud  weatherData={weatherData}  temperatureUnit={temperatureUnit}
        windUnit={windUnit}
        precipUnit={precipUnit}/>
        <DailyForecast forecast={weatherData.forecast.forecastday} temperatureUnit={temperatureUnit}/>
        </div>
      <div className='flex ml-300 mt-[-620px]'>
      <HourlyForecast forecast={weatherData.forecast.forecastday[0].hour} temperatureUnit={temperatureUnit}/>
      </div>
   
      </div>
       
    </>
  )
}

export default App
