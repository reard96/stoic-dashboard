import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import style from '../../public/style.css';
/*
Doing this without users for now...hardcoded
to add users later on

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
*/

const Home = () => {
  return (
    <div className={ style.wrapper }>
      <PageHeader>Hello, Dan</PageHeader>
    </div>
  );
};

export default Home;
