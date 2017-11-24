import React from "react"
import Entries from "./Entries"

export default class TableHeader extends React.Component {
  render () {
    return (
      <div className="table-header fixedheader" >
        <div className="checkboxOne head-row-item">
          <input type="checkbox" name="" id="checkboxOneInput" value="1"/>
          <label htmlFor="checkboxOneInput"></label>
        </div>
        <div className="boxing-info head-row-item">
          <i className="icon-info"></i>
        </div>
        <div className="boxing-info head-row-item">
          <i className="icon-bookmark"></i>
        </div>
        <div className="table-header-input-data">
          <h5 className="date head-row-item ">DATE</h5>
          <h5 className="payee head-row-item ">PAYEE</h5>
          <h5 className="category head-row-item ">CATEGORY</h5>
          <h5 className="memo head-row-item ">MEMO</h5>
          <h5 className="outflow head-row-item ">OUTFLOW</h5>
          <h5 className="inflow head-row-item ">INFLOW</h5>

        </div>
        <div className="boxing-reconcile head-row-item">
          <i className="icon-check"></i>
        </div>
        <div className="blank">
        </div>

      </div>

    )
  }
}
