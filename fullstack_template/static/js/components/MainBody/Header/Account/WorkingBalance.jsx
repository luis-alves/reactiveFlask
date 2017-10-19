import React from "react"
import { connect } from "react-redux"

import { fetchWorkingBalance } from "../../../../actions/workingActions"

@connect(store => {
  return {
    working: store.workingBalance.working
  }
})
export default class TotalBudget extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount () {
    this.props.dispatch(fetchWorkingBalance())
  }

  render () {
    return (
      <div>
        <div className="account-name-separator">
          <div className="balance-container">
            <p className="balance-title">Working Balance</p>
            <p className={this.props.uncleared < 0 ? 'balance-value negative-value' : 'balance-value'}>{this.props.working}$</p>
          </div>
        </div>
      </div>



    )

  }
}
