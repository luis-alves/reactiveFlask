import React from "react"
import DayPickerInput from "react-day-picker"
import 'react-day-picker/lib/style.css';



export default class DataInput extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {cursor: 'handhover'}
    // this.handleHandover = this.handleHandover.bind(this)
  }

  // handleHandover(event) {
  //   // event.stopPropagation()
  //   console.log(event.target.parentElement.className);
  //   this.setState({cursor: 'text'})
  //   event.target.parentElement.style.backgroundColor = 'black'
  //   // event.target.style.color = 'white'
  // }


  render() {
    return (
      <div className="table-header-input ">
        <h5 className="date row-item input-data" >{this.props.values.date}</h5>
        <h5 className="payee row-item input-data" >{this.props.values.payee}</h5>
        <h5 className="category row-item input-data" >{this.props.values.category}</h5>
        <h5 className="memo row-item input-data" >{this.props.values.memo}</h5>
        <h5 className="outflow row-item input-data">{this.props.values.outflow}</h5>
        <h5 className="inflow row-item input-data" >{this.props.values.inflow}</h5>
      </div>
    )
  }
}
