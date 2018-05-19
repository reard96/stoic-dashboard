import React from 'react';
import { connect } from 'react-redux';

const Nav = ({ dashboards }) => {
  return (
    <ul>
      <li>
        Home
      </li>
      <li>
        Dashboards: ({ dashboards.length })
      </li>
    </ul>
  );
};

const mapStateToProps = ({ dashboards }) => {
  return {
    dashboards
  };
};

export default connect(mapStateToProps)(Nav);
