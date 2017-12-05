import React from "react";
import Navigator from "./Navigator";
import Main from "./components/MainBody/Main";
import { BrowserRouter as Router } from "react-router-dom";

require('../css/fullstack.css');

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Navigator /> */}
          <Main />
        </div>
      </Router>

    )
  }
}
