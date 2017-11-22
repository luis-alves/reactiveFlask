import React from "react"

export default class FormInput extends React.Component {
  constructor (props) {
    super (props)
  }

  render() {
    return (
    <form >
      <div className="table-header-input-data ">
        <h5 className="date row-item input-data" ><input type="date" name="date" className="date input-data" /></h5>
        <h5 className="payee row-item input-data" ><input type="text" size="10"  name="payee" className="payee input-data" /></h5>
        <h5 className="category row-item input-data" ><input type="text" name="category" className="category input-data" /></h5>
        <h5 className="memo row-item input-data" ><input type="text" name="memo" className="memo input-data" /></h5>
        <h5 className="outflow row-item input-data"><input type="number" name="outflow" className="outflow input-data" /></h5>
        <h5 className="inflow row-item input-data" ><input type="number" name="inflow" className="inflow input-data" /></h5>
      </div>
    </form>
  )
  }
}
