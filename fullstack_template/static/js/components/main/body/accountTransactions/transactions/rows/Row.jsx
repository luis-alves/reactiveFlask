import React from "react"

import ResultData from "./dataOutputs/ResultData"
import InputData from "./dataOutputs/InputData"


export default class Row extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.onclicking = this.onclicking.bind(this)
  }

  onClick() {
    const {handleSelect, rowId} = this.props
    handleSelect(rowId)
  }

  onclicking() {
    const {handleUnselect, rowId} = this.props
    handleUnselect(rowId)
  }

  render() {
    const {row, isSelected, rowId} = this.props
    const componentToHiglight = isSelected ? (
      <InputData
        row={row}
        onclicking={this.onclicking}
        rowId={rowId} />
    ) : (
      <ResultData
        row={row}
        rowId={rowId}
        elID={this.props.elID}
        onclick={this.onClick}
        changeColor={this.props.changeColor}
        handlecheck={this.props.handleCheck}
      />
    )

    return componentToHiglight
  }
}
