import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import reducers from './reducers';

// Store for Saga
//const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
//const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// Array de middleware
const middleware = [thunk];

// Store for redux
const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

const store = createAppropriateStore(reducers, applyMiddleware(...middleware));


export default store;