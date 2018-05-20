import axios from 'axios';

// Action types
const SET_DASHBOARDS = 'SET_DASHBOARDS';
const UPDATE_DASHBOARD = 'UPDATE_DASHBOARD';
const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
const CREATE_DASHBOARD = 'CREATE_DASHBOARD';

// Action creators
export const loadDashboards = () => {
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

export const saveDashboard = (dashboard, history) => {
  if (dashboard.id) {
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
  }
  return (dispatch) => {
    return axios.post('/api/dashboards', dashboard)
      .then(result => result.data)
      .then(dashboards => dispatch({
        type: CREATE_DASHBOARD,
        dashboards
      })
    )
    .then(() => {
      history.push('/dashboards');
    });
  };
};

export const deleteDashboard = (dashboard, history) => {
  return (dispatch) => {
    return axios.delete(`/api/dashboards/${dashboard.id}`)
      .then(() => dispatch({
        type: DELETE_DASHBOARD,
        dashboard
      })
    )
    .then(() => {
      history.push('/dashboards');
    });
  };
};

// Dashboards reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_DASHBOARDS:
      state = action.dashboards;
      break;
    case UPDATE_DASHBOARD:
      state = state.map(dashboard => dashboard.id === action.dashboard.id ? action.dashboard : dashboard);
      break;
    case DELETE_DASHBOARD:
      state = state.filter(dashboard => dashboard.id !== action.dashboard.id);
      break;
  }
  return state;
};

export default reducer;
