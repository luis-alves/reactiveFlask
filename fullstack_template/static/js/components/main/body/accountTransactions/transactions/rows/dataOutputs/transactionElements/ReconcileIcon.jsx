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
     const elID = this.props.row['_id']['$oid']
     // this.props.changeReconcileIconColor(elID)
     this.props.dispatch(updateTransactions(elID))
  }

  // changeCheckIcon(elID)

  render() {
      return (
        <div className='boxing-reconcile body-row-item trigger'>
          <i
            className={"icon-check handhover " + this.props.row.reconcile}
            onClick={this.changeReconcileIcon}
        />
        </div>
      )

  }

}


export default ReconcileIcon
