import React from "react"

export default class FormInput extends React.Component {
  constructor (props) {
    super (props)
  }

  render() {
    <form onSubmit={this-handleSubmit}>
      <div className="table-header-input ">
        <h5 className="date row-item input-data" ><input type="date" name="date" /></h5>
        <h5 className="payee row-item input-data" ><input type="text" name="date" /></h5>
        <h5 className="category row-item input-data" ><input type="text" name="date" /></h5>
        <h5 className="memo row-item input-data" ><input type="text" name="date" /></h5>
        <h5 className="outflow row-item input-data"><input type="number" name="date" /></h5>
        <h5 className="inflow row-item input-data" ><input type="number" name="date" /></h5>
      </div>
    </form>
  }
}
