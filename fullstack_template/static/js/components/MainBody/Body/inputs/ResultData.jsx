import React from "react"
// import DayPickerInput from "react-day-picker"
// import 'react-day-picker/lib/style.css';

const ResultData = props =>
  <div className="table-header-input ">
    <h5 className='date body-row-item' >{props.values.date}</h5>
    <h5 className='payee body-row-item' >{props.values.payee}</h5>
    <h5 className='category body-row-item' >{props.values.category}</h5>
    <h5 className='memo body-row-item' >{props.values.memo}</h5>
    <h5 className='outflow body-row-item'>{props.values.outflow}</h5>
    <h5 className='inflow body-row-item' >{props.values.inflow}</h5>
  </div>

export default ResultData
