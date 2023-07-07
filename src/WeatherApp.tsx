import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherRequest, WeatherData } from './actions';
import { RootState } from './store';
import './WeatherApp.css';

const WeatherApp: React.FC = () => {

    const [city, setCity] = useState('');

    const dispatch = useDispatch();
    const weatherData = useSelector((state: RootState) => state.weather.weatherData);
    console.log(weatherData);
    const loading = useSelector((state: RootState) => state.weather.loading);
    const error = useSelector((state: RootState) => state.weather.error);

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(fetchWeatherRequest(city));
    };

    return (
        <div className="weather">
            <div className="weather-app">
                <h2 className="weather-app__title">Weather App</h2>
                <form className="weather-app__form" onSubmit={handleSubmit}>
                    <input
                        className="weather-app__input"
                        type="text"
                        name="city"
                        placeholder="Enter city name"
                        value={city}
                        onChange={handleInputChange}
                        required
                    />
                    <button className="weather-app__button" type="submit">Get Weather</button>
                </form>
                {loading && <p className="weather-app__message">Loading...</p>}
                {error && <p className="weather-app__message error">Error: {error}</p>}
                {weatherData && (
                    <div className="weather-app__details">
                        <h3 className="weather-app__details-title">Weather Details</h3>
                        <p className="weather-app__details-item">City: {weatherData.name}</p>
                        <p className="weather-app__details-item">Latitude: {weatherData.coord.lat}</p>
                        <p className="weather-app__details-item">Longitude: {weatherData.coord.lon}</p>
                        <p className="weather-app__details-item">Timezone: {weatherData.timezone}</p>
                        <p className="weather-app__details-item">Wind Speed: {weatherData.wind.speed}</p>
                    </div>
                )}
            </div>
        </div>
    )
};

export default WeatherApp