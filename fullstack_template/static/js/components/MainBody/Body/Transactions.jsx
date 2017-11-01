import React from "react"
import {
    connect
} from "react-redux"


import { fetchTransactions, updateTransactions } from "../../../actions/transactionsActions"
import ColorModal from "./modal/ColorModal"


@connect(store => {
    return {
        transactions: store.transactions.transactions
    }
})
export default class Transactions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isActive: false}
        this.changeColor = this.changeColor.bind(this)
        this.setRow = this.setRow.bind(this)
    }

    componentWillMount() {
        this.props.dispatch(fetchTransactions())
    }

    changeColor(e) {
      this.props.dispatch(updateTransactions(e))
    }

    setRow (row, event) {
      this.setState({row: event.currentTarget.dataset._id})
      var temp = this.refs.overlay;
	    temp.style.visibility = (temp.style.visibility == "visible") ? "hidden" : "visible";
    }

    handleclick = (e) => {
      this.setState({pointerY: e.target.offsetTop-25})
      console.log(e.target.offsetTop);
    }

    render() {
      if (this.props.transactions != null) {
          const rows = this.props.transactions.map((row) =>
              <div className="table-header handhover"
                   key={row._id['$oid']}
                   id={row._id['$oid']}>
                 <div className="checkboxOne handhover">
                   <input type="checkbox" name="" id="checkboxOneInput" value="1"/>
                   <label htmlFor="checkboxOneInput"></label>
                 </div>
                 <div className="boxing-info handhover">
                   <i className={"icon-info handhover " + row.flag}></i>
                 </div>
                 <div className="boxing-info handhover" onClick={(e) => this.handleclick(e)}>
                   <i className={"icon-bookmark handhover " + row.bookmark}
                      onClick={this.setRow.bind(null, row)}
                      data-_id={row._id['$oid']}>
                   </i>
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
                <div id="overlay" ref="overlay" onClick={this.setRow.bind(null)}>
                  <div>
                    <ColorModal rowId={this.state.row}/>
                  </div>
                </div>
                <div className="article-row">{rows}</div>
                <style>{`
                  #overlay {
                    visibility: hidden;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    width:100%;
                    height:100%;
                    padding-left: 360px;
                    padding-top: ${this.state.pointerY}`+`px;
                    text-align:center;
                    z-index: 1000;
                  }
                `}
                </style>
              </div>
          )
      }
      return (
          <div>

    </div>
      )
    }
}
