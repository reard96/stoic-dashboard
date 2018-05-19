import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ dashboard }) => {
  if (!dashboard) {
    return <h1>We don't have that dashboard!</h1>
  }
  return (
    <h1>{ dashboard.goal }</h1>
  );
};

const mapStateToProps = ({ dashboards }, { id }) => {
  const dashboard = dashboards.find(dashboard => dashboard.id === id);
  return {
    dashboard
  };
};

export default connect(mapStateToProps)(Dashboard);
