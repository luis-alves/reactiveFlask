import React from "react";

require('es6-promise').polyfill();
require('isomorphic-fetch');

require('../../css/fullstack.css');

class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {greeting: 'Hello ' + this.props.name};
    this.getPythonHello = this.getPythonHello.bind(this);
  }

  personaliseGreeting(greeting) {
    this.setState({greeting: greeting + ' ' + this.props.name + '!'});
  }

  getPythonHello() {
    fetch('gethello',
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
        response.json().then(data => {
          var value = data['greet']
          return this.personaliseGreeting(value);
        })

    });
  }

  render () {
    return (
      <div>
      <PageHeader>
        <div className='header-contents'>
          <h1>{this.state.greeting}</h1>
          <hr/>
          <Button onClick={this.getPythonHello}>
            Say Hello!
          </Button>
        </div>
      </PageHeader>
</div>
        )
    }
}

export default Hello
