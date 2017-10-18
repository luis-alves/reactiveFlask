import React from "react";
import Navigator from "./Navigator";
import Main from "./components/MainBody/Main";

require('../css/fullstack.css');

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigator />
        <Main />
      </div>

    )
  }
}
