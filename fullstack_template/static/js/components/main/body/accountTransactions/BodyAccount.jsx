import React from "react"

import TableHeader from "./transactionsHeader/TableHeader"
import Transactions from "./transactions/Transactions"


class BodyAccount extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="account-body">
        <TableHeader />
        <div className="all-entries">
          <Transactions />
        </div>


      </div>
    )
  }
}

export default BodyAccount
