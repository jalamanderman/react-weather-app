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
        temp: 0,
        wind: 0,
        windDirection: ""
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

    //get city weather
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=570a39dcca7a0510c9f57e364bf0fe50`;

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=wellington,nz&APPID=570a39dcca7a0510c9f57e364bf0fe50`;


    fetch(url)
      .then(handleErrors)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        const weatherObj = {
          weather: data.weather,
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          wind: data.wind.speed,
          windDirection: data.wind.deg
        };
        this.setState({
          weatherData: weatherObj,
          searchDone: true,
          errorMessage: ""
        });
        //save city to recent cities list
        this.updateRecentCities(data.name);

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

  callForecastData(city) {

    //get city weather

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=wellington,nz&APPID=570a39dcca7a0510c9f57e364bf0fe50`;

    fetch(url)
        .then(handleErrors)
        .then(resp => resp.json())
        .then(data => {
          console.log(data);

          let jsonArray = data.list;
          jsonArray.forEach( function (entry) {
                console.log(entry.dt_txt);
              }
          );
          console.log('hi');

          const forecastObj = {
            weather: data.weather,
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            wind: data.wind.speed,
            windDirection: data.wind.deg
          };
          this.setState({
            weatherData: forecastObj,
            searchDone: true,
            errorMessage: ""
          });
          //save city to recent cities list
          this.updateRecentCities(data.name);

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

  updateRecentCities(recentCity) {

     if (this.state.recentCities.includes(recentCity)) {
       return false;
     } else {
       this.setState({recentCities: this.state.recentCities.concat([recentCity])});
       this.setState({hasRecentCities: true});
     }

    let existingCities = this.state.recentCities;
    localStorage.setItem("recentList", JSON.stringify(existingCities));
  }

  componentWillMount() {
    // See if there's saved/recent cities in localStorage before the App is mounted
    let existingCities = JSON.parse(localStorage.getItem("cityList") || "[]");

    if (existingCities.length !== 0) {
      this.setState({
        hasSavedCities: true,
        savedCities: existingCities
      });
      // Set the first favourite on display
      this.callWeatherData(existingCities[0]);
    }

    let existingRecentCities = JSON.parse(localStorage.getItem("recentList") || "[]");

    if (existingRecentCities.length !== 0) {
      this.setState({
        hasRecentCities: true,
        recentCities: existingRecentCities
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
