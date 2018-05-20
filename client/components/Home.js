import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import style from '../../public/style.css';

const Home = ({ user }) => {
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
      <div>You were born on { user.birthday }</div>
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
