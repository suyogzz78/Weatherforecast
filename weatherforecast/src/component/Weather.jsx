// import React from "react";
import searchicon from "../assets/search.png";
import clear from "../assets/clear.png";
import wind from "../assets/wind.png";
import humidity from "../assets/humidity.png";
import { useEffect } from "react";

const Weather = () => {


  const search=async(city) => {

      try {

        const url  = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log("error");
      }
      
    }

    useEffect(() => {
      search("Kathmandu");
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
          <img src={clear} alt="clear weather" className="w-32 h-32" />
          <div>
            <h2 className="text-white text-4xl font-semibold pl-4">25°C</h2>
            <p className="text-white text-lg mt-2 ">KATHMANDU</p>
          </div>
        </div>
        <div className="flex justify-between w-full px-10 ">
          {/* Wind */}
          <div className="flex flex-row items-center gap-3">
            <img src={wind} className="w-10 h-10" />
            <div>
              <h2 className="text-white text-md font-semibold">18 km/h</h2>
              <p className="text-white text-sm">Wind Speed</p>
            </div>
          </div>

          {/* Humidity */}
          <div className="flex flex-row items-center gap-3">
            <img src={humidity} className="w-10 h-10" />
            <div>
              <h2 className="text-white text-md font-semibold">64%</h2>
              <p className="text-white text-sm">Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
