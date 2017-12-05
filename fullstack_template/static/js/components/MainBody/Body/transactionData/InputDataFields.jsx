import React from "react"

const InputDataFields = (props) => {
  const rowData = props.rowData

  const handleEditInputFields = () => props.handleEditInputFields()

  return (
    <div className="table-header-input-field "
      onClick={handleEditInputFields}
      // onClick={this.props.onclick}
      >
      <h5 className='date body-row-item' >{rowData.date}</h5>
      <h5 className='payee body-row-item' >{rowData.payee}</h5>
      <h5 className='category body-row-item' >{rowData.category}</h5>
      <h5 className='memo body-row-item' >{rowData.memo}</h5>
      <h5 className='outflow body-row-item'>{rowData.outflow}</h5>
      <h5 className='inflow body-row-item' >{rowData.inflow}</h5>
    </div>
  )
}

export default InputDataFields
