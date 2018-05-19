import React from 'react';
import { PageHeader } from 'react-bootstrap';
import style from '../../public/style.css';

const Home = () => {
  return (
    <div className={ style.wrapper }>
      <PageHeader>Hello, Dan</PageHeader>
    </div>
  );
};

export default Home;
