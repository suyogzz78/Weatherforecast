// import React from "react";
import searchicon from "../assets/search.png";
import clear from "../assets/clear.png";
import wind from "../assets/wind.png";
import humidity from "../assets/humidity.png";
import { useEffect } from "react";
import { useState } from "react";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(false);

  const theicons = {
    "01d": clear,
    "01n": clear,
    "02d": clear,
    "02n": clear,
    "03d": clear,
    "03n": clear,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const icon = theicons[data.weather[0].icon] || clear;
      setWeatherData({
        temperature: Math.floor(data.main.temp),
        city: data.name,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
        icon: icon,
      });
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    search("Pokhara");
  }, []);

  return (
    <div className="bg-violet-900 min-h-screen">
      <h1 className="text-white text-3xl font-bold text-center p-10">
        Weather Forecast
      </h1>

      {/* Card */}
      <div className="flex flex-col items-center gap-6 p-6 bg-gradient-to-r from-purple-700 to-purple-400 w-[400px] mx-auto rounded-md border-2 border-black">
        {/* Search bar */}
        <div className="flex flex-row items-center gap-3 w-full justify-center">
          <input
            type="text"
            placeholder="Enter city name"
            className="w-full p-2 rounded-full outline-none border-2 pl-4 text-center"
          />

          <img
            src={searchicon}
            alt="search"
            className="h-9 w-9 bg-white rounded-full p-2 cursor-pointer"
          />
        </div>

        {/* Weather Image */}
        <div className="flex flex-col items-center">
          <img src={weatherData.icon} alt="clear weather" className="w-32 h-32" />
          <div>
            <h2 className="text-white text-4xl font-semibold pl-4">{weatherData.temperature}°C</h2>
            <p className="text-white text-lg mt-2 ">{weatherData.city}</p>
          </div>
        </div>
        <div className="flex justify-between w-full px-10 ">
          {/* Wind */}
          <div className="flex flex-row items-center gap-3">
            <img src={wind} className="w-10 h-10" />
            <div>
              <h2 className="text-white text-md font-semibold">{weatherData.windSpeed} km/h</h2>
              <p className="text-white text-sm">Wind Speed</p>
            </div>
          </div>

          {/* Humidity */}
          <div className="flex flex-row items-center gap-3">
            <img src={humidity} className="w-10 h-10" />
            <div>
              <h2 className="text-white text-md font-semibold">{weatherData.humidity}%</h2>
              <p className="text-white text-sm">Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
