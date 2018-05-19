import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import style from '../../public/style.css';

const Dashboard = ({ dashboard }) => {
  if (!dashboard) {
    return (
      <div className={ style.wrapper }>
        <PageHeader>We don't have that dashboard!</PageHeader>
      </div>
    );
  }
  return (
    <PageHeader>{ dashboard.goal }</PageHeader>
  );
};

const mapStateToProps = ({ dashboards }, { id }) => {
  const dashboard = dashboards.find(dashboard => dashboard.id === id);
  return {
    dashboard
  };
};

export default connect(mapStateToProps)(Dashboard);
