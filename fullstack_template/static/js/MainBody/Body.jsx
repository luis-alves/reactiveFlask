import React from "react"
import Header from "./Header"
import Subheader from "./Subheader"
import BodyAccount from "./BodyAccount"

class Body extends React.Component {
  render () {
    return (
      <div className='body'>
        <Header />
        <Subheader />
        <BodyAccount />
      </div>
    )
  }
}

export default Body
