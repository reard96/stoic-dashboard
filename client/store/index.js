import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Reducers
import users from './users';
import dashboards from './dashboards';

const reducer = combineReducers({
  users,
  dashboards
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

// Export action creators
export * from './users';
export * from './dashboards';
