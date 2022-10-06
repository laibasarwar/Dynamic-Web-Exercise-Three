import React, { useEffect, useState } from "react";
import axios from "axios";
import { WEATHER_APP_API_KEY } from "../API_KEYS";

const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=?q={Orlando}&appid=${WEATHER_APP_API_KEY}`;

function Home() {
  const [weatherData, setWeatherData] = useState({});
  //Query open weather apo fpr Weather Data
  //make request to OpenWeather based on city

  //Display this weather data in our app

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
  return (
    <div>
      <h1>Weather App</h1>
      <p>{weatherData.name}</p>
      <p>{openWeatherURL}</p>
    </div>
  );
}

export default Home;
