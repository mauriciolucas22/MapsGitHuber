import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Reducers
import reducers from './reducers';

// Array de middleware
const middleware = [];


const store = createStore(reducers, applyMiddleware(...middleware));

export default store;