import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";
import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div>
        <h1>Weather Search</h1>
        <h2>{props.data.city}</h2>
        <h3>
          <DateFormat date={props.data.date} />
        </h3>
        <h3>
          Humidity: {props.data.humidity}%, Wind: {props.data.wind}km/h
        </h3>
      </div>
      <div>
        <WeatherIcon code={props.data.icon} size={52} />
        <span className="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span ClassName="unit">°C</span>
      </div>
    </div>
  );
}
