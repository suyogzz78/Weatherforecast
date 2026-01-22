import React from "react";

const Weather = () => {
  return (
    <div className="bg-purple-600 min-h-screen ">
      <div className="flex flex-row md:flex-col">
        <h1 className="text-white text-3xl font-bold text-center p-5">
          Weather Forecast App
        </h1>

        <input
          type="text"
          placeholder="Enter city name"
          className="w-1-4 mx-auto p-2 rounded-md text-center"
        />
      </div>
    </div>
  );
};

export default Weather;
