import React from "react"

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props)
  }


   handleCheck = (e) => {
    console.log(e)
    const id = e.currentTarget.parentElement.parentElement.id
    this.props.handleCheck(id)
    }

  render() {
    return (
      <div className="checkboxOne body-row-item trigger">
        <i onClick={this.handleCheck} className={"handhover checkbox icon-" + this.props.checkboxStatus} ></i>
      </div>
    )
  }
}

