import React, { useState } from "react";
import WeatherDescription from "./WeatherDescription";
import Forecast from "./Forecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: response.data.dt,
      description: response.data.weather[0].description,
      high: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      low: response.data.main.temp_min,
      icon: response.data.weather[0].icon,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      temperature: response.data.main.temp,
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
    const apiKey = "ca63b87c7bc13a6ceda04d4787208678";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-md-center">
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter a City"
                className="form-control shadow"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100 shadow"
              />
            </div>
          </div>
        </form>
        <WeatherDescription data={weatherData} />
        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Thank you for being patient. Please wait :-)";
  }
}