import React, {Component} from "react";
import "../css/Favorites.css";
import {Button} from "semantic-ui-react";

class Recents extends Component {
    constructor(props) {
        super(props);
        this.getWeather = this.getWeather.bind(this);
    }

    getWeather(event) {
        this.props.callBackFromParent(event.target.value);
    }

    render() {
        let cityElements = this.props.recentCities.map((city) => {
            return <Button className="Favorites-btn" size="tiny" value={city} key={`${city}-button`} onClick={this.getWeather} content={city}/>;
        });

        return (
            <div className="Favorites">
                <h3 className="Favorites-title">Recent searches</h3>
                <div className="Favorites-button-container">
                    {cityElements}
                </div>
            </div>
        );
    }
}

export default Recents;
