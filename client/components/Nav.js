import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = ({ dashboards }) => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dashboards">Dashboards: ({ dashboards.length })</Link>
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
