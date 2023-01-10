import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react';
import axios from 'axios';
import ReactAnimatedWeather from 'react-animated-weather/build/ReactAnimatedWeather';

export default function Weather() {
    let apiKey = "d57ba12fe2c36fb7d6e4a542d490147c";
    let [name , setName] = useState("");
    let [weather , setWeathet] = useState({});

    function displayWeather(response){
        setName(response.data.name);
        setWeathet({
            temperature: Math.round(response.data.main.temp),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind:  Math.round(response.data.wind.speed),
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
          });
    }

    function hadleSearch(event){
        event.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`;
        axios.get(url).then(displayWeather);  
    }
    

    function updateCity(event){
        setName(event.target.value);
    }

    return (
        <div className='Weather-app'>    
            <form className="mb-4" onSubmit={hadleSearch}>
                <div className="d-flex">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type a city.."
                        onChange={updateCity}
                    />
                    <button type="submit" className="btn btn-primary">Search</button>
                    <button className='btn btn-success'>Current</button>
                </div>
            </form>
            <div className="overView-box mb-4">
                <h1>{name}</h1>
                <ul>
                    <li>Tuesday 10:00</li>
                    <li>{weather.description}</li>
                </ul>
            </div>

            <div className="row">
                <div className="col-6 d-flex align-items-center">
                <img src={weather.icon} className="me-2 weatherImg" alt={weather.description} />
                <span className="d-flex">
                    <p className="tempNumbr">{weather.temperature}</p>
                    <div className="units">
                    <a href="/">°C</a> | <a href="/">°F</a>
                    </div>
                </span>
                </div>
                <div className="col-6">
                <ul>
                    <li>Humidity: {weather.humidity}%</li>
                    <li>Wind: {weather.wind} km/h</li>
                </ul>
                </div>
            </div>

            <div className='row mt-5 mb-3'>
                <div class="col">
                    <div className='forecastBox'>
                        <div class="forecast-day">Wed</div>
                        <div class="forecast-icon">
                            <ReactAnimatedWeather
                                icon={"CLEAR_DAY"}
                                color={"gray"}
                                size={40}
                                animate={true}
                            />
                        </div>
                        <div class="forecast-temperature">2°</div>
                    </div>
                </div>
                <div class="col">
                    <div className='forecastBox'>
                        <div class="forecast-day">Thu</div>
                        <div class="forecast-icon">
                            <ReactAnimatedWeather
                                icon={"RAIN"}
                                color={"gray"}
                                size={40}
                                animate={true}
                            />
                        </div>
                        <div class="forecast-temperature">1°</div>
                    </div>
                </div>
                <div class="col">
                    <div className='forecastBox'>
                        <div class="forecast-day">Fri</div>
                        <div class="forecast-icon">
                            <ReactAnimatedWeather
                                icon={"SLEET"}
                                color={"gray"}
                                size={40}
                                animate={true}
                            />
                        </div>
                        <div class="forecast-temperature">0°</div>
                    </div>
                </div>
                <div class="col">
                    <div className='forecastBox'>
                        <div class="forecast-day">Sat</div>
                        <div class="forecast-icon">
                            <ReactAnimatedWeather
                                icon={"CLOUDY"}
                                color={"gray"}
                                size={40}
                                animate={true}
                            />
                        </div>
                        <div class="forecast-temperature">1°</div>
                    </div>
                </div>
                <div class="col">
                    <div className='forecastBox'>
                        <div class="forecast-day">Sun</div>
                        <div class="forecast-icon">
                            <ReactAnimatedWeather
                                icon={"PARTLY_CLOUDY_DAY"}
                                color={"gray"}
                                size={40}
                                animate={true}
                            />
                        </div>
                        <div class="forecast-temperature">2°</div>
                    </div>
                </div>
            </div>
    
        </div>
    )
}