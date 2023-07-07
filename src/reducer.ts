import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
    WeatherData
} from './actions';

export interface WeatherState {
    weatherData: WeatherData | null;
    loading: boolean;
    error: string | null;
}

const initialState: WeatherState = {
    weatherData: null,
    loading: false,
    error: null,
};

const weatherReducer = (
    state = initialState,
    action: any
): WeatherState => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                weatherData: action.payload,
            };
        case FETCH_WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default weatherReducer;