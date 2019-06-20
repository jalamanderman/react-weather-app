import React, { Component } from "react";
import "../css/WeatherCard.css";
import "../css/weather-icons.min.css";
import { Button } from "semantic-ui-react";

class WeatherCard extends Component {
  constructor(props) {
    super(props);

    this.saveDataToLocalStorage = this.saveDataToLocalStorage.bind(this);
    this.deleteDataFromLocalStorage = this.deleteDataFromLocalStorage.bind(this);
  }

  deleteDataFromLocalStorage() {
    const existingCities = JSON.parse(localStorage.getItem("cityList"));
    const indexOfCity = existingCities.indexOf(this.props.weatherData.city);

    existingCities.splice(indexOfCity, 1);
    localStorage.setItem("cityList", JSON.stringify(existingCities));
    this.props.callBackFromParent(existingCities);
  }

  saveDataToLocalStorage() {
    // Get data from LocalStorage if there is any and push back with new city
    const existingCities = JSON.parse(localStorage.getItem("cityList")) || [];
    existingCities.push(this.props.weatherData.city);
    localStorage.setItem("cityList", JSON.stringify(existingCities));
    this.props.callBackFromParent(existingCities);

    // //now remove the city from recents list
    // const recentCities = JSON.parse(localStorage.getItem("recentList"));
    // const indexOfCity = recentCities.indexOf(this.props.weatherData.city);
    // recentCities.splice(indexOfCity, 1);
    // localStorage.setItem("recentList", JSON.stringify(recentCities));

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

export default WeatherCard;
