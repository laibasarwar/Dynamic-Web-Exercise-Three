import React from "react";

function WeatherCard({
  city,
  cloudiness,
  humidity,
  highTemp,
  lowTemp,
  weatherType,
  windSpeed,
  currentTemp,
}) {
  return (
    <div className="WeatherCard">
      <h2>{city}</h2>
      <div className="WeatherCard-One">
        <p>Current Temp: {currentTemp}%</p>
        <p>High Temp: {highTemp}%</p>
        <p>Low Temp: {lowTemp}%</p>
      </div>
      <div className="WeatherCard-Two">
        <p>Cloudliness: {cloudiness}%</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed}%</p>
        <p>Weather Type: {weatherType}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
