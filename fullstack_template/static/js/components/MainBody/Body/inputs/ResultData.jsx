import React from "react"
// import DayPickerInput from "react-day-picker"
// import 'react-day-picker/lib/style.css';

const ResultData = props =>
// console.log(props.row);
  <div className="table-header handhover"
       key={row._id['$oid']}
       id={row._id['$oid']}
       // onClick={this.handleHandover.bind(this)}
       >
    <div className="checkboxOne body-row-item trigger">
     <input className=" handhover checkbox" type="checkbox" name="" value="1"/>
     <label htmlFor="checkboxOneInput"></label>
    </div>
    <div className="boxing-info body-row-item trigger">
     <i className={"icon-info handhover " + row.flag}></i>
    </div>
    <div
      className="boxing-info body-row-item trigger"
      onClick={(e) => this.handleclick(e)}
      >
     <i className={"icon-bookmark handhover " + row.bookmark}
        onClick={this.setRow.bind(null, row)}
        data-_id={row._id['$oid']}>
     </i>
    </div>
    <div className="table-header-input " onClick={props.onclick}>
      <h5 className='date body-row-item' >{props.row.date}</h5>
      <h5 className='payee body-row-item' >{props.row.payee}</h5>
      <h5 className='category body-row-item' >{props.row.category}</h5>
      <h5 className='memo body-row-item' >{props.row.memo}</h5>
      <h5 className='outflow body-row-item'>{props.row.outflow}</h5>
      <h5 className='inflow body-row-item' >{props.row.inflow}</h5>
    </div>
    <div className="boxing-reconcile body-row-item trigger">
      <i
        title="Reconcile account"
        id="filho"
        className={"icon-check handhover " + row.reconcile}
        onClick={this.changeColor}
        ></i>
    </div>
    <div id="overlay" ref="overlay" onClick={this.setRow.bind(null)}>
      <div>
        <ColorModal rowId={this.state.row}/>
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

export default ResultData
