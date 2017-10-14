import React from "react"
import Header from "./Header"
import Subheader from "./Subheader"
import BodyAccount from "./BodyAccount"


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
