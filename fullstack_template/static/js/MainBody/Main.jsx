import React from "react";
import {
    Button,
    grid,
    Row,
    Col
} from "react-bootstrap";
import { Switch, Route } from 'react-router-dom';
import Hello from "./Hello";
import Header from "./Header";
import Body from "./Body";


require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Switch>
        <Route path='/accounts' component={Body}/>
        <Route exact path='/' component={Body} />
      </Switch>
        )
    }
}
