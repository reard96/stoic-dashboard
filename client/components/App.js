import React, { Component } from 'react';
import Nav from './Nav';
import { loadDashboards } from '../store';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Dashboards from './Dashboards';

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
