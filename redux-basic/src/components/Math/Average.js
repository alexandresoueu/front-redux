import React from 'react'
import { connect } from 'react-redux'

import Cards from '../Cards/Cards'

const Average = props => {
  const { min, max } = props
  return (
    <Cards title='Average' green>
      <div className='Average'>
        <span>
          <span>Result:</span>
          <strong>{(min + max) / 2}</strong>
        </span>
      </div>
    </Cards>
  )
}

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max
  }
}

export default connect(mapStateToProps)(Average)