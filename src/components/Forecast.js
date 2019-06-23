import React, { Component } from "react";
import "../css/WeatherCard.css";
import "../css/weather-icons.min.css";
import { Button } from "semantic-ui-react";

class Forecast48h extends Component {
    constructor(props) {
        super(props);
    }

    degToCompass(num) {
        let val = Math.floor((num / 22.5) + 0.5);
        let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }

    render() {
        const { city, weather, country, temp, wind, windDirection } = this.props.weatherData;
        const celcius = Math.round(temp - 273.15);
        const km = Math.round(wind* 1.609);

        const windCompass = this.degToCompass(windDirection);


        const saveBtn = (
            <Button
                positive
                size="mini"
                onClick={this.saveDataToLocalStorage}
                content="Save to favorites"
            />
        );
        const deleteBtn = (
            <Button
                negative
                size="mini"
                onClick={this.deleteDataFromLocalStorage}
                content="Delete from favorites"
            />
        );
        const existingCities = this.props.savedCities;

        return (
            <div className="WeatherCard">
                <h1 className="WeatherCard-degrees">{celcius}°</h1>
                <p>{km} kph {windCompass}</p>
                <div className="WeatherCard-icon-container">
                    <i className={`wi wi-owm-${weather[0].id} WeatherCard-icon`} />
                    <p>{weather[0].main}</p>
                </div>
                <h2 className="WeatherCard-city">
                    {city}, {country}
                </h2>
                {existingCities.includes(city) ? deleteBtn : saveBtn}
            </div>
        );
    }
}

export default Forecast48h;
