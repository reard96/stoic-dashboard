import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import logger from 'redux-logger';

const SET_DASHBOARDS = 'SET_DASHBOARDS';

const dashboardsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_DASHBOARDS:
      state = action.dashboards;
      break;
  }
  return state;
};

const reducer = combineReducers({
  dashboards: dashboardsReducer
});

const loadDashboards = () => {
  return (dispatch) => {
    return axios.get('/api/dashboards')
      .then(result => result.data)
      .then(dashboards => dispatch({
        type: SET_DASHBOARDS,
        dashboards
      })
    );
  };
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export { loadDashboards };
