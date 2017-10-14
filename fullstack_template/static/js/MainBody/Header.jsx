import React from "react"
import AccountName from "./Header/Account/AccountName"


class Header extends React.Component {
  render () {
    return (
      <div className="page-header">
        <AccountName />
      </div>

    )
  }
}

export default Header
