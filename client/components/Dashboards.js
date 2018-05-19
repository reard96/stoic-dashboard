import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboards = ({ dashboards }) => {
  return (
    <ul>
    {
      dashboards.map(dashboard => {
        return (
          <li key={ dashboard.id }>
            <Link to={`dashboards/${dashboard.id}`}>{ dashboard.goal }</Link>
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
