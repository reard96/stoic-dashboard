import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import logger from 'redux-logger';

const SET_DASHBOARDS = 'SET_DASHBOARDS';
const UPDATE_DASHBOARD = 'UPDATE_DASHBOARD';

const dashboardsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_DASHBOARDS:
      state = action.dashboards;
      break;
    case UPDATE_DASHBOARD:
      state = state.map(dashboard => dashboard.id === action.dashboard.id ? action.dashboard : dashboard);
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

const saveDashboard = (dashboard, history) => {
  return (dispatch) => {
    return axios.put(`/api/dashboards/${dashboard.id}`, dashboard)
      .then(result => result.data)
      .then(dashboard => dispatch({
        type: UPDATE_DASHBOARD,
        dashboard
      })
    )
    .then(() => {
      history.push('/dashboards');
    });
  };
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export { loadDashboards, saveDashboard };
