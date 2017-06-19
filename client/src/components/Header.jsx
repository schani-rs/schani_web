import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

export const Header = ({ navImages, navCollections, navTags }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Button onClick={navImages} bsStyle="link">Schani</Button>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem onClick={navImages}>Images</NavItem>
      <NavItem onClick={navCollections}>Collections</NavItem>
      <NavItem onClick={navTags}>Tags</NavItem>
    </Nav>
    <Nav>
      <NavItem>Logout</NavItem>
    </Nav>
  </Navbar>
);

Header.propTypes = {
  navImages: PropTypes.func.isRequired,
  navCollections: PropTypes.func.isRequired,
  navTags: PropTypes.func.isRequired,
};

export default Header;
