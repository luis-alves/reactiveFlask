import React from 'react'
import { connect } from 'react-redux'

import { updateTransactionsCheckbox }
  from '../../../../../../../../actions/transactionsActions'

@connect(store => {
  return { transactions: store.transactions.transactions }
})
class Checkbox extends React.Component {

  check = (e) => {
    const { dbIdNumber, indexRowNumber } = this.props
    this.props.dispatch(updateTransactionsCheckbox(dbIdNumber))
    // this.props.onClickEditRow(indexRowNumber)
    e.stopPropagation()
  }

  render() {
    const {checkboxStatus} = this.props
    return (
      <div className='checkboxOne body-row-item trigger'>
        <i
          onClick={this.check}
          className={'handhover checkbox icon-' + checkboxStatus} />
      </div>
    )
 }
}

export default Checkbox
