import React from "react"
import Entries from "./Entries"

export default class TableHeader extends React.Component {
  render () {
    return (
      <div className="table-header fixedheader" >
        <div className="checkboxOne row-item">
          <input type="checkbox" name="" id="checkboxOneInput" value="1"/>
          <label htmlFor="checkboxOneInput"></label>
        </div>
        <div className="boxing-info row-item">
          <i className="icon-info"></i>
        </div>
        <div className="boxing-info row-item">
          <i className="icon-bookmark"></i>
        </div>
        <div className="table-header-input-data">
          <h5 className="date row-item ">DATE</h5>
          <h5 className="payee row-item ">PAYEE</h5>
          <h5 className="category row-item ">CATEGORY</h5>
          <h5 className="memo row-item ">MEMO</h5>
          <h5 className="outflow row-item ">OUTFLOW</h5>
          <h5 className="inflow row-item ">INFLOW</h5>

        </div>
        <div className="boxing-reconcile row-item">
          <i className="icon-check"></i>
        </div>
        <div className="blank">
        </div>

      </div>

    )
  }
}
