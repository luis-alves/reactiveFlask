import React from "react"
// import DayPickerInput from "react-day-picker"
// import 'react-day-picker/lib/style.css';

const ResultData = props =>
// console.log(props.row);
  <div className="table-header-input " onClick={props.onclick}>
    <h5 className='date body-row-item' >{props.row.date}</h5>
    <h5 className='payee body-row-item' >{props.row.payee}</h5>
    <h5 className='category body-row-item' >{props.row.category}</h5>
    <h5 className='memo body-row-item' >{props.row.memo}</h5>
    <h5 className='outflow body-row-item'>{props.row.outflow}</h5>
    <h5 className='inflow body-row-item' >{props.row.inflow}</h5>
  </div>

export default ResultData
