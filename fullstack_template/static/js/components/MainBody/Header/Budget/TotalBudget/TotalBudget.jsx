import React from "react"

export default class TotalBudget extends React.Component {
  render () {
    return (
      <div className="total-budget-container">
        <div className="rectangle">
          <div className="value-number">
            <h2>$30.000,00</h2>
            <h5 className="tobe">To be Budgeted</h5>
          </div>
        </div>
      </div>
    )

  }
}
