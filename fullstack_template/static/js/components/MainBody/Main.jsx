import React from "react";
import {
    Switch,
    Route
} from 'react-router-dom';
import Body from "./Body";


require('es6-promise').polyfill();
require('isomorphic-fetch');



export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Switch>
        <Route exact path='/' component={Body} />
      </Switch>
        )
    }
}
