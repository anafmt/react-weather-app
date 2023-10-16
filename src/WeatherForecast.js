import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast (props) {

    function handleResponse (response) {
        console.log(response.data);
    }

        let apiKey = "da34a047131b20d5faab7d8tfo459827";
        let city = props.city;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);


    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <WeatherIcon code="clear-sky-day" size={36} /> 
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">
                        19°
                        </span>
                        <span className="WeatherForecast-temperature-min">
                        10°
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}