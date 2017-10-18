import React from "react"

export default class Dummy extends React.Component {
  render() {
    return(
      <div className="table-header">
        <div className="checkboxOne">
          <input type="checkbox" name="" id="checkboxOneInput" value="1"/>
          <label htmlFor="checkboxOneInput"></label>
        </div>
        <div className="boxing-info">
          <i className="icon-info not-present"></i>
        </div>
        <div className="boxing-info">
          <i className="icon-bookmark unchecked"></i>
        </div>
        <h5 className="date">{this.props.data['date']}</h5>
        <h5 className="payee">{this.props.data['payee']}</h5>
        <h5 className="category">{this.props.data['category']}</h5>
        <h5 className="memo">{this.props.data['Memo']}</h5>
        <h5 className="outflow">{this.props.data['outflow']}</h5>
        <h5 className="inflow">{this.props.data['inflow']}</h5>
        <div className="boxing-reconcile">
          <i title="Reconcile account" className="icon-check unchecked"></i>
        </div>
        {/* <div className="entries">
          <Entries />
        </div> */}

      </div>
    )
  }
}
