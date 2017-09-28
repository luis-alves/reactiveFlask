import React from "react";
import {
    Button,
    grid,
    Row,
    Col
} from "react-bootstrap";

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class HelloAgain extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Isto é só um testes</h1>
      </div>
        )
    }
}
