import React from "react"

export default class TotalBudget extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount () {
  //   console.log(this.props.cleared_balance);
  // }

  render () {
    return (
      <div className="account-name-container">
        <div className="account-name-separator">
          <p className="account-name">Bankinter</p>
        </div>
        <div className="account-name-separator">
          <div className="balance-container">
            <p className="balance-title">Cleared Balance</p>
            <p className="balance-value">{this.props.balance.cleared}$</p>
          </div>
        </div>
        <div className="balance-separator">
          +
        </div>
        <div className="account-name-separator">
          <div className="balance-container">
            <p className="balance-title">Uncleared Balance</p>
            <p className="balance-value">{this.props.balance.uncleared}$</p>
          </div>
        </div>
        <div className="balance-separator">
          =
        </div>
        <div className="account-name-separator">
          <div className="balance-container">
            <p className="balance-title">Working Balance</p>
            <p className="balance-value">{this.props.balance.working}$</p>
          </div>
        </div>
      </div>
    )

  }
}
