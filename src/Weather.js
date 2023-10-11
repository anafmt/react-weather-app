import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather (props){
    const [weatherData, setWeatherData] = useState ({ready: false});


    function handleResponse (response) {
        console.log(response.data)
        setWeatherData({
            ready:true,
            temperature:response.data.temperature.current,
            humidity:response.data.temperature.humidity,
            wind:response.data.wind.speed,
            description:response.data.condition.description,
            city:response.data.city,
            date:"Wednesday 07:00",
            iconUrl:`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-day.png`,
        });
    }


if (weatherData.ready) {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left" />
                        <span className="float-left">
                            <span className="temperature">{Math.round(weatherData.temperature)}</span> <span className="unit">°C</span>
                        </span>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {Math.round(weatherData.wind)} Km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
 } else {

    const apiKey = "da34a047131b20d5faab7d8tfo459827"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    
    return "vvv...";

} }