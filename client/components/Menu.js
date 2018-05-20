import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Menu = ({ dashboards }) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <LinkContainer to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </LinkContainer>
      <Navbar.Toggle />
      </Navbar.Header>
      <Nav pullRight>
        <LinkContainer to="/dashboards">
          <NavItem>Dashboards: ({ dashboards.length })</NavItem>
        </LinkContainer>
        <LinkContainer to="/dashboards/create">
          <NavItem>Create a Dashboard</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = ({ dashboards }) => {
  return {
    dashboards
  };
};

export default connect(mapStateToProps)(Menu);
