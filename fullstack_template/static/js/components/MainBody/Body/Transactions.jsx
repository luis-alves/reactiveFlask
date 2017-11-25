import React from "react"
import {
    connect
} from "react-redux"


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
        this.changeColor = this.changeColor.bind(this)
        // this.setRow = this.setRow.bind(this)
        this.state = {rows: {}, selected: {}}
        this.handleSelect = this.handleSelect.bind(this)
        // this.handleInput = this.handleInput.bind(this)

    }

    componentWillMount() {
        this.props.dispatch(fetchTransactions())
    }


    changeColor(e) {
      e.stopPropagation()
      this.props.dispatch(updateTransactions(e))
    }

    // setRow (row, event) {
    //   this.setState({row: event.currentTarget.dataset._id})
    //   var temp = this.refs.overlay;
	  //   temp.style.visibility = (temp.style.visibility == "visible") ? "hidden" : "visible";
    // }

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
      const {rows} = this.state
      const {transactions} = this.props.transactions
      console.log(transactions);
      return transactions.map((row, index) => {
        const isSelected = rows[index]
        return (
          <Row
            row={row}
            handleSelect={this.handleSelect}
            rowId={rowId}
            isSelected={isSelected}
          />
        )
      })
    }
}
