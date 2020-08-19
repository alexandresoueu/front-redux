import React from 'react'
import { connect } from 'react-redux'

import Cards from '../Cards/Cards'

const Sum = props => {
  const { min, max } = props

  return (
    <Cards title='Sum' blue>
      <div className='Sum'>
        <span>
          <span>Sum:</span>
          <strong>{min + max}</strong>
        </span>
      </div>
    </Cards>
  )
}

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  }
}

export default connect(mapStateToProps)(Sum)