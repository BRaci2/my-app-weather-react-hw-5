import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";
import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row">
      <div className="col-6">
      <div>
        <h2>{props.data.city}</h2>
        <h3>
          <DateFormat date={props.data.date} />
        </h3>
        <h3>
          Humidity: {props.data.humidity}% Wind: {props.data.wind}km/h
        </h3>
      </div>
      </div>
      <div className="col-6 mt-3">
        <WeatherIcon code={props.data.icon} size={52} />
        <span className="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="unit">°C</span>
      </div>
      </div>
    </div>
  );
}
