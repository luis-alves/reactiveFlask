import React from "react"
import {
    connect
} from "react-redux"

import {
    fetchTransactions, updateTransactions
} from "../../../actions/transactionsActions"


@connect(store => {
    return {
        transactions: store.transactions.transactions
    }
})
export default class Transactions extends React.Component {
    constructor(props) {
        super(props)
        this.changeColor = this.changeColor.bind(this)
    }

    componentWillMount() {
        this.props.dispatch(fetchTransactions())
    }

    changeColor(e) {
      this.props.dispatch(updateTransactions(e))
    }

    render() {
        if (this.props.transactions != null) {
            const rows = this.props.transactions.map((row) =>
                <div className="table-header handhover" key={row._id['$oid']} id={row._id['$oid']}>
                   <div className="checkboxOne handhover">
                     <input type="checkbox" name="" id="checkboxOneInput" value="1"/>
                     <label htmlFor="checkboxOneInput"></label>
                   </div>
                   <div className="boxing-info handhover">
                     <i className={"icon-info handhover " + row.flag}></i>
                   </div>
                   <div className="boxing-info handhover">
                     <i className={"icon-bookmark handhover " + row.bookmark}></i>
                   </div>
                   <h5 className="date handhover">{row.date}</h5>
                   <h5 className="payee handhover">{row.payee}</h5>
                   <h5 className="category handhover">{row.category}</h5>
                   <h5 className="memo handhover">{row.Memo}</h5>
                   <h5 className="outflow handhover">{row.outflow}</h5>
                   <h5 className="inflow handhover">{row.inflow}</h5>
                   <div className="boxing-reconcile handhover" id="parente">
                     <i
                       title="Reconcile account"
                       id="filho"
                       className={"icon-check handhover " + row.reconcile}
                       onClick={this.changeColor}></i>
                   </div>
                 </div>
            )
            return (
                <div>
          <div className="article-row">{rows}</div>
        </div>
            )
        }
        return (
            <div>
        <h2>No transactions data</h2>
      </div>
        )
    }
}
