import React from "react"
import Datepicker from "react-datepicker";
import { connect } from "react-redux"

require('react-datepicker/dist/react-datepicker.min.css');

// Actions
import { updateTransactionsInputData } from "../../../../actions/transactionsActions"
// fullstack_template\static\js\actions\transactionsActions.js
// fullstack_template\static\js\components\MainBody\Body\inputs\InputData.jsx

var moment = require('moment')


@connect(store => {
    return {
        transactions: store.transactions.transactions
    }
})
export default class InputData extends React.Component {
  constructor(props) {
    super(props)
    // console.log(this.props.row.date);
    // console.log(moment(this.props.row.date, "DD/MM/YYYY"));
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePayee = this.handlePayee.bind(this)
    this.handleCategory = this.handleCategory.bind(this)
    this.handleMemo = this.handleMemo.bind(this)
    this.handleOutflow = this.handleOutflow.bind(this)
    this.handleInflow = this.handleInflow.bind(this)
    this.state = {
      startDate: moment(this.props.row.date, "DD/MM/YYYY"),
      payee: this.props.row.payee,
      category: this.props.row.category,
      memo: this.props.row.memo,
      outflow: this.props.row.outflow,
      inflow: this.props.row.inflow,
      id: this.props.row._id['$oid'],
    }
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handlePayee(e) {
    this.setState({payee: e.target.value})
  }


  handleCategory(e) {
    this.setState({category: e.target.value})
  }

  handleMemo(e) {
    this.setState({memo: e.target.value})
  }

  handleOutflow(e) {
    this.setState({outflow: e.target.value})
  }

  handleInflow(e) {
    this.setState({inflow: e.target.value})
  }

  handleSubmit (e) {
    const date = moment(this.state.startDate, "YYYY-MM.DD").format('DD-MM-YYYY')
    e.preventDefault()
    this.props.dispatch(updateTransactionsInputData(this.state, date))
    this.props.onclicking()
  }

  handleCancelation = (e) => {
    e.preventDefault()
    this.props.onclicking()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} method="post" className="form-transaction">
        <div className="table-header handhover"
             key={this.props.row._id['$oid']}
             id={this.props.row._id['$oid']}
        >
          <div className="checkboxOne body-row-item trigger">
            <input className=" handhover checkbox" defaultChecked='true' type="checkbox" name="" value="1"/>
            <label htmlFor="checkboxOneInput"></label>
          </div>
          <div className="boxing-info body-row-item trigger">
            <i className={"icon-info handhover " + this.props.row.flag}></i>
          </div>
          <div className="boxing-info body-row-item trigger">
            <i className={"icon-bookmark handhover " + this.props.row.bookmark}
               // onClick={this.changeColorBookmark.bind(null, this.props.row)}
               data-_id={this.props.row._id['$oid']}>
            </i>
          </div>
          <div className="table-header-input-data">
            <Datepicker
              className="date-input row-item input-data"
              selected={this.state.startDate}
              onChange={this.handleChange}
              dateFormat="DD/MM/YYYY"
              /* Other properties */
              // locale="en-gb"
              // placeholderText="Weeks start on Monday"
              // todayButton={"Today"}
            />
            <input type="text"  className="payee-input input-data" defaultValue={this.state.payee} onChange={this.handlePayee} />
            <input type="text" name="category" className="category input-data" defaultValue={this.state.category} onChange={this.handleCategory} />
            <input type="text" name="memo" className="memo input-data" defaultValue={this.state.memo} onChange={this.handleMemo} />
            <input type="number" name="outflow" className="outflow input-data" defaultValue={this.state.outflow} onChange={this.handleOutflow} />
            <input type="number" name="inflow" className="inflow input-data" defaultValue={this.state.inflow} onChange={this.handleInflow} />
          </div>
          <div className="boxing-reconcile body-row-item trigger">
            <i
              title="Reconcile account"
              id="filho"
              className={"icon-check handhover " + this.props.row.reconcile}
              // onClick={this.props.changeColor}
              ></i>
          </div>
        </div>

        <div className="table-header hand-text">
          <div className="checkboxOne body-row-item trigger">

          </div>
          <div className="boxing-info body-row-item trigger">

          </div>
          <div className="boxing-info body-row-item trigger">

          </div>
          <div className="table-header-input-field">
            <h5 className="date row-item input-data"></h5>
            <h5 className="payee row-item input-data" ></h5>
            <h5 className="category row-item input-data" ></h5>
            <h5 className="memo row-item input-data" ></h5>
            <button className="form-button outflow row-item input-data" type="submit" >Submit</button>
            <button className="form-button inflow row-item input-data" type="cancel" onClick={this.handleCancelation}>Cancel</button>
          </div>
          <div className="boxing-reconcile body-row-item trigger">

          </div>
        </div>



      </form>
    )
  }
}
