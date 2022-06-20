import React, { useState } from "react";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherParameters, setWeatherParameters] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function makeAPICall(response) {
    setWeatherParameters({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "01a738ffcc406d9b10304ab407495deb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(makeAPICall);
  }

  if (weatherParameters.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter city..."
            className="form-input"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" />
        </form>
        <WeatherData data={weatherParameters} />
        <WeatherForecast coordinates={WeatherData.coordinates} />
        <footer>This project was coded by Basia</footer>
      </div>
    );
  } else {
    search();
    return "Loarding...";
  }
}
