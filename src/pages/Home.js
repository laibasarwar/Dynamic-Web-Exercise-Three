import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
// import {useSearchParams} from "react-router-dom";
// import WeatherCard from ".weatherCard";

import { WEATHER_APP_API_KEY } from "../API_KEYS";

const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=${WEATHER_APP_API_KEY}`;

function Home() {
  const [weatherData, setWeatherData] = useState({});

  //Query open weather apo fpr Weather Data
  //make request to OpenWeather based on city

  //Display this weather data in our app

  //Cities: Seoul, Chicago, Orlando, Bogota
  useEffect(() => {
    axios
      .get(openWeatherURL)
      .then(function (response) {
        console.log(response);
        setWeatherData(response.data);
      })
      .catch(function (error) {
        console.warn(error);
        setWeatherData({});
      });
  }, []);

  console.log("state value", weatherData);

  const { temp, humidity, hightemp, lowtemp } = useMemo(() => {
    const weatherMain = weatherData.main || {};
    return {
      temp: weatherMain.temp,
      humidity: weatherMain.humidity,
      hightemp: weatherMain.temp_max,
      lowtemp: weatherMain.temp_min,
    };
  }, [weatherData]);

  return (
    <div>
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

export default Home;
