import React from "react";
import WeatherIcon from "./WeatherIcon";

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
    <div
      className="WeatherCard"
      style={{ backgroundColor: `rgba(0,0,255,${cloudiness / 100})` }}
    >
      <h2>{city}</h2>
      <div className="WeatherCard--weatherType">
        <WeatherIcon weatherType={weatherType} />
        <h4>{weatherType}</h4>
      </div>
      <div className="WeatherCard-One">
        <p>Current: {currentTemp}%</p>
        <p>High: {highTemp}%</p>
        <p>Low: {lowTemp}%</p>
      </div>
      <div className="WeatherCard-Two">
        <p>Cloudliness: {cloudiness}%</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed}%</p>
      </div>
    </div>
  );
}

export default WeatherCard;
