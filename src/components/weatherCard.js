import React from "react";

function WeatherCard({}) {
  return (
    <div className="WeatherCard">
      <h1>Weather App</h1>
      <h2>{weatherData.name}</h2>
      <p>Current Temperature: {temp}%</p>
      <p>High Temperature: {hightemp}%</p>
      <p>Low Temperature: {lowtemp}%</p>
      <p>Cloudliness: {weatherData.clouds && weatherData.clouds.all}%</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {weatherData.wind && weatherData.wind.speed}%</p>
      <p>Weather Type: {weatherData.weather[0].main}</p>
    </div>
  );
}

export default WeatherCard;
