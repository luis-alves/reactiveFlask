import React from "react";
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem
} from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";



export default class Navigator extends React.Component{
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to={'/hello'}>
            <NavItem eventKey={1} href="/hello">Get 1</NavItem>
          </LinkContainer>
          <NavItem eventKey={2} href="helloAgain">Get 3</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }

}
