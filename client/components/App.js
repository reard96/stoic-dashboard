import React, { Component } from 'react';
import Menu from './Menu';
import { loadDashboards, loadUsers } from '../store';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Dashboards from './Dashboards';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.loadDashboards();
    this.props.loadUsers();
  }
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Route path="/" exact component={ Home } />
          <Route path="/dashboards" exact component={ Dashboards } />
          <Route path="/dashboards/:id" exact render={({ match, history }) => <Dashboard id={match.params.id * 1} history={ history } /> } />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadDashboards: () => dispatch(loadDashboards()),
    loadUsers: () => dispatch(loadUsers())
  };
};

export default connect(null, mapDispatchToProps)(App);
