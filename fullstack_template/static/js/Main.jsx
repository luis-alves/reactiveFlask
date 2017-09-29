import React from "react";
import {
    Button,
    grid,
    Row,
    Col
} from "react-bootstrap";
import { Switch, Route } from 'react-router-dom';
import Hello from "./Hello";

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Switch>
        <Route path='/hello' component={Hello}/>
        <Route exact path='/' render={() => (<h1 className="something"> this is main body </h1>)} />
      </Switch>
        )
    }
}
