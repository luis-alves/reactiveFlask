import React from 'react'
import { connect } from 'react-redux'

import { updateTransactionsCheckbox }
  from '../../../../../../../../actions/transactionsActions'

@connect(store => {
  return { transactions: store.transactions.transactions }
})
class Checkbox extends React.Component {
  check = () => {
    const { elID } = this.props
    this.props.dispatch(updateTransactionsCheckbox(elID))
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
