import React from "react"
import { connect } from "react-redux"
import ReactLoading from 'react-loading'

// Actions
import { fetchTransactions }
  from "../../../../../actions/transactionsActions"

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

    // changeColor = (elID) => {
    //   this.props.dispatch(updateTransactions(elID))
    // }

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

    handleCheck() {
      //this.props.dispatch(updateTransactionsCheckbox(id))
    }

    render() {
      if (this.props.transactions !== null) {
        const {rows} = this.state
        const allRows = this.props.transactions.map((row, index) =>
          <Row
            key={index}
            row={row}
            elID={row['_id']['$oid']}
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
          <ReactLoading
            className='spining'
            type='spinningBubbles'
            color='#444'
            height='75px'
            width='75px' />
        )
      }
    }
}
