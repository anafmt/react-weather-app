import React, { useEffect, useState } from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect (() => {
        setLoaded(false);
    }, [props.city]);


    function handleResponse (response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function load () {
        let apiKey = "da34a047131b20d5faab7d8tfo459827";
        let city = props.city;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    }
    

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if (index < 5) {
                            return (                    
                                <div className="col" key={index}>
                                <WeatherForecastDay day={dailyForecast} />
                            </div>
                             );
                        } else {
                            return null;
                        }     
                    })}

                </div>
            </div>
        )
      
    } else {
        load();

        return null;
    }
    }
