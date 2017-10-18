import React from "react"
import AccountName from "./Header/Account/AccountName"


class Header extends React.Component {
  constructor(props) {
    super(props)
    // this.props.cleared_balance = {'total': 0.0}
    this.state = {cleared: 0, uncleared: 0, working: 0}
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
              let cleared = 0
              let uncleared = 0
              let working = 0
              data.map(item => {
                let inflow = parseFloat(item['inflow'])
                let outflow = parseFloat(item['outflow'])
                if (item['reconcile'] == 'true') {
                  cleared += inflow - outflow
                }
                else if (item['reconcile'] == 'false') {
                  uncleared += inflow - outflow
                }
                working = cleared + uncleared
              })
              this.setState({cleared: cleared.toFixed(2),
                             uncleared: uncleared.toFixed(2),
                             working: working.toFixed(2)
                           })
            })
        });
  }

  componentDidMount () {
    this.getValor()
  }

  render () {
    return (
      <div className="page-header">
        <AccountName balance={this.state}/>
      </div>

    )
  }
}

export default Header
