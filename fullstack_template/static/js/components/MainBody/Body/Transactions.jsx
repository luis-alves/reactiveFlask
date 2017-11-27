import React from "react"
import {
    connect
} from "react-redux"
import ReactLoading from 'react-loading'

import { fetchTransactions, updateTransactions } from "../../../actions/transactionsActions"
import ColorModal from "./modal/ColorModal"
import ResultData from "./inputs/ResultData"
import InputData from "./inputs/InputData"
import Row from "./inputs/Row"

@connect(store => {
    return {
        transactions: store.transactions.transactions
    }
})
export default class Transactions extends React.Component {
    constructor(props) {
        super(props)
        this.props.dispatch(fetchTransactions())
        this.changeColor = this.changeColor.bind(this)
        this.setRow = this.setRow.bind(this)
        this.state = {rows: {}, pointerY: null}
        this.handleSelect = this.handleSelect.bind(this)
        // this.handleInput = this.handleInput.bind(this)

    }

    changeColor(e) {
      e.stopPropagation()
      this.props.dispatch(updateTransactions(e))
    }

    setRow (row, event) {
      this.setState({row: event.currentTarget.dataset._id})
      var temp = this.refs.overlay;
	    temp.style.visibility = (temp.style.visibility == "visible") ? "hidden" : "visible";
    }

    handleclick = (e) => {
      e.stopPropagation()
      this.setState({pointerY: e.target.offsetTop-25})
    }

    handleSelect = () => {
      //const {rows} = this.state
      this.setState({
        rows:{
          //...rows,
          [rowId]:true
        }
      })
    }

    render() {
      if (this.props.transactions !== null) {
        const {rows} = this.state
        const allRows = this.props.transactions.map((row, index) =>
        <div className="table-header handhover"
             key={row._id['$oid']}
             id={row._id['$oid']}
             // onClick={this.handleHandover.bind(this)}
             >
          <div className="checkboxOne body-row-item trigger">
           <input className=" handhover checkbox" type="checkbox" name="" value="1"/>
           <label htmlFor="checkboxOneInput"></label>
          </div>
          <div className="boxing-info body-row-item trigger">
           <i className={"icon-info handhover " + row.flag}></i>
          </div>
          <div
            className="boxing-info body-row-item trigger"
            onClick={(e) => this.handleclick(e)}
            >
           <i className={"icon-bookmark handhover " + row.bookmark}
              onClick={this.setRow.bind(null, row)}
              data-_id={row._id['$oid']}>
           </i>
          </div>
          <Row
            key={index}
            row={row}
            handleSelect={this.handleSelect}
            rowId={index}
            isSelected={rows[index]}
          />
          <div className="boxing-reconcile body-row-item trigger">
            <i
              title="Reconcile account"
              id="filho"
              className={"icon-check handhover " + row.reconcile}
              onClick={this.changeColor}
              ></i>
          </div>
          <div id="overlay" ref="overlay" onClick={this.setRow.bind(null)}>
            <div>
              <ColorModal rowId={this.state.row}/>
            </div>
          </div>
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
        return (
          <div>{allRows}</div>
      )}
      else {
        return (
          <ReactLoading className='spining' type='spinningBubbles' color='#444' height='75px' width='75px' />
        )
      }
    }
}
