import React from "react"
import {
    connect
} from "react-redux"


import { fetchTransactions, updateTransactions } from "../../../actions/transactionsActions"
import ColorModal from "./modal/ColorModal"
import DataInput from "./inputs/DataInput"
import FormInput from "./inputs/FormInput"

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
        this.uncheckPrevious = this.uncheckPrevious.bind(this)
        this.uncheckBox = this.uncheckBox.bind(this)
        this.uncheckAnotherBox = this.uncheckAnotherBox.bind(this)
        this.uncheckSingleParent = this.uncheckSingleParent.bind(this)
        this.uncheckTopParentBox = this.uncheckTopParentBox.bind(this)
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

    uncheckPrevious() {
      let checkbox = this.state.previous.getElementsByClassName('checkbox')
      for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false
      }
      for (var i = checkbox.length-1; i >= 0; i--) {
        checkbox[i].classList.remove('is-checked')
      }
    }

    uncheckBox() {
      let checkbox = document.getElementsByClassName('is-checked')
      for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false
      }
      for (var i = checkbox.length-1; i >=0; i--) {
         checkbox[i].parentElement.parentElement.classList.remove('is-selected', 'hand-text')
         checkbox[i].classList.remove('is-checked')
      }
    }

    uncheckAnotherBox() {
      let checkbox = this.state.previous.parentElement.parentElement.getElementsByClassName('checkbox')
      for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false
      }
      for (var i = checkbox.length-1; i >= 0; i--) {
        checkbox[i].classList.remove('is-checked')
      }
    }

    uncheckSingleParent() {
      let checkbox = this.state.previous.parentElement.getElementsByClassName('checkbox')
      for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false
      }
      for (var i = checkbox.length-1; i >= 0; i--) {
        checkbox[i].classList.remove('is-checked')
      }
    }

    uncheckTopParentBox() {
      let checkbox = this.state.previous.getElementsByClassName('checkbox')
      for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false
      }
      for (var i = checkbox.length-1; i >= 0; i--) {
        checkbox[i].classList.remove('is-checked')
      }
    }

    handleHandover(event) {
      let target = event.target
      this.setState({previous: target})

      if (target.classList.contains('trigger')) {
        if (this.state.previous != null) {
          if (this.state.previous.classList.contains('trigger')) {
              this.state.previous.parentElement.classList.remove('is-selected')
              let handCheck = this.state.previous.parentElement.getElementsByClassName('table-header-input')
              handCheck[0].classList.remove('hand-text')
              let previousCheckbox = this.state.previous.parentElement.getElementsByClassName('checkbox')
              previousCheckbox[0].checked = false
            }
          else if (this.state.previous.classList.contains('table-header')) {
            this.state.previous.classList.remove('is-selected', 'hand-text')
            this.uncheckPrevious()
          }
          else if (this.state.previous.classList.contains('checkbox')) {
            this.uncheckBox()
          }
          else {
            this.state.previous.parentElement.parentElement.classList.remove('is-selected')
            let handCheck = this.state.previous.parentElement.parentElement.getElementsByClassName('table-header-input')
            handCheck[0].classList.remove('hand-text')
            this.uncheckAnotherBox()
          }
        }
        target.parentElement.classList.add('is-selected')
        let handCheck = target.parentElement.getElementsByClassName('table-header-input')
        handCheck[0].classList.add('hand-text')
        let checkboxOne = target.parentElement.getElementsByClassName('checkbox')
        checkboxOne[0].checked = true
        checkboxOne[0].classList.add('is-checked')
      }
      else if (target.classList.contains('table-header')) {
        if (this.state.previous != null) {
          if (this.state.previous.classList.contains('trigger')) {
            this.state.previous.parentElement.classList.remove('is-selected')
            let handCheck = this.state.previous.parentElement.getElementsByClassName('table-header-input')
            handCheck[0].classList.remove('hand-text')
            this.uncheckSingleParent()
          }
          else if (this.state.previous.classList.contains('table-header')) {
            this.state.previous.classList.remove('is-selected')
            let handCheck = this.state.previous.getElementsByClassName('table-header-input')
            handCheck[0].classList.remove('hand-text')
            this.uncheckTopParentBox()
          }
          else if (this.state.previous.classList.contains('checkbox')) {
            let handCheck = this.state.previous.parentElement.parentElement.getElementsByClassName('table-header-input')
            handCheck[0].classList.remove('hand-text')
            this.uncheckBox()
          }
          else {
            this.state.previous.parentElement.parentElement.classList.remove('is-selected')
            let handCheck = this.state.previous.parentElement.parentElement.getElementsByClassName('table-header-input')
            handCheck[0].classList.remove('hand-text')
            this.uncheckAnotherBox()
          }
        }
        target.classList.add('is-selected')
        let handCheck = target.getElementsByClassName('table-header-input')
        handCheck[0].classList.add('hand-text')

        let checkboxOne = target.getElementsByClassName('checkbox')
        checkboxOne[0].checked = true
        checkboxOne[0].classList.add('is-checked')
      }
      else if (target.classList.contains('checkbox')) {
        if (target.classList.contains('is-checked')) {
          target.parentElement.parentElement.classList.remove('is-selected')
          let handCheck = this.state.previous.parentElement.parentElement.getElementsByClassName('table-header-input')
          handCheck[0].classList.remove('hand-text')
          target.classList.remove('is-checked')
          target.checked = false
        }
        else {
          target.parentElement.parentElement.classList.add('is-selected')
          target.classList.add('is-checked')
          let handCheck = target.parentElement.parentElement.getElementsByClassName('table-header-input')
          handCheck[0].classList.add('hand-text')

        }
      }
      else {
        if (this.state.previous != null) {
          if (this.state.previous.classList.contains('trigger')) {
            this.state.previous.parentElement.classList.remove('is-selected')
            let handCheck = this.state.previous.parentElement.getElementsByClassName('table-header-input')
            handCheck[0].classList.remove('hand-text')
            this.uncheckSingleParent()
          }
          else if (this.state.previous.classList.contains('table-header')) {
            this.state.previous.classList.remove('is-selected')
            let handCheck = this.state.previous.getElementsByClassName('table-header-input')
            handCheck[0].classList.remove('hand-text')
            this.uncheckTopParentBox()
          }
          else if (this.state.previous.classList.contains('checkbox')) {
            let handCheck = this.state.previous.parentElement.parentElement.getElementsByClassName('table-header-input')
            handCheck[0].classList.remove('hand-text')
            this.uncheckBox()
          }
          else {
            this.state.previous.parentElement.parentElement.classList.remove('is-selected')
            let handCheck = this.state.previous.parentElement.parentElement.getElementsByClassName('table-header-input')
            handCheck[0].classList.remove('hand-text')
            this.uncheckAnotherBox()
          }
        }
        target.parentElement.parentElement.classList.add('is-selected')
        let handCheck = target.parentElement.parentElement.getElementsByClassName('table-header-input')
        handCheck[0].classList.add('hand-text')

        let checkbox = target.parentElement.parentElement.getElementsByClassName('checkbox')
        for (var i = 0; i < checkbox.length; i++) {
          checkbox[i].checked = true
        }
        for (var i = checkbox.length-1; i >= 0; i--) {
          checkbox[i].classList.add('is-checked')
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
