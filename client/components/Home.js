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
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const user = users.find(user => user.id === 1);
  return {
    user
  };
};

export default connect(mapStateToProps)(Home);
