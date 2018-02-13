import React from "react"
import { connect } from "react-redux"
import { updateTransactions }
  from "../../../../../../../../actions/transactionsActions"

@connect(store => {
  return { transactions: store.transactions.transactions }
})
class ReconcileIcon extends React.Component {
  constructor(props) {
    super(props)
    this.changeReconcileIcon = this.changeReconcileIcon.bind(this)
  }

  changeReconcileIcon() {
     const dbIdNumber = this.props.allDataFromRow['_id']['$oid']
     this.props.dispatch(updateTransactions(dbIdNumber))
  }

  render() {
      return (
        <div className='boxing-reconcile body-row-item trigger'>
          <i
            className={"icon-check handhover " + this.props.allDataFromRow.reconcile}
            onClick={this.changeReconcileIcon} />
        </div>
      )

  }

}


export default ReconcileIcon
