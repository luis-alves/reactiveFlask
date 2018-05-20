import React from "react"
import { connect } from "react-redux"
import ReactLoading from 'react-loading'

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

    highlightRow = (indexRowNumber) => {
      this.setState({
        rows:{
          [indexRowNumber]:true
        }
      })
    }

    unhighlightRow = (indexRowNumber) => {
      this.setState({
        rows: {[indexRowNumber]:false}
      })
    }

    render() {
      if (this.props.transactions !== null) {
        const {rows} = this.state
        const allRows = this.props.transactions.map((row, index) =>
          <Row
            key={index}
            row={row}
            dbIdNumber={row['_id']['$oid']}
            highlightRow={this.highlightRow}
            unhighlightRow={this.unhighlightRow}
            indexRowNumber={index}
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
