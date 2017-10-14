import React from "react"

export default class TotalBudget extends React.Component {
  render () {
    return (
      <div className="account-name-container">
        <div className="account-name-separator">
          <p className="account-name">Bankinter</p>
        </div>
        <div className="account-name-separator">
          <div className="balance-container">
            <p className="balance-title">Cleared Balance</p>
            <p className="balance-value">$49,910.00</p>
          </div>
        </div>
        <div className="balance-separator">
          +
        </div>
        <div className="account-name-separator">
          <div className="balance-container">
            <p className="balance-title">Uncleared Balance</p>
            <p className="balance-value">-$435.00</p>
          </div>
        </div>
        <div className="balance-separator">
          =
        </div>
        <div className="account-name-separator">
          <div className="balance-container">
            <p className="balance-title">Working Balance</p>
            <p className="balance-value">$39,540.00</p>
          </div>
        </div>
      </div>
    )

  }
}
