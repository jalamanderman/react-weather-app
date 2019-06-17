import React, { Component } from "react";
import "./css/App.css";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Favorites from "./components/Favorites";
import Recents from "./components/Recents";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {
        weather: "",
        city: "",
        country: "",
        temp: 0
      },
      searchDone: false,
      recentCities: [],
      savedCities: [],
      hasSavedCities: false,
      hasRecentCities: false,
      errorMessage: ""
    };

    this.callWeatherData = this.callWeatherData.bind(this);
    this.updateSavedCities = this.updateSavedCities.bind(this);
    this.updateRecentCities = this.updateRecentCities.bind(this);
  }

  callWeatherData(city) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=570a39dcca7a0510c9f57e364bf0fe50`;
    fetch(url)
      .then(handleErrors)
      .then(resp => resp.json())
      .then(data => {
        const weatherObj = {
          weather: data.weather,
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp
        };
        this.setState({
          weatherData: weatherObj,
          searchDone: true,
          errorMessage: ""
        });
      })
      .catch(error => {
        // If an error is catch, it's sent to SearchBar as props
        this.setState({ errorMessage: error.message });
      });

    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
  }

  updateSavedCities(cityArr) {
    // hasCities is set to true if length is more than 0, otherwise false
    const hasCities = cityArr.length > 0;
    this.setState({ savedCities: cityArr, hasSavedCities: hasCities });
  }

  updateRecentCities(recentArr) {
    // hasCities is set to true if length is more than 0, otherwise false
    const hasRecents = recentArr.length > 0;
    this.setState({ recentCities: recentArr, hasRecentCities: hasRecents });
    console.log(recentArr);
  }

  componentWillMount() {
    // See if there's saved/recent cities in localStorage before the App is mounted
    // Tests didn't like parsing when localStorage.getItem was undefined, so this was my solution for it
    let existingCities = JSON.parse(localStorage.getItem("cityList") || "[]");

    if (existingCities.length !== 0) {
      this.setState({
        hasSavedCities: true,
        savedCities: existingCities
      });
    }

    let recentCities = JSON.parse(localStorage.getItem("recentList") || "[]");

    if (recentCities.length !== 0) {
      this.setState({
        hasRecentCities: true,
        recentCities: recentCities
      });
    }
  }

  render() {
    const {
      searchDone,
      weatherData,
      hasSavedCities,
      savedCities,
      errorMessage,
      recentCities,
      hasRecentCities,
    } = this.state;
    
    return (
      <div className="App">
        <SearchBar
          callBackFromParent={this.callWeatherData}
          error={errorMessage}
        />
        {searchDone && (
          <WeatherCard
            weatherData={weatherData}
            savedCities={savedCities}
            callBackFromParent={this.updateSavedCities}
            callBackFromParent={this.updateRecentCities}
          />
        )}
        {hasSavedCities && (
          <Favorites
            savedCities={savedCities}
            callBackFromParent={this.callWeatherData}
          />
        )}
        {hasRecentCities && (
            <Recents
                recentCities={recentCities}
                callBackFromParent={this.callWeatherData}
            />
        )}
      </div>
    );
  }
}

export default App;
