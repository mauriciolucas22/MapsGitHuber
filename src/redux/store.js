import { createStore, applyMiddleware } from 'redux';

// Reducers
import reducers from './reducers';

// Array de middleware
const middleware = [];

// Store for redux
const createAppropriateStore = __DEV__ ? console.tron.createStore: createStore;

const store = createAppropriateStore(reducers, applyMiddleware(...middleware));


export default store;