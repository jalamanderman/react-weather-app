import React, { Component } from "react";
import "../css/WeatherCard.css";
import "../css/weather-icons.min.css";

class Forecast48h extends Component {

    degToCompass(num) {
        let val = Math.floor((num / 22.5) + 0.5);
        let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }

    render() {
        const { date, temp, weather, wind, windDir} = this.props.forecast[0];

        const celcius = Math.round(temp - 273.15);
        const km = Math.round(wind* 1.609);
        const windCompass = this.degToCompass(windDir);

        // Create a new date from the passed date time
        const dateNice = new Date(date * 1000);
        // Hours part from the timestamp
        let hours = date.getHours();




        return (
        <div className="WeatherCard">
            <h2 className="">°</h2>

            <div className="WeatherCard-icon-container">
                <i className={`wi wi-owm- WeatherCard-icon`}/>

            </div>
            <h2 className="WeatherCard-city">

            </h2>

            <p>{dateNice}</p>
            <p>{celcius}</p>
            <p>{weather}</p>
            <p>{km} kph {windCompass}</p>

        </div>
        );
    }
}

export default Forecast48h;
