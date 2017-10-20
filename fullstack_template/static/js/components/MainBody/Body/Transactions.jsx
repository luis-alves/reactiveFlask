import React from "react"
import { connect } from "react-redux"

import { fetchTransactions } from "../../../actions/transactionsActions"

@connect(store => {
  return {
    transactions: store.transactions.transactions
  }
})
export default class Transactions extends React.Component {

  componentWillMount () {
    this.props.dispatch(fetchTransactions())
  }

  render () {
    // const { transactions } = this.props
      let arr = []
      arr.push(this.props.transactions)
      const mapped = arr.map( (row, i=0) => {
      if (row) {
        return (
          <div className="article-row" key={i}>
            <div className="table-header">
            <div className="checkboxOne">
             <input type="checkbox" name="" id="checkboxOneInput" value="1"/>
             <label htmlFor="checkboxOneInput"></label>
            </div>
            <div className="boxing-info">
              <i className="icon-info not-present"></i>
            </div>
            <div className="boxing-info">
              <i className="icon-bookmark unchecked"></i>
            </div>
            <h5 className="date">{row[i]['date']}</h5>
            <h5 className="payee">{row[i]['payee']}</h5>
            <h5 className="category">{row[i]['category']}</h5>
            <h5 className="memo">{row[i]['Memo']}</h5>
            <h5 className="outflow">{row[i]['outflow']}</h5>
            <h5 className="inflow">{row[i]['inflow']}</h5>
            <div className="boxing-reconcile">
              <i title="Reconcile account" className="icon-check unchecked"></i>
            </div>
          </div>
          </div>
      )
    }

      })
      return (
        <div>
          <ul>{mapped}</ul>
        </div>
      )


    // for (var row in this.props.transactions) {
    //   console.log(row);
    //   if (this.props.transactions.hasOwnProperty(row)) {
    //
    //       <div className="article-row">
    //
    //         <div className="table-header">
    //           <div className="checkboxOne">
    //             <input type="checkbox" name="" id="checkboxOneInput" value="1"/>
    //             <label htmlFor="checkboxOneInput"></label>
    //           </div>
    //           <div className="boxing-info">
    //             <i className="icon-info not-present"></i>
    //           </div>
    //           <div className="boxing-info">
    //             <i className="icon-bookmark unchecked"></i>
    //           </div>
    //           {console.log(row.category)}
    //           <h5 className="date">{this.props.transactions}</h5>
    //           {/* <h5 className="payee">{this.props.transactions['payee']}</h5> */}
    //           {/* <h5 className="category">{this.props.transactions['category']}</h5>
    //           <h5 className="memo">{this.props.transactions['Memo']}</h5>
    //           <h5 className="outflow">{this.props.transactions['outflow']}</h5>
    //           <h5 className="inflow">{this.props.transactions['inflow']}</h5> */}
    //           <div className="boxing-reconcile">
    //             <i title="Reconcile account" className="icon-check unchecked"></i>
    //           </div>
    //         </div>
    //
    //       </div>
    //
    //   }
    // }


  }
}
