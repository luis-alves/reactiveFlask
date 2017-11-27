import React from "react"
import Datepicker from "react-datepicker";

require('react-datepicker/dist/react-datepicker.min.css');

var moment = require('moment')

export default class InputData extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { startDate: moment(this.props.row.date, "DD/MM/YYYY")}
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleSubmit () {
    console.log('Connect to server...Done')
  }

  render() {
    return (
      <div className="table-header-input-data">
        <form onSubmit={this.handleSubmit}>
          <Datepicker
            className="date row-item input-data"
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
          <h5 className="payee row-item input-data" ><input type="text" size="10"  name="payee" className="payee input-data" /></h5>
          <h5 className="category row-item input-data" ><input type="text" name="category" className="category input-data" /></h5>
          <h5 className="memo row-item input-data" ><input type="text" name="memo" className="memo input-data" /></h5>
          <h5 className="outflow row-item input-data"><input type="number" name="outflow" className="outflow input-data" /></h5>
          <h5 className="inflow row-item input-data" ><input type="number" name="inflow" className="inflow input-data" /></h5>
        </form>
      </div>
    )
  }
}
