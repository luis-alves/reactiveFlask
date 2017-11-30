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
    console.log(row.memo);
    const componentToHiglight = isSelected ? (
      <InputData row={row} />
    ) : (
      <ResultData
        row={row}
        rowId={rowId}
        onclick={this.onClick}
        changeColor={this.props.changeColor}
      />
    )

    return componentToHiglight
  }




}
