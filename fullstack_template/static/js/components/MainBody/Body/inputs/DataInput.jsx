import React from "react"
// import DayPickerInput from "react-day-picker"
// import 'react-day-picker/lib/style.css';
import FormInput from "./FormInput"



export default class DataInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {inputData: false}
    this.handleInput = this.handleInput.bind(this)
    // this.handleClick = this.handleClick.bind(this)
  }

  handleInput(event) {
    console.log(event.currentTarget);
    // event.stopPropagation()
    if (event.target.classList.contains('hand-text')) {
      console.log('dsg');
      this.setState({inputData: true})
    }
    else {
      console.log(this.props);
      // this.props.handleClick()
    }
  }

  render() {
    if (this.state.inputData) {
      return (
        <div className="table-header-input-data" onClick={this.handleInput.bind(this)}>
          <h5 className="date row-item input-data" ><input type="date" name="date" className="date input-data" /></h5>
          <h5 className="payee row-item input-data" ><input type="text" size="10"  name="payee" className="payee input-data" /></h5>
          <h5 className="category row-item input-data" ><input type="text" name="category" className="category input-data" /></h5>
          <h5 className="memo row-item input-data" ><input type="text" name="memo" className="memo input-data" /></h5>
          <h5 className="outflow row-item input-data"><input type="number" name="outflow" className="outflow input-data" /></h5>
          <h5 className="inflow row-item input-data" ><input type="number" name="inflow" className="inflow input-data" /></h5>
        </div>
      )
    } else {
      return (
        <div className="table-header-input " onClick={this.handleInput.bind(event)}>
          <h5 className='date row-item input-data' >{this.props.values.date}</h5>
          <h5 className='payee row-item input-data' >{this.props.values.payee}</h5>
          <h5 className='category row-item input-data' >{this.props.values.category}</h5>
          <h5 className='memo row-item input-data' >{this.props.values.memo}</h5>
          <h5 className='outflow row-item input-data'>{this.props.values.outflow}</h5>
          <h5 className='inflow row-item input-data' >{this.props.values.inflow}</h5>
        </div>
      )
    }
  }
}
