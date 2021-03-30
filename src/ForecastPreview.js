import React from "react";
import Icons from "./Icons";
import moment from "moment";
import "./ForecastPreview.css";

export default function ForecastPreview(props) {
  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°F`;
  }

  return (
    <div className="ForecastPreview col justify-content-md-center m-1 p-2 shadow">
      <Icons code={props.data.weather[0].icon} />
      <br />
      {moment(props.data.dt *1000).format("ddd h A")}
      <br />
      {temperature()}
    </div>
  );
}