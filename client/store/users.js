import axios from 'axios';

// Action types
const SET_USERS = 'SET_USERS';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';
const CREATE_USER = 'CREATE_USER';

// Action creators
export const loadUsers = () => {
  return (dispatch) => {
    return axios.get('/api/users')
      .then(result => result.data)
      .then(users => dispatch({
        type: SET_USERS,
        users
      })
    );
  };
};

export const saveUsers = (user, history) => {
  if (user.id) {
    return (dispatch) => {
      return axios.put(`/api/users/${user.id}`, user)
        .then(result => result.data)
        .then(user => dispatch({
          type: UPDATE_USER,
          user
        })
      )
      .then(() => {
        history.push('/users');
      });
    };
  }
  return (dispatch) => {
    return axios.post('/api/users', users)
      .then(result => result.data)
      .then(users => dispatch({
        type: CREATE_USER,
        users
      })
    )
    .then(() => {
      history.push('/users');
    });
  };
};

export const deleteUser = (user, history) => {
  return (dispatch) => {
    return axios.delete(`/api/users/${user.id}`)
      .then(() => dispatch({
        type: DELETE_USER,
        user
      })
    )
    .then(() => {
      history.push('/users');
    });
  };
};

// Users reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      state = action.USERS;
      break;
    case UPDATE_USER:
      state = state.map(user => user.id === action.user.id ? action.user : user);
      break;
    case DELETE_USER:
      state = state.filter(user => user.id !== action.user.id);
      break;
  }
  return state;
};

export default reducer;

