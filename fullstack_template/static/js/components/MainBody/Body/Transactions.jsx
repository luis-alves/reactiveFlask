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

    handleSelect = (rowId) => {
      // const {rows} = this.state
      this.setState({
        rows:{
          // ...rows,
          [rowId]:true
        }
      })
    }

    render() {
      if (this.props.transactions !== null) {
        const {rows} = this.state
        const allRows = this.props.transactions.map((row, index) =>

          <Row
            key={index}
            row={row}
            handleSelect={this.handleSelect}
            rowId={index}
            isSelected={rows[index]}
          />
          
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
