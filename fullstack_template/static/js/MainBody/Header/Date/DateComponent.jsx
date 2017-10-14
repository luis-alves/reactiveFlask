import React from "react"

class DateComponent extends React.Component {
  constructor(props) {
    super(props)
    this.props.id
    this.props.actualDate
    this.changeDate = this.changeDate.bind(this)
  }

  changeDate() {
    this.props.onClick(this.props.id)
  }

  render () {
    return (
      <li onClick={this.changeDate}>{this.props.actualDate}</li>
    )
  }
}

export default DateComponent
