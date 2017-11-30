import React from "react"

import ColorModal from "../modal/ColorModal"

export default class ResultData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {row: null}
    this.setRow = this.setRow.bind(this)
    this.handleclick = this.handleclick.bind(this)
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

  render() {
    return (

      <div className="table-header handhover"
           key={this.props.row._id['$oid']}
           id={this.props.row._id['$oid']}
           onClick={this.props.onclick}
           >
        <div className="checkboxOne body-row-item trigger">
         <input className=" handhover checkbox" type="checkbox" name="" value="1"/>
         <label htmlFor="checkboxOneInput"></label>
        </div>
        <div className="boxing-info body-row-item trigger">
         <i className={"icon-info handhover " + this.props.row.flag}></i>
        </div>
        <div
          className="boxing-info body-row-item trigger"
          onClick={(e) => this.handleclick(e)}
          >
         <i className={"icon-bookmark handhover " + this.props.row.bookmark}
            onClick={this.setRow.bind(null, this.props.row)}
            data-_id={this.props.row._id['$oid']}>
         </i>
        </div>
        <div className="table-header-input-field "
          // onClick={this.props.onclick}
          >
          <h5 className='date body-row-item' >{this.props.row.date}</h5>
          <h5 className='payee body-row-item' >{this.props.row.payee}</h5>
          <h5 className='category body-row-item' >{this.props.row.category}</h5>
          <h5 className='memo body-row-item' >{this.props.row.memo}</h5>
          <h5 className='outflow body-row-item'>{this.props.row.outflow}</h5>
          <h5 className='inflow body-row-item' >{this.props.row.inflow}</h5>
        </div>
        <div className="boxing-reconcile body-row-item trigger">
          <i
            title="Reconcile account"
            id="filho"
            className={"icon-check handhover " + this.props.row.reconcile}
            onClick={this.props.changeColor}
            ></i>
        </div>
        <div id="overlay" ref="overlay"
          onClick={this.setRow.bind(null)}
          >
          <div>
            <ColorModal targetId={this.state.row}/>
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
    }
}
