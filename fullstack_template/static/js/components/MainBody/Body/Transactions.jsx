import React from "react"
import {
    connect
} from "react-redux"
import ReactLoading from 'react-loading'

// Actions
import { fetchTransactions, updateTransactions } from "../../../actions/transactionsActions"

// Component
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
        // this.changeColorBookmark = this.changeColorBookmark.bind(this)
        this.state = {rows: {}, pointerY: null, row: null}
        this.handleSelect = this.handleSelect.bind(this)
        this.handleUnselect = this.handleUnselect.bind(this)
        // this.handleInput = this.handleInput.bind(this)
    }

    changeColor(e) {
      e.stopPropagation()
      this.props.dispatch(updateTransactions(e))
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

    handleUnselect = (rowId) => {
      this.setState({
        rows: {[rowId]:false}
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
            handleUnselect={this.handleUnselect}
            rowId={index}
            isSelected={rows[index]}
            // handleclick={this.handleclick}
            changeColorBookmark={this.changeColorBookmark}
            changeColor={this.changeColor}
          />
      )
        return (
          <div>{allRows}</div>
      )
    }
      else {
        return (
          <ReactLoading className='spining' type='spinningBubbles' color='#444' height='75px' width='75px' />
        )
      }
    }
}
