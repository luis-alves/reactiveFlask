import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App";
import Hello from "./Hello";
import HelloAgain from "./HelloAgain";

// ReactDOM.render(<App />, document.getElementById("content"));

ReactDOM.render((
  <Router>
    <div>
      <Route exact={true} to='/' component={App}/>
      <Route exact={true} to="/hello" render={()=>(<Hello name='you' />)} />
    </div>
  </Router>
), document.getElementById("content"));
