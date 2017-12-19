import React from "react";
import { Switch, Route } from 'react-router-dom';

// Local components
import TabMenu from "./body/TabMenu";


export default class Main extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={TabMenu} />
      </Switch>
        )
    }
}
