import React from "react"
import { connect } from "react-redux"

import {fetchClearedBalance} from "../../../../actions/clearedActions"

@connect(store => {
  return {
    cleared: store.clearedBalance.cleared
  }
})
export default class TotalBudget extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount () {
    this.props.dispatch(fetchClearedBalance())
  }

  render () {

    return (
      <div className="account-name-container">
        <div className="account-name-separator">
          <p className="account-name">Bankinter</p>
        </div>
        <div className="account-name-separator">
          <div className="balance-container">
            <p className="balance-title">Cleared Balance</p>
            <p className={this.props.uncleared < 0 ? 'balance-value negative-value' : 'balance-value'}>{this.props.cleared}$</p>
          </div>
        </div>
      </div>
    )

  }
}
