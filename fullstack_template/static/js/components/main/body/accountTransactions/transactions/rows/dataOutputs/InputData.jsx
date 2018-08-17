import React from "react"
import Datepicker from "react-datepicker";
import { connect } from "react-redux"

require('react-datepicker/dist/react-datepicker.min.css');
const moment = require('moment')

// Actions
import { updateTransactionsInputData } from "../../../../../../../actions/transactionsActions"


@connect(store => {
    return { transactions: store.transactions.transactions }
})
export default class InputData extends React.Component {
  constructor(props) {
    super(props)
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

  handleChange = (date) => {
    this.setState({startDate: date});
  }

  handlePayee = (e) => {
    this.setState({payee: e.target.value})
  }

  handleCategory = (e) => {
    this.setState({category: e.target.value})
  }

  handleMemo = (e) => {
    this.setState({memo: e.target.value})
  }

  handleOutflow = (e) => {
    this.setState({outflow: e.target.value})
  }

  handleInflow = (e) => {
    this.setState({inflow: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const date = moment(this.state.startDate, "YYYY-MM.DD").format('DD-MM-YYYY')

    this.props.dispatch(updateTransactionsInputData(this.state, date))
    this.props.unselectRow()
  }

  handleCancelation = (e) => {
    e.preventDefault()
    this.props.unselectRow()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} method="post" className="form-transaction">
        <div className="table-header handhover"
             key={this.props.row._id['$oid']}
             id={this.props.row._id['$oid']}
        >
          <div className="checkboxTwo body-row-item trigger">
            <i className=" handhover checkbox icon-checked" />
          </div>
          <div className="boxing-info body-row-item trigger">
            <i className={"icon-info handhover " + this.props.row.flag}></i>
          </div>
          <div className="boxing-info body-row-item trigger">
            <i className={"icon-bookmark handhover " + this.props.row.bookmark}
               data-_id={this.props.row._id['$oid']}>
            </i>
          </div>
          <div className="table-header-input-data">
            <Datepicker
              className="date-input row-item input-data"
              selected={this.state.startDate}
              onChange={this.handleChange}
              dateFormat="DD/MM/YYYY"
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
