// Action types
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

// Action creators
export const fetchWeatherRequest = (city: string) => ({
    type: FETCH_WEATHER_REQUEST,
    payload: city,
});

export const fetchWeatherSuccess = (weatherData: WeatherData) => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: weatherData,
});

export const fetchWeatherFailure = (error: string) => ({
    type: FETCH_WEATHER_FAILURE,
    payload: error,
});

// Weather data interface
export interface WeatherData {

    coord: {
        lat: number;
        lon: number;
    };
    timezone: string;
    wind: { speed: number };
    name: string;


}