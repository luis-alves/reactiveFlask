import React from "react"

import ColorModal from "./modal/ColorModal"
import Checkbox from "./transactionElements/Checkbox"
import InfoIcon from "./transactionElements/InfoIcon"
import BookmarkIcon from "./transactionElements/BookmarkIcon"
import InputDataFields from "./transactionElements/InputDataFields"
import ReconcileIcon from "./transactionElements/ReconcileIcon"


export default class ResultData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      row: null,
      visibility: false
    }
  }

  changeBookmarkColor = (event) => {
    this.setState({
      pointerY: event.target.offsetTop-28,
      row: event.currentTarget.dataset._id,
      visibility: !this.state.visibility
    })
    event.stopPropagation()
  }

  handlecheck = (e) => {
    console.log(e)
    const id = e.currentTarget.parentElement.parentElement.id
    this.props.handleCheck(id)
  }

  render() {
    return (
      <div className="table-header handhover"
           key={this.props.row._id['$oid']}
           id={this.props.row._id['$oid']}
           >
        <Checkbox
          checkboxStatus={this.props.row.checkbox}
          handleCheck={this.handlecheck}
          onClick={this.handlecheck}
        />
        <InfoIcon iconColor={this.props.row.flag}/>
        <BookmarkIcon
          handleBookmarkClick={this.changeBookmarkColor}
          rowData={this.props.row}
        />
        <InputDataFields
          handleEditInputFields={this.props.onclick}
          rowData={this.props.row}
        />
        <ReconcileIcon
            changeCheckIconColor={this.props.changeColor}
            row={this.props.row}
        />
        { this.state.visibility ? (
          <div
            id="overlay"
            ref="overlay"
            onClick={this.changeBookmarkColor.bind(null)}
            >
            <div>
              <ColorModal targetId={this.state.row} />
            </div>
          </div>
        ) : null}
        <style>
          {`
            #overlay {
              position: absolute;
              left: 0px;
              top: 0px;
              width:100%;
              height:100%;
              padding-left: 100px;
              padding-top: ${this.state.pointerY}`+`px;
              text-align:center;
              z-index: 1000;
            }
          `}
        </style>
      </div>
    )
    }
}
