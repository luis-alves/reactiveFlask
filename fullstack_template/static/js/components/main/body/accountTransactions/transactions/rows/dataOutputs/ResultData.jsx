import React from 'react'

import ColorModal from './modal/ColorModal'
import Checkbox from './transactionElements/Checkbox'
import InfoIcon from './transactionElements/InfoIcon'
import BookmarkIcon from './transactionElements/BookmarkIcon'
import InputDataFields from './transactionElements/InputDataFields'
import ReconcileIcon from './transactionElements/ReconcileIcon'


export default class ResultData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      row: null,
      visibility: false
    }
    this.changeBookmarkColor = this.changeBookmarkColor.bind(this)
  }

  changeBookmarkColor(event) {
    this.setState({
      pointerY: event.target.offsetTop-28,
      row: event.currentTarget.dataset._id,
      visibility: !this.state.visibility
    })
    event.stopPropagation()
  }

  render() {
    return (
      <div className={'table-header handhover ' + this.props.allDataFromRow.checkbox}
        key={this.props.allDataFromRow._id['$oid']}
        id={this.props.allDataFromRow._id['$oid']}
       >
        <Checkbox
          dbIdNumber={this.props.dbIdNumber}
          checkboxStatus={this.props.allDataFromRow.checkbox}
          handlecheck={this.props.handlecheck}
          onClickEditRow={this.props.onClickEditRow}
          indexRowNumber={this.props.indexRowNumber}
        />
        <InfoIcon iconColor={this.props.allDataFromRow.flag} />
        <BookmarkIcon
          changeBookmarkColor={this.changeBookmarkColor}
          allDataFromRow={this.props.allDataFromRow}
        />
        <InputDataFields
          onClickEditRow={this.props.onClickEditRow}
          allDataFromRow={this.props.allDataFromRow}
        />
        <ReconcileIcon
          changeReconcileIconColor={this.props.onClickChangeBookmarkColor}
          allDataFromRow={this.props.allDataFromRow}
        />
        { this.state.visibility ? (
          <div
            id='overlay'
            ref='overlay'
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
    )}
}
