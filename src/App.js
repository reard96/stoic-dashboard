import React, { Component } from 'react';
import Nav from './Nav';
import { loadDashboards } from './store';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.loadDashboards();
  }
  render() {
    return (
      <Nav />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadDashboards: () => dispatch(loadDashboards())
  };
};

export default connect(null, mapDispatchToProps)(App);
