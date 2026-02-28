import './Weather.css'

export default function Weather() {
    return (
        <div className="weather mt-5">
            <form className="search-element mb-4">
                <input type="search" placeholder="Enter city" className="search-input" autoFocus required />
                <input type="submit" value="Search" className="search-button btn btn-primary"/>
            </form>

            <div className="weather-content row">
                <div className="col-8 text-start">
                    <img src="https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg" alt="weather icon"/>
                    <span className="temperature">
                        26
                    </span>
                    <span className="temperature-units">
                        °C|°F
                    </span>
                    <span className="weather-details">
                        <ul>
                            <li>Precipitation: 0%</li>
                            <li>Humidity: 48%</li>
                            <li>Wind: 26 km/h</li>
                        </ul>
                    </span>
                </div>
                <div className="col-4 text-end">
                    <div className="city">
                        Perth
                    </div>
                    <div className="city-timestamp">
                        Saturday 12:00 pm
                    </div>
                    <div className="condition">
                        Sunny
                    </div>
                </div>
            </div>
        </div>
    )
}