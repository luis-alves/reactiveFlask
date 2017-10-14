import React from "react"
import Entries from "./Entries"

export default class TableHeader extends React.Component {
  render () {
    return (
      <div className="table-header fixedheader" >
        <div className="checkboxOne">
          <input type="checkbox" name="" id="checkboxOneInput" value="1"/>
          <label htmlFor="checkboxOneInput"></label>
        </div>
        <div className="boxing-info">
          <i className="icon-info"></i>
        </div>
        <div className="boxing-info">
          <i className="icon-bookmark"></i>
        </div>
        <h5 className="date">DATE</h5>
        <h5 className="payee">PAYEE</h5>
        <h5 className="category">CATEGORY</h5>
        <h5 className="memo">MEMO</h5>
        <h5 className="outflow">OUTFLOW</h5>
        <h5 className="inflow">INFLOW</h5>
        <div className="boxing-reconcile">
          <i className="icon-check"></i>
        </div>
        {/* <div className="entries">
          <Entries />
        </div> */}

      </div>

    )
  }
}
