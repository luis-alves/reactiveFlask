import React from "react"

import ResultData from "./dataOutputs/ResultData"
import InputData from "./dataOutputs/InputData"


export default class Row extends React.Component {
  constructor(props) {
    super(props)
    this.onClickEditRow = this.onClickEditRow.bind(this)
    this.onClickUnhighlightRow = this.onClickUnhighlightRow.bind(this)
  }

  onClickEditRow() {
    const {highlightRow, indexRowNumber} = this.props
    highlightRow(indexRowNumber)
  }

  onClickUnhighlightRow() {
    const {unhighlightRow, indexRowNumber} = this.props
    unhighlightRow(indexRowNumber)
  }

  render() {
    const {row, isSelected, dbIdNumber} = this.props
    const componentToHiglight = isSelected ? (
      <InputData
        allDataFromRow={row}
        onClickUnhighlightRow={this.onClickUnhighlightRow}
        dbIdNumber={dbIdNumber}
      />
    ) : (
      <ResultData
        allDataFromRow={row}
        dbIdNumber={dbIdNumber}
        indexRowNumber={this.props.indexRowNumber}
        onClickEditRow={this.onClickEditRow}
        onClickChangeBookmarkColor={this.props.onClickChangeBookmarkColor}
      />
    )

    return componentToHiglight
  }
}
