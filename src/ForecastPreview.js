import React from "react";
import Icons from "./Icons";
import Unit from "./Unit";
import moment from "moment";

export default function ForecastPreview(props) {
  return (
    <div className="ForecastPreview col-auto m-1 p-3 border border-primary border-2 rounded shadow">
      <Icons code={props.data.weather[0].icon} />
      <br />
      {moment(props.data.dt *1000).format("ddd h A")}
      <br />
      <Unit celsius={props.data.main.temp} />
    </div>
  );
}