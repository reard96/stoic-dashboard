import React from 'react';
import { connect } from 'react-redux';

const Dashboards = ({ dashboards }) => {
  return (
    <ul>
    {
      dashboards.map(dashboard => {
        return (
          <li key={ dashboard.id }>
            { dashboard.goal }
          </li>
        );
      })
    }
    </ul>
  );
};

const mapStateToProps = ({ dashboards }) => {
  return {
    dashboards
  };
};

export default connect(mapStateToProps)(Dashboards);
