import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { WEATHER_APP_API_KEY } from "../API_KEYS";
import Header from "../components/Header";
import WeatherCard from "../components/weatherCard";

const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=${WEATHER_APP_API_KEY}`;

function Home() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Orlando");
  const [searchParams] = useSearchParams();
  // Cities: Seoul, Chicago, Orlando, Bogota

  console.log("searchParams", searchParams.get("city"));

  useEffect(() => {
    const cityToQuery = searchParams.get("city") || city;
    setCity(cityToQuery);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_API_KEY}&units=imperial`
      )
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

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    const weatherMain = weatherData.main || {};
    const weatherClouds = weatherData.clouds || {};
    return {
      cloudiness: weatherClouds.all,
      currentTemp: Math.round(weatherMain.temp),
      humidity: weatherMain.humidity,
      highTemp: Math.round(weatherMain.temp_max),
      lowTemp: weatherMain.temp_min,
      windSpeed: weatherData.wind && weatherData.wind.speed,
      weatherType: weatherData.weather && weatherData.weather[0].main,
    };
  }, [weatherData]);

  return (
    <div>
      <Header />
      <h1>Weather App</h1>
      <WeatherCard
        city={city}
        cloudiness={cloudiness}
        currentTemp={currentTemp}
        highTemp={highTemp}
        humidity={humidity}
        lowTemp={lowTemp}
        weatherType={weatherType}
        windSpeed={windSpeed}
      />
    </div>
  );
}

export default Home;
