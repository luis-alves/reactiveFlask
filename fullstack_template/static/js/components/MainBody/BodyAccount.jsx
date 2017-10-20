import React from "react"
import TableHeader from "./Body/TableHeader"
// import Entries from "./Body/Entries"
import Transactions from "./Body/Transactions"


class BodyAccount extends React.Component {
  constructor (props) {
    super(props)
    // this.getValor = this.getValor.bind(this)
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
