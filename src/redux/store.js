import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';

// Reducers
import reducers from './reducers';


//const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
//const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// Array de middleware
const middleware = [];

// Store for redux
const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

export const store = createAppropriateStore(
  reducers,
  applyMiddleware(...middleware),
);


export default store;