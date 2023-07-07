import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import WeatherApp from './WeatherApp';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <WeatherApp />
    </Provider>
  );
};

export default App;