import React from "react";
// import {
//     Navbar,
//     Nav,
//     NavItem,
//     NavDropdown,
//     MenuItem
// } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
// import {
//     LinkContainer
// } from "react-router-bootstrap";

import Menu from "./components/Navbar/Menu"
import AccountsMenu from "./components/Navbar/AccountsMenu"


export default class Navigator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
        <nav className="navbar">
          <ul>
            <Menu />
            <AccountsMenu />
          </ul>
        </nav>
      </div>
        );
    }

}
