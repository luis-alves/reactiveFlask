import React from "react"
import AccountName from "./Header/Account/AccountName"


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.props.cleared_balance = {'total': 0.0}
    this.state = this.props.cleared_balance
    this.getValor = this.getValor.bind(this)
  }

  getValor() {
    fetch('account',
        )
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            response.json().then(data => {
              let cleared_balance = 0.0
              data.forEach(item => {
                cleared_balance += item['inflow'] - item['outflow']
              })
              return setState({'total': cleared_balance});
            })
        });
  }

  componentDidMount () {
    this.getValor()
  }

  render () {
    return (
      <div className="page-header">
        <AccountName cleared_balance={this.state}/>
      </div>

    )
  }
}

export default Header
