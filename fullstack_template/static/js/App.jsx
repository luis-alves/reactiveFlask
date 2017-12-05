import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Internal components
import Main from "./components/main/Main";

require('../css/fullstack.css');


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Main />
        </div>
      </Router>
    )
  }
}
