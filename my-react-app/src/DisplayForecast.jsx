import './DisplayForecast.css';
import axios from 'axios';

export default function DisplayForecast(props) {
    function handleResponse(response) {
        console.log(response.data)
    }

    let apiKey = "04dbc8004716437tab5bc0bfo1baf277";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return (
    <div className="DisplayForecast">
        <div className="row mt-3">
            <div className="col">
                <div className="forecast-day">Sat</div>
                <div className="forecast-icon">☀️</div>
                <div className="forecast-temperatures">
                    <span className="forecast-temperature-max me-1">26°</span>
                    <span className="forecast-temperature-min">13°</span>
                </div>
            </div>
        </div>
    </div>
    )
}