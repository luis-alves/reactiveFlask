import React from "react"

import ResultData from "./dataOutputs/ResultData"
import InputData from "./dataOutputs/InputData"


export default class Row extends React.Component {
  changeToInputField = () => {
    const {row, handleSelect, rowId} = this.props
    handleSelect(rowId)
    this.props.removeTicksFromAllTransactions(row['_id']['$oid'])
  }

  onclicking = () => {
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
        onclick={this.changeToInputField}
        changeColor={this.props.changeColor}
        handleCheck={this.props.handleCheck}
      />
    )

    return componentToHiglight
  }
}
