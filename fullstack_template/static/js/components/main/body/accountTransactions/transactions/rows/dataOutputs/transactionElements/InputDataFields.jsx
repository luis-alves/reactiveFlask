import React from 'react'

const InputDataFields = (props) => {
  const allDataFromRow = props.allDataFromRow

  const onClickEditRow = () => props.onClickEditRow()

  return (
    <div className='table-header-input-field '
      onClick={onClickEditRow}>
      <h5 className='date body-row-item' >{allDataFromRow.date}</h5>
      <h5 className='payee body-row-item' >{allDataFromRow.payee}</h5>
      <h5 className='category body-row-item' >{allDataFromRow.category}</h5>
      <h5 className='memo body-row-item' >{allDataFromRow.memo}</h5>
      <h5 className='outflow body-row-item'>{allDataFromRow.outflow}</h5>
      <h5 className='inflow body-row-item' >{allDataFromRow.inflow}</h5>
    </div>
  )
}

export default InputDataFields
