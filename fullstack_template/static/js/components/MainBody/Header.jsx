import React from "react"
// import ClearedBalance from "./Header/Account/ClearedBalance"
// import UnclearedBalance from "./Header/Account/UnclearedBalance"
// import WorkingBalance from "./Header/Account/WorkingBalance"
import Balance from "./Header/Account/Balance"


class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="page-header">
          <Balance />
      </div>


    )
  }
}

export default Header
{/* <div className="page-header">
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
</div> */}
