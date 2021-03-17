import React from "react";
import Icons from "./Icons";
import Unit from "./Unit";
import moment from "moment";

export default function WeatherDescription(props) {
  return (
    <div className="WeatherDescription row justify-content-md-center border border-primary border-2 rounded shadow">
     <div className="col-md-auto"><Icons code={props.data.icon} /><Unit celsius={props.data.temperature} />
     <ul>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
     </div>
     <div className="col-md-auto">
      <h1>{props.data.city}</h1>
          {moment().format('dddd')} {moment().format('LT')}
        <p className="text-capitalize">{props.data.description}</p>
        </div>
</div>
  );
}