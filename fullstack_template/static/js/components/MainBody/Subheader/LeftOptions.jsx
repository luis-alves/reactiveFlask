import React from "react"

export default class LeftOptions extends React.Component {
  render () {
    return (
      <div className="left-options-main">
        <button><i className="icons icon-add"></i><i className="subheader-text">Add a transaction</i></button>
        <button><i className="icons icon-pencil"></i><i className="subheader-text">Edit</i></button>
        <button><i className="icons icon-download"></i><i className="subheader-text">Import</i></button>
        <button><i className="icons icon-undo"></i><i className="subheader-text">Undo</i>.</button>
        <button><i className="icons icon-redo"></i><i className="subheader-text">Redo</i></button>
      </div>
    )
  }
}
