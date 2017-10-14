import React from "react"


export default class Menu extends React.Component {
  render () {
    return (
      <div>
          <li className="navbar-accounts"><img className="budget-image"/><a href="#">Budget</a></li>
          <li className="navbar-accounts"><a href="#">Reports</a></li>
      </div>
    )
  }
}
