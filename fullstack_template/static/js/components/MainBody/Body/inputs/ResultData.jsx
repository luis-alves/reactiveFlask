import React from "react"

import ColorModal from "../modal/ColorModal"

export default class ResultData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {row: null, visibility: false}
    this.changeColorBookmark = this.changeColorBookmark.bind(this)
  }

  changeColorBookmark (row, event) {
    this.setState({pointerY: event.target.offsetTop-25})
    this.setState({
      row: event.currentTarget.dataset._id,
      visibility: !this.state.visibility
    })
    event.stopPropagation()
  }


  render() {
    return (
      <div className="table-header handhover"
           key={this.props.row._id['$oid']}
           id={this.props.row._id['$oid']}

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
          >
          <i className={"icon-bookmark handhover " + this.props.row.bookmark}
              onClick={this.changeColorBookmark.bind(null, this.props.row)}
              data-_id={this.props.row._id['$oid']}>
          </i>
        </div>
        <div className="table-header-input-field "
          onClick={this.props.onclick}
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
        {this.state.visibility ? (
          <div
            id="overlay"
            ref="overlay"
            onClick={this.changeColorBookmark.bind(null)}
            >
            <div>
              <ColorModal targetId={this.state.row}/>
            </div>
          </div>
        ) : null}
        <style>{`
          #overlay {
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
