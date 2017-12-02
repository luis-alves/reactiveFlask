import React from "react"

import ResultData from "./ResultData"
import InputData from "./InputData"



export default class Row extends React.Component {
  onClick = () => {
    const {handleSelect, rowId} = this.props
    handleSelect(rowId)
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
        onclick={this.onClick}
        changeColor={this.props.changeColor}
      />
    )

    return componentToHiglight
  }




}
