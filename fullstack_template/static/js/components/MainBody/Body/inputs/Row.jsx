import React from "react"

import ResultData from "./ResultData"



export default class Row extends React.Component {
  onClick = () => {
    const {handleSelect, rowId} = this.props
    handleSelect(rowId)
  }

  render() {
    const {row, isSelected} = this.props
    const componentToHiglight = isSelected ? (
      <ResultData row={row} />
    ) : (
      <ResultData row={row} />
    )

    return componentToHiglight
  }




}
