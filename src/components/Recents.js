import React, {Component} from "react";
import "../css/Recents.css";
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
            <div className="Recents">
                <h4 className="Recents-title">Recent searches</h4>
                <div className="Recents-button-container">
                    {cityElements}
                    {/*<Button className="Favorites-btn" size="tiny" value={'Clear'} key={`{'Clear'}-button`} onClick={this.getWeather} content={'Clear'}/>*/}
                </div>
            </div>
        );
    }
}

export default Recents;
