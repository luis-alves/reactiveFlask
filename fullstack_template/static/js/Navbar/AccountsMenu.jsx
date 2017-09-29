import React from "react"
import { Link } from "react-router-dom"

class AccountsMenu extends React.Component {
  render () {
    return (
      <div>
        <li className="navbar-accounts">All Accounts</li>
        <li className="navbar-accounts active"><Link to='/hello'></Link>Bankinter</li>
        <li className="navbar-accounts"><Link to='/hello'></Link>Cartão Crédito</li>
      </div>

    )
  }
}

export default AccountsMenu
