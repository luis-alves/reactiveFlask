import React from 'react'

import LeftOptions from './subheader/LeftOptions'


export default class Subheader extends React.Component {
  render () {
    return (
      <div className='subheader'>
        <LeftOptions />
      </div>
    )
  }
}
