import React from 'react';
import { render } from 'react-dom';
import store, { loadDashboards } from './store';

// store.subscribe(() => {
//   console.log(store.getState());
// });

store.dispatch(loadDashboards());

const root = document.getElementById('root');

render(<hr />, root);
