import React from "react"

// Local components
import Balance from "./account/Balance"


class Header extends React.Component {
  render () {
    return (
      <div className="page-header">
          <Balance />
      </div>
    )
  }
}

export default Header
