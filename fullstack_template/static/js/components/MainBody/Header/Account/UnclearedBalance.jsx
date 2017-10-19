import React from "react"
import { connect } from "react-redux"

import { fetchUnclearedBalance } from "../../../../actions/unclearedActions"

@connect(store => {
  return {
    uncleared: store.unclearedBalance.uncleared
  }
})
export default class TotalBudget extends React.Component {
  constructor(props) {
    super(props)
  }


  componentWillMount () {
    this.props.dispatch(fetchUnclearedBalance())
  }

  render () {
    return (
      <div>

        <div className="account-name-separator">
          <div className="balance-container">
            <p className="balance-title">Uncleared Balance</p>
            <p className={this.props.uncleared < 0 ? 'balance-value negative-value' : 'balance-value'}>{this.props.uncleared}$</p>
          </div>
        </div>
      </div>



    )

  }
}
