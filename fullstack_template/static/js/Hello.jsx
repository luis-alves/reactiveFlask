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

  printthis(){
    console.log('helloooooo');
  }

  getPythonHello() {
    fetch(window.location.href + 'hello',
    // {
    //   /* Options are only needed in POST methods */
    //   method: 'GET',
    //   body: String,
    //   headers: {
    //     'Accept': 'text/plain',
    //     'Content-Type': 'application/json'
    //     'Origin': '',
    //   },
    //   credentials: "same-origin"
    // }
    )
    .then(response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        // var test = response.json()
        // console.log('response statustext ' + response.statusText;
        response.json().then(data => {
          console.log('value ' + data['greet']);
          var value = data['greet']
          return this.personaliseGreeting(value);
        })
        //console.log('response text ' + response.json()));

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
