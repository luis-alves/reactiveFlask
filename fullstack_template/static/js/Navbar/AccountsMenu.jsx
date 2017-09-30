import React from "react"
import { Link } from "react-router-dom"

class AccountsMenu extends React.Component {
  render () {
    return (
      <div>
        <li className="navbar-accounts">All Accounts</li>
        <Link to='/hello'><li className="navbar-accounts accounts active">Bankinter</li></Link>
        <Link to='/hello'><li className="navbar-accounts accounts">Cartão Crédito</li></Link>
      </div>

    )
  }
}

export default AccountsMenu
