import React from "react";
import Hello from "./Hello";
import Navigator from "./Navigator";
import { PageHeader } from "react-bootstrap"

require('../css/fullstack.css');

export default class App extends React.Component {
  render() {
    return (
      <PageHeader>
        <div className='header-contents'>
          <Navigator />
          <Hello name='Rimini' />
        </div>
      </PageHeader>
    )
  }
}
