import { useState } from 'react';
import './Weather.css'
import axios from 'axios';
import FormattedDate from './FormattedDate'

export default function Weather() {
    const [isReady, setIsReady] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    function handleResponse(response) {
        setWeatherData({
            city: response.data.city,
            country: response.data.country,
            description: response.data.condition.description,
            icon: response.data.condition.icon_url,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            date: new Date(response.data.time * 1000)
        })
        setIsReady(true)
    }

    if (isReady) {
        return (
        <div className="weather mt-5">
            <form className="search-element mb-4">
                <input type="search" placeholder="Enter city" className="search-input" autoFocus required />
                <input type="submit" value="Search" className="search-button btn btn-primary"/>
            </form>

            <div className="weather-content row">
                <div className="col-8 text-start">
                    <img src={weatherData.icon} alt={weatherData.description} />
                    <span className="temperature">
                        {Math.round(weatherData.temperature)}
                    </span>
                    <span className="temperature-units">
                        °C|°F
                    </span>
                    <span className="weather-details">
                        <ul>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                        </ul>
                    </span>
                </div>
                <div className="col-4 text-end">
                    <div className="city">
                        {weatherData.city}
                    </div>
                    <div className="city-timestamp">
                        <FormattedDate date={weatherData.date} />
                    </div>
                    <div className="condition">
                        {weatherData.description}
                    </div>
                </div>
            </div>
        </div>
    )
    }
 else {
    const apiKey = "04dbc8004716437tab5bc0bfo1baf277";
    let defaultCity = "Berlin";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..."
 }
}