import React from "react"
import { connect } from "react-redux"

import TableHeader from "./transactionsHeader/TableHeader"
import Transactions from "./transactions/Transactions"

import { updateTransactionsAllTicks } from "../../../../actions/transactionsActions"

@connect(store => {
    return {transactions: store.transactions.transactions}
})
class BodyAccount extends React.Component {
  constructor (props) {
    super(props)
  }

  selectAllRows = () => {
    this.props.dispatch(updateTransactionsAllTicks())
  }

  render () {
    return (
      <div className="account-body">
          <TableHeader
            selectAllRows={this.selectAllRows}
          />
        <div className="all-entries">
          <Transactions />
        </div>


      </div>
    )
  }
}

export default BodyAccount
