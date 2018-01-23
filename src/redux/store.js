import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

// Reducers
import reducers from './reducers';

// Saga
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// Array de middleware
const middleware = [sagaMiddleware];

// Store for redux
const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

export const store = createAppropriateStore(
  reducers,
  applyMiddleware(...middleware),
);

sagaMiddleware.run(sagas);


export default store;