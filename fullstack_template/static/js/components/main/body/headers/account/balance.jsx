import React from "react"
import { connect } from "react-redux"

import {fetchBalance} from "../../../../../actions/balanceActions"

@connect(store => {
  return {
    balance: store.balance.balance
  }
})
export default class TotalBudget extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount () {
    this.props.dispatch(fetchBalance())
  }

  render () {
    if (this.props.balance != null) {
      return (
        <div className="account-name-container">
          <div className="account-name-container">
            <div className="account-name-separator">
              <p className="account-name">Bankinter</p>
            </div>
            <div className="account-name-separator">
              <div className="balance-container">
                <p className="balance-title">Cleared Balance</p>
                <p className={this.props.balance.cleared < 0 ?
                  'balance-value negative-value' : 'balance-value'}>
                  {this.props.balance.cleared}$</p>
              </div>
            </div>
          </div>
          <div className="balance-separator">
            +
          </div>
          <div>
            <div className="account-name-separator">
              <div className="balance-container">
                <p className="balance-title">Uncleared Balance</p>
                <p className={this.props.balance.uncleared < 0 ?
                  'balance-value negative-value' : 'balance-value'}>
                  {this.props.balance.uncleared}$</p>
              </div>
            </div>
          </div>
          <div className="balance-separator">
            =
          </div>
          <div>
            <div className="account-name-separator">
              <div className="balance-container">
                <p className="balance-title">Working Balance</p>
                <p className={this.props.balance.working < 0 ?
                  'balance-value negative-value' : 'balance-value'}>
                  {this.props.balance.working}$</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>

        </div>
      )
    }
  }
}
