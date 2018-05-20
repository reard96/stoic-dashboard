import React from 'react';
import moment from 'moment';
import d3 from 'd3';

import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import style from '../../public/style.css';

const Home = ({ user }) => {
  // hardcoding for now - Moment objects
  const birthday = moment('1993-05-09');
  const now = moment();

  // Date strings
  const dob = birthday.format('MM-DD-YYYY');
  const today = now.format('MM-DD-YYYY');
  const diff = now.diff(birthday, 'days');
  // Ignore leap years
  const timeLeft = 90 * 365 - diff;
  if (!user) {
    return (
      <div className={ style.wrapper }>
        <PageHeader>We don't have that user!</PageHeader>
      </div>
    );
  }
  return (
    <div className={ style.wrapper }>
      <PageHeader>Hello, { user.name }</PageHeader>
      <h4>You were born on: { dob }</h4>
      <h4>Today is: { today }</h4>
      <h4>You have been alive for { diff } days</h4>
      <h4>Assuming you'll live to 90, you have { timeLeft } days left</h4>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  // Just have one user for the purposes of this demonstration.
  const user = users[0];
  return {
    user
  };
};

export default connect(mapStateToProps)(Home);
