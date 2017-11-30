import React from "react"
import { fetchTransactions, updateTransactionsBookmark } from "../../../../actions/transactionsActions"
import { connect } from "react-redux"

@connect (store => {
  return {
      transactions: store.transactions.transactions
  }
})
export default class ColorModal extends React.Component {
  constructor(props) {
    super(props)
    this.changeBokkmarkColor = this.changeBokkmarkColor.bind(this)
  }

  changeBokkmarkColor(color, id) {
    this.props.dispatch(updateTransactionsBookmark(color, id))
  }

  render () {
    if (this.props.targetId != null) {
      return (
        <div className="modal-content-color">
          <div className="modal-content-color-red handhover"
               onClick={this.changeBokkmarkColor.bind(this, 'red', this.props.targetId)}>
            <h3 className="modal-content-color-name">Red</h3>
          </div>
          <div className="modal-content-color-orange handhover"
               onClick={this.changeBokkmarkColor.bind(this,'orange', this.props.targetId)}>
            <h3 className="modal-content-color-name">Orange</h3>
          </div>
          <div className="modal-content-color-yellow handhover"
               onClick={this.changeBokkmarkColor.bind(this, 'yellow', this.props.targetId)}>
            <h3 className="modal-content-color-name">Yellow</h3>
          </div>
          <div className="modal-content-color-green handhover"
               onClick={this.changeBokkmarkColor.bind(this, 'green', this.props.targetId)}>
            <h3 className="modal-content-color-name">Green</h3>
          </div>
          <div className="modal-content-color-blue handhover"
               onClick={this.changeBokkmarkColor.bind(this, 'blue', this.props.targetId)}>
            <h3 className="modal-content-color-name">Blue</h3>
          </div>
          <div className="modal-content-color-purple handhover"
               onClick={this.changeBokkmarkColor.bind(this, 'purple', this.props.targetId)}>
            <h3 className="modal-content-color-name">Purple</h3>
          </div>
        </div>
      )
    }
    return (
      <div>
      </div>
    )
  }
}
