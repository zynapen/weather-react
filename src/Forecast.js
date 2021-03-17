import React, { useState } from "react";
import ForecastPreview from "./ForecastPreview";
import axios from "axios";

export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
  
    function handleForecastResponse(response) {
      setForecast(response.data);
      setLoaded(true);
    }
  
    if (loaded && props.city === forecast.city.name) {
      return (
        <div className="row justify-content-md-center ">
          <ForecastPreview data={forecast.list[0]} />
          <ForecastPreview data={forecast.list[1]} />
          <ForecastPreview data={forecast.list[2]} />
          <ForecastPreview data={forecast.list[3]} />
          <ForecastPreview data={forecast.list[4]} />
          <ForecastPreview data={forecast.list[5]} />
        </div>
      );
    } else {
      let apiKey = "ca63b87c7bc13a6ceda04d4787208678";
      let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
      axios.get(url).then(handleForecastResponse);
  
      return null;
    }
  }