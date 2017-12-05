import React from "react"

import Header from "./headers/Header"
import Subheader from "./headers/Subheader"
import BodyAccount from "./accountTransactions/BodyAccount"


class Body extends React.Component {
  render () {
    return (
      <div className='bodymain'>
        <div className="page-header-main">
          <Header />
        </div>
        <div className="page-subheader">
          <Subheader />
        </div>
        <div className="page-bodyaccount">
          <BodyAccount />
          <img className="imageadd"/>
        </div>
      </div>
    )
  }
}

export default Body
