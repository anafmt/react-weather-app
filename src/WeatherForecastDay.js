import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay (props) {

    function maxTemperature() {
        let temperature = Math.round(props.day.temperature.maximum)
        return `${temperature}`
    }

    function minTemperature() {
        let temperature = Math.round(props.day.temperature.minimum)
        return `${temperature}`
    }


    function day() {
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        let date = new Date(props.day.time * 1000);
        let day = days[date.getDay()];

   

        return day;
    }

    return (
        <div className="WeatherForecastDay">
            <div className="WeatherForecast-day mb-2">
            {day()}
            </div>
            <WeatherIcon code={props.day.condition.icon} size={36} /> 
            <div className="WeatherForecast-temperatures mt-2">
                <span className="WeatherForecast-temperature-max">
                {maxTemperature()}°
                </span>
                <span className="WeatherForecast-temperature-min">
                {minTemperature()}°
                </span>
            </div>
        </div>
    )
}