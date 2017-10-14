import React from "react"
import TableHeader from "./Body/TableHeader"
// import Entries from "./Body/Entries"
import Dummy from "./Body/Dummy"

require('es6-promise').polyfill();
require('isomorphic-fetch');

class BodyAccount extends React.Component {
  constructor (props) {
    super(props)
    this.state = {data : [{'one': 1, 'two': 2},{'one':4, 'two':5}]}
    // this.getValor = this.getValor.bind(this)
  }

  getValor() {
    fetch('account',
        )
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            response.json().then(data => {
                console.log(data)
              return this.setState({data: data});
            })

        });


  }

  componentDidMount () {
    this.getValor()
  }



  render () {
    return (
      <div className="account-body">
        <TableHeader />
        <div className="all-entries">
          {
            this.state.data.map(
              (dado, i=0) => {
                i++
                return <Dummy key={i-1} data={dado} />
              }
            )
          }
        </div>


      </div>
    )
  }
}

export default BodyAccount
