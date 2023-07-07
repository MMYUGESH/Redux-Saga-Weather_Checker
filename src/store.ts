import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import weatherReducer, { WeatherState } from './reducer';
import weatherSaga from './sagas';



export type RootState = {
    weather: WeatherState;

};


const rootReducer = combineReducers({
    weather: weatherReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(weatherSaga);

export default store;