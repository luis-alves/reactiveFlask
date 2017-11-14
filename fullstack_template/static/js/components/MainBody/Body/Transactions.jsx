import React from "react"
import {
    connect
} from "react-redux"


import { fetchTransactions, updateTransactions } from "../../../actions/transactionsActions"
import ColorModal from "./modal/ColorModal"
import DataInput from "./inputs/DataInput"

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
        this.state = {cursor: 'handhover', previous: null}
        this.handleHandover = this.handleHandover.bind(this)

    }

    componentWillMount() {
        this.props.dispatch(fetchTransactions())
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

    handleHandover(event) {
      let target = event.target
      this.setState({previous: target})

      if (target.classList.contains('trigger')) {
        console.log('0');

        // checkboxOne.classList.add('is-checked')
        // Se existe um clique anterior
        if (this.state.previous != null) {
          // Se o clique anterior for trigger
          // this.state.previous.parentElement.classList.remove('is-selected')
          if (this.state.previous.classList.contains('trigger')) {
            console.log('1');
            if (this.state.previous !== target) {
              console.log('2');
              this.state.previous.parentElement.classList.remove('is-selected', 'hand-text')
              let previousCheckbox = this.state.previous.parentElement.getElementsByClassName('checkbox')

              previousCheckbox[0].checked = false
            }
            else {
              console.log('3');
              this.state.previous.parentElement.classList.add('hand-text')
            }
          }
          else if (this.state.previous.classList.contains('table-header')) {
            console.log('4');
            this.state.previous.classList.remove('is-selected', 'hand-text')
          }
          else if (this.state.previous.classList.contains('checkbox')) {
            console.log('5');
            let checkbox = document.getElementsByClassName('is-checked')
            for (var i = 0; i < checkbox.length; i++) {
              checkbox[i].checked = false
            }
            for (var i = checkbox.length-1; i >=0; i--) {
               checkbox[i].parentElement.parentElement.classList.remove('is-selected', 'hand-text')
            }
          }
          // Se não for trigger
          else {
            console.log('6');
            this.state.previous.parentElement.parentElement.classList.remove('is-selected', 'hand-text')
          }
        }
        target.parentElement.classList.add('is-selected', 'hand-text')
        let checkboxOne = target.parentElement.getElementsByClassName('checkbox')
        // let checkboxOne = checkboxDiv.getElementsByClassName('checkbox')
        checkboxOne[0].checked = true
        checkboxOne[0].classList.add('is-checked')
      }
      else if (target.classList.contains('table-header')) {
        target.classList.add('is-selected', 'hand-text')
        if (this.state.previous != null) {
          if (this.state.previous.classList.contains('trigger')) {
            this.state.previous.parentElement.classList.remove('is-selected', 'hand-text')
          }
          else if (this.state.previous.classList.contains('table-header')) {
            this.state.previous.classList.remove('is-selected', 'hand-text')
          }
          else {
            this.state.previous.parentElement.parentElement.classList.remove('is-selected', 'hand-text')
          }
        }
      }
      else if (target.classList.contains('checkbox')) {
        target.parentElement.parentElement.classList.add('is-selected', 'hand-text')
        target.classList.add('is-checked')
      }
      else {
        target.parentElement.parentElement.classList.add('is-selected', 'hand-text')
        // target.classList.add('hand-text')
        if (this.state.previous != null) {
          if (this.state.previous.classList.contains('trigger')) {
            this.state.previous.parentElement.classList.remove('is-selected', 'hand-text')
          }
          else if (this.state.previous.classList.contains('table-header')) {
            this.state.previous.classList.remove('is-selected', 'hand-text')
          }
          else {
            this.state.previous.parentElement.parentElement.classList.remove('is-selected', 'hand-text')
          }
        }
      }



    }

    render() {
      if (this.props.transactions != null) {
          const rows = this.props.transactions.map((row) =>
              <div className={"table-header handhover"}
                   key={row._id['$oid']}
                   id={row._id['$oid']}
                   onClick={this.handleHandover.bind(event)}
                   >
                 <div className="checkboxOne row-item trigger">
                   <input className=" handhover checkbox" type="checkbox" name="" value="1"/>
                   <label htmlFor="checkboxOneInput"></label>
                 </div>
                 <div className="boxing-info row-item trigger">
                   <i className={"icon-info handhover " + row.flag}></i>
                 </div>
                 <div className="boxing-info row-item trigger" onClick={(e) => this.handleclick(e)}>
                   <i className={"icon-bookmark handhover " + row.bookmark}
                      onClick={this.setRow.bind(null, row)}
                      data-_id={row._id['$oid']}>
                   </i>
                 </div>
                 {/* <div className="table-header-input "> */}
                 <DataInput values={
                   {date:row.date,
                    payee: row.payee,
                    category: row.category,
                    memo: row.memo,
                    outflow: row.outflow,
                    inflow: row.inflow
                   }
                 }/>
               {/* </div> */}
                 <div className="boxing-reconcile row-item trigger">
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
