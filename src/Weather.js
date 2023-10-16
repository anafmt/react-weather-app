import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import { FallingLines } from  'react-loader-spinner';
import WeatherForecast from "./WeatherForecast";

export default function Weather (props){
    const [weatherData, setWeatherData] = useState ({ready: false});
    const [city, setCity] = useState (props.defaultCity)

    function handleResponse (response) {
        setWeatherData({
            ready:true,
            temperature:response.data.temperature.current,
            humidity:response.data.temperature.humidity,
            wind:response.data.wind.speed,
            description:response.data.condition.description,
            city:response.data.city,
            date:new Date(response.data.time * 1000),
            icon:response.data.condition.icon,
        });
    }

    function search () {

        const apiKey = "da34a047131b20d5faab7d8tfo459827"
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange (event) {
        setCity (event.target.value);
    }

if (weatherData.ready) {
    return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
            <br />
            <WeatherForecast city={weatherData.city} />
        </div>
    )
 } else {
    search();
    return <FallingLines
    color="orange"
    width="100"
    visible={true}
    ariaLabel='falling-lines-loading'
  />;

} }