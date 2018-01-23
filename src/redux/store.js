import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import reducers from './reducers';

// Array de middleware
const middleware = [thunk];

// Store for redux
const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

export const store = createAppropriateStore(
  reducers,
  applyMiddleware(...middleware),
);


export default store;