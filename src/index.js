import "config/ReactotronConfig";

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './redux/store';

import Map from './pages/Map';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Map />
    </PersistGate>
  </Provider>
);

export default App;