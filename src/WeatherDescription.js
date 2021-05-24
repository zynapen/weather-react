import React from "react";
import Icons from "./Icons";
import Time from "./Time";
import Unit from "./Unit";
import moment from "moment";
import "./WeatherDescription.css"

export default function WeatherDescription(props) {
  return (
    <div className="container">
     <section className="WeatherDescription">
     <h1>{props.data.city}</h1>
          <Time />
        <p className="p-1 text-capitalize fw-bold">{props.data.description}</p>
        <Icons code={props.data.icon} /><Unit fahrenheit={props.data.temperature} />
        </section>

        <section className="WeatherDescription">
        <div className="d-flex justify-content-center flex-wrap">
        <div className="p-3">
          <strong>Wind:</strong> {Math.round(props.data.wind)} mph
          </div>

          <div className="p-3">
            <strong>Visibility:</strong> {Math.round((props.data.visibility) / 914)} mi
          </div>

          <div className="p-3">
            <strong>H:</strong> {Math.round(props.data.high)}° / <strong>L:</strong> {Math.round(props.data.low)}°
         </div>

       <div className="p-3">
         <strong>Humidity:</strong> {Math.round(props.data.humidity)}%
       </div>

       <div className="p-3">
         <strong>Sunrise:</strong> {moment(props.data.sunrise *1000).format('LT')}
         </div>

         <div className="p-3">
           <strong>Sunset:</strong> {moment(props.data.sunset *1000).format('LT')}
         </div>

      </div>
      </section>
</div>
  );
}