import React from "react"
import { connect } from "react-redux"
import ReactLoading from 'react-loading'

// Actions
import { fetchTransactions, updateTransactions } from "../../../../../actions/transactionsActions"

import Row from "./rows/Row"


@connect(store => {
    return { transactions: store.transactions.transactions }
})
export default class Transactions extends React.Component {
    constructor(props) {
        super(props)
        this.props.dispatch(fetchTransactions())
        this.state = {rows: {}, pointerY: null, row: null}
    }

    changeColor = (e) => {
      e.stopPropagation()
      this.props.dispatch(updateTransactions(e))
    }

    handleSelect = (rowId) => {
      this.setState({
        rows:{
          [rowId]:true
        }
      })
    }

    handleUnselect = (rowId) => {
      this.setState({
        rows: {[rowId]:false}
      })
    }

    handleCheck = (id) => {
      console.log('dfsds ' +id);
      this.props.dispatch(updateTransactionsCheckbox(id))
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
            handleCheck={this.handleCheck}
            rowId={index}
            isSelected={rows[index]}
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