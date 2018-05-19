import React, { Component } from 'react';
import Nav from './Nav';
import { loadDashboards } from '../store';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Dashboards from './Dashboards';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.loadDashboards();
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" exact component={ Home } />
          <Route path="/dashboards" exact component={ Dashboards } />
          <Route path="/dashboards/:id" exact render={({ match }) => <Dashboard id={match.params.id * 1} /> } />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadDashboards: () => dispatch(loadDashboards())
  };
};

export default connect(null, mapDispatchToProps)(App);
