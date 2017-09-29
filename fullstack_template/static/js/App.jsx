import React from "react";
import Navigator from "./Navigator";
import Hello from "./Hello";
import Main from "./Main";
import { PageHeader,Navbar,
Nav,
NavItem,
NavDropdown,
MenuItem } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom";

require('../css/fullstack.css');

export default class App extends React.Component {
  render() {
    return (
      // <Router>
        <div>
          <Navigator />
          <Main />
        </div>
      // </Router>

    )
  }
}
