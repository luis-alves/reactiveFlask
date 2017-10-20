import React from "react"
import ClearedBalance from "./Header/Account/ClearedBalance"
import UnclearedBalance from "./Header/Account/UnclearedBalance"
import WorkingBalance from "./Header/Account/WorkingBalance"



class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="page-header">
        <div className="account-name-container">
          <ClearedBalance />
          <div className="balance-separator">
            +
          </div>
          <UnclearedBalance />
          <div className="balance-separator">
            =
          </div>
            <WorkingBalance />
          </div>


      </div>

    )
  }
}

export default Header
