import "config/ReactotronConfig";

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Map from './pages/Map';

const App = () => (
  <Provider store={store}>
    <Map />
  </Provider>
);

export default App;