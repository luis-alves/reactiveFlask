import React from "react";
import {Button, grid, Row, Col } from "react-bootstrap";

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {greeting: 'Hello ' + this.props.name};
    this.getPythonHello = this.getPythonHello(this);
  }

  personaliseGreeting(greeting) {
    this.setState({greeting: greeting + ' ' + this.props.name + '!'});
  }

  getPythonHello() {
    fetch(window.location.href + 'hello', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': '',
      }
    })
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return this.personaliseGreeting(response);
    });
  }

  render () {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <hr/>
        <Button bsSize='large' bsStyle='danger' onClick={this.getPythonHello}>
          Say Hello!
        </Button>
      </div>
    )
  }
}
