import React from "react"
import {
    connect
} from "react-redux"

import {
    fetchTransactions
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
        alert(e.target.parentElement.parentElement.id);
    }

    render() {
        if (this.props.transactions != null) {
            const rows = this.props.transactions.map((row) =>
                <div className="table-header" key={row._id['$oid']} id={row._id['$oid']}>
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
                   <h5 className="date">{row.date}</h5>
                   <h5 className="payee">{row.payee}</h5>
                   <h5 className="category">{row.category}</h5>
                   <h5 className="memo">{row.Memo}</h5>
                   <h5 className="outflow">{row.outflow}</h5>
                   <h5 className="inflow">{row.inflow}</h5>
                   <div className="boxing-reconcile" id="parente">
                     <i title="Reconcile account" id="filho" className="icon-check unchecked" onClick={this.changeColor}></i>
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

    // }

}


// return (
//   <div>
//     <ul>{mapped}</ul>
//   </div>
// )


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
