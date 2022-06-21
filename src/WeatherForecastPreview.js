import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tueday",
      "Wednesday",
      "Thurday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  return (
    <div className="WeatherForecastPreview">
      <div>{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={38} />
      <span>{maxTemp()}</span>
      <span>{minTemp()}</span>
    </div>
  );
}
