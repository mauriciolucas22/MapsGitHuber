import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

//const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

//middleware
//const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// Array de middleware
//const middleware = [sagaMiddleware];
const middleware = [];

//
//const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

// sem reducers, applyMiddleware para api
//const store = createAppropriateStore(() => {}, applyMiddleware(...middleware));
const store = createStore(() => {}, applyMiddleware(...middleware));

export default store;