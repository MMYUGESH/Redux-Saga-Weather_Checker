import { call, put, takeLatest } from 'redux-saga/effects';
import {
    FETCH_WEATHER_REQUEST,
    fetchWeatherSuccess,
    fetchWeatherFailure,
    WeatherData,
} from './actions';
import axios from 'axios';

// API function for fetching weather data
const fetchWeatherAPI = (city: string): Promise<WeatherData> => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6623f165181fcc12d0cc18236518daf`)
        .then((response) => response.json());
};

// Worker saga for fetching weather data
function* fetchWeatherSaga(action: any) {
    try {
        const weatherData: WeatherData = yield call(
            fetchWeatherAPI,
            action.payload
        );
        yield put(fetchWeatherSuccess(weatherData));
    } catch (error: any) {
        yield put(fetchWeatherFailure(error));
    }
}

// Watcher saga
function* weatherSaga() {
    yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeatherSaga);
}

export default weatherSaga;