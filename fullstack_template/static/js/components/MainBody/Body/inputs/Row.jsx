import React from "react"

import ResultData from "./ResultData"
import InputData from "./InputData"



export default class Row extends React.Component {
  onClick = () => {
    const {handleSelect, rowId} = this.props
    handleSelect(rowId)
  }

  render() {
    const {row, isSelected, rowId} = this.props
    const componentToHiglight = isSelected ? (
      <InputData row={row} />
    ) : (
      <ResultData row={row} rowId={rowId} onclick={this.onClick} />
    )

    return componentToHiglight
  }




}
