import React from "react";
import { Switch, Route } from 'react-router-dom';

// Local components
import Body from "./body/Body";


export default class Main extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Body} />
      </Switch>
        )
    }
}
