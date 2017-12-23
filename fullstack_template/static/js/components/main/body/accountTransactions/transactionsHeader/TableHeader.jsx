import React from 'react'


export default class TableHeader extends React.Component {
  render () {
    return (
      <div className='table-header fixedheader' >
        <div className='checkboxOne head-row-item'>
          <i className='icon-unchecked' />
        </div>
        <div className='boxing-info head-row-item'>
          <i className='icon-info' />
        </div>
        <div className='boxing-info head-row-item'>
          <i className='icon-bookmark' />
        </div>
        <div className='table-header-input-field'>
          <h5 className='date head-row-item-input'>DATE</h5>
          <h5 className='payee head-row-item-input'>PAYEE</h5>
          <h5 className='category head-row-item-input'>CATEGORY</h5>
          <h5 className='memo head-row-item-input'>MEMO</h5>
          <h5 className='outflow head-row-item-input'>OUTFLOW</h5>
          <h5 className='inflow head-row-item-input'>INFLOW</h5>
        </div>
        <div className='boxing-reconcile head-row-item'>
          <i className='icon-check' />
        </div>
        <div className='blank' />
      </div>
    )
  }
}
