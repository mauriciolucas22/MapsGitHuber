import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import sagas from './sagas';

// Reducers
import reducers from './ducks';

// Persistor
const rootReducer = persistCombineReducers({
  key: 'root',
  storage,
}, reducers);

// Saga
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// Array de middleware
const middleware = [sagaMiddleware];

// Store for redux
const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

export const store = createAppropriateStore(
  rootReducer,
  applyMiddleware(...middleware),
);

export const persistor = persistStore(store);

sagaMiddleware.run(sagas);