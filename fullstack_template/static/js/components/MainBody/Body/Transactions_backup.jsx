import React from "react"
import {
    connect
} from "react-redux"
import 'react-day-picker/lib/style.css';
import DayPickerInput from "react-day-picker"


import { fetchTransactions, updateTransactions } from "../../../actions/transactionsActions"
import ColorModal from "./modal/ColorModal"
import ResultData from "./inputs/ResultData"
import InputData from "./inputs/InputData"

@connect(store => {
    return {
        transactions: store.transactions.transactions
    }
})
export default class Transactions extends React.Component {
    constructor(props) {
        super(props)
        this.changeColor = this.changeColor.bind(this)
        this.changeColorBookmark = this.changeColorBookmark.bind(this)
        this.state = {previous: null, edit: false}
        this.handleHandover = this.handleHandover.bind(this)
        // this.handleInput = this.handleInput.bind(this)
        this.uncheckPreviousTableHeader = this.uncheckPreviousTableHeader.bind(this)
        this.uncheckPreviousCheckbox = this.uncheckPreviousCheckbox.bind(this)
        this.uncheckPreviousInputElement = this.uncheckPreviousInputElement.bind(this)
        this.uncheckPreviousTrigger = this.uncheckPreviousTrigger.bind(this)
        this.uncheckPreviousSameTableHeader = this.uncheckPreviousSameTableHeader.bind(this)
    }

    componentWillMount() {
        this.props.dispatch(fetchTransactions())
    }

    changeColor(e) {
      e.stopPropagation()
      this.props.dispatch(updateTransactions(e))
    }

    changeColorBookmark (row, event) {
      this.setState({row: event.currentTarget.dataset._id})
      var temp = this.refs.overlay;
	    temp.style.visibility = (temp.style.visibility == "visible") ? "hidden" : "visible";
    }

    handleclick = (e) => {
      e.stopPropagation()
      this.setState({pointerY: e.target.offsetTop-25})
    }

    uncheckPreviousTableHeader() {
      let checkbox = this.state.previous.getElementsByClassName('checkbox')
      let handCheck = this.state.previous.getElementsByClassName('table-header-input')
      handCheck[0].classList.remove('hand-text')
      for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false
      }
      for (var i = checkbox.length-1; i >= 0; i--) {
        checkbox[i].classList.remove('is-checked')
      }
    }

    uncheckPreviousCheckbox() {
      let checkbox = document.getElementsByClassName('is-checked')
      for (var i = 0; i < checkbox.length; i++) {
        let parentEl = checkbox[i].parentElement.parentElement.getElementsByClassName('table-header-input')
        parentEl[0].classList.remove('hand-text')
        checkbox[i].checked = false
      }
      for (var i = checkbox.length-1; i >=0; i--) {
         checkbox[i].parentElement.parentElement.classList.remove('is-selected')
         checkbox[i].classList.remove('is-checked')
      }
    }

    uncheckPreviousInputElement() {
      let checkbox = this.state.previous.parentElement.parentElement.getElementsByClassName('checkbox')
      let handCheck = this.state.previous.parentElement.parentElement.getElementsByClassName('table-header-input')
      handCheck[0].classList.remove('hand-text')
      for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false
      }
      for (var i = checkbox.length-1; i >= 0; i--) {
        checkbox[i].classList.remove('is-checked')
      }
    }

    uncheckPreviousTrigger() {
      let checkbox = this.state.previous.parentElement.getElementsByClassName('checkbox')
      let handCheck = this.state.previous.parentElement.getElementsByClassName('table-header-input')
      handCheck[0].classList.remove('hand-text')
      for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false
      }
      for (var i = checkbox.length-1; i >= 0; i--) {
        checkbox[i].classList.remove('is-checked')
      }
    }

    uncheckPreviousSameTableHeader() {
      let checkbox = this.state.previous.getElementsByClassName('checkbox')
      let handCheck = this.state.previous.getElementsByClassName('table-header-input')
      handCheck[0].classList.remove('hand-text')
      for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false
      }
      for (var i = checkbox.length-1; i >= 0; i--) {
        checkbox[i].classList.remove('is-checked')
      }
    }

    handleHandover = (event) => {

      event.preventDefault()
      let target = event.target
      this.setState({previous: target})

      if (target.parentElement.classList.contains('hand-text')) {
        const data = target.parentElement
        console.log(data);
        const date = data.getElementsByClassName('date')[0].innerHTML
        console.log(date);
        // data.innerHTML = '<form action="" class="data-form"><input data-date-format="DD-MM-YYYY" type="date" name="date" value="'+date+'" className="date input-data" />\
        data.innerHTML = '<form action="" class="data-form">'+<DayPickerInput className="date input-data"/>+'\
        <input type="text" size="10"  name="payee" class="payee input-data" />\
        <input type="text" name="category" class="category input-data" />\
        <input type="text" name="memo" class="memo input-data" />\
        <input type="number" name="outflow" class="outflow input-data" />\
        <input type="number" name="inflow" class="inflow input-data" /></form>'
        // const payee = target.parentElement.getElementsByClassName('payee')
        // const category = target.parentElement.getElementsByClassName('category')
        // const memo = target.parentElement.getElementsByClassName('memo')
        // const outflow = target.parentElement.getElementsByClassName('outflow')
        // const inflow = target.parentElement.getElementsByClassName('inflow')

        // target.parentElement.innerHTML = '<form action="" class="forme"></form>'
        // const tt = document.getElementsByClassName('forme')
        // var p = document.createElement("p")
        // console.log(tt);
        // tt.append(p)
        // date[0].innerHTML = '<input type="date" name="date" className="date input-data" />'
        // payee[0].innerHTML = '<input type="text" size="10"  name="payee" className="payee input-data" />'
        // category[0].innerHTML = '<input type="text" name="category" className="category input-data" />'
        // memo[0].innerHTML = '<input type="text" name="memo" className="memo input-data" />'
        // outflow[0].innerHTML = '<input type="number" name="outflow" className="outflow input-data" />'
        // inflow[0].innerHTML = '<input type="number" name="inflow" className="inflow input-data" />'

      }
      else if (target.classList.contains('input-data')) {


      }
      else {
        if (target.classList.contains('trigger')) {
          if (this.state.previous != null) {
            if (this.state.previous.classList.contains('trigger')) {
              this.state.previous.parentElement.classList.remove('is-selected')
              let handCheck = this.state.previous.parentElement.getElementsByClassName('table-header-input')
              handCheck[0].classList.remove('hand-text')
              let previousCheckbox = this.state.previous.parentElement.getElementsByClassName('checkbox')
              previousCheckbox[0].checked = false
              previousCheckbox[0].classList.remove('is-checked')
            }
            else if (this.state.previous.classList.contains('table-header')) {
              this.state.previous.classList.remove('is-selected')
              this.uncheckPreviousTableHeader()
            }
            else if (this.state.previous.classList.contains('checkbox')) {
              this.uncheckPreviousCheckbox()
            }
            else {
              this.state.previous.parentElement.parentElement.classList.remove('is-selected')
              this.uncheckPreviousInputElement()
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

              this.uncheckPreviousTrigger()
            }
            else if (this.state.previous.classList.contains('table-header')) {
              this.state.previous.classList.remove('is-selected')
              this.uncheckPreviousSameTableHeader()
            }
            else if (this.state.previous.classList.contains('checkbox')) {
              this.uncheckPreviousCheckbox()
            }
            else {
              this.state.previous.parentElement.parentElement.classList.remove('is-selected')
              this.uncheckPreviousInputElement()
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
              this.uncheckPreviousTrigger()
            }
            else if (this.state.previous.classList.contains('table-header')) {
              this.state.previous.classList.remove('is-selected')
              this.uncheckPreviousSameTableHeader()
            }
            else if (this.state.previous.classList.contains('checkbox')) {
              this.uncheckPreviousCheckbox()
            }
            else {
              this.state.previous.parentElement.parentElement.classList.remove('is-selected')
              this.uncheckPreviousInputElement()
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

    }

    render() {
      if (this.props.transactions !== null) {
          const rows = this.props.transactions.map((row) =>
              <div className="table-header handhover"
                   key={row._id['$oid']}
                   id={row._id['$oid']}
                   onClick={this.handleHandover.bind(this)}
                   >
                 <div className="checkboxOne body-row-item trigger">
                   <input className=" handhover checkbox" type="checkbox" name="" value="1"/>
                   <label htmlFor="checkboxOneInput"></label>
                 </div>
                 <div className="boxing-info body-row-item trigger">
                   <i className={"icon-info handhover " + row.flag}></i>
                 </div>
                 <div className="boxing-info body-row-item trigger" onClick={(e) => this.handleclick(e)}>
                   <i className={"icon-bookmark handhover " + row.bookmark}
                      onClick={this.changeColorBookmark.bind(null, row)}
                      data-_id={row._id['$oid']}>
                   </i>
                 </div>
                 {/* <div className="table-header-input "> */}
                   <ResultData values={
                     {
                       date:row.date,
                       payee: row.payee,
                       category: row.category,
                       memo: row.memo,
                       outflow: row.outflow,
                       inflow: row.inflow
                     }
                   }
                   // onClick={this.handleInput.bind(event)}
                 />


                 <div className="boxing-reconcile body-row-item trigger">
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
                <div id="overlay" ref="overlay" onClick={this.changeColorBookmark.bind(null)}>
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
