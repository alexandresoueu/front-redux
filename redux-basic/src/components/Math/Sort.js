import React from 'react'
import { connect } from 'react-redux'

import Cards from '../Cards/Cards'

const Sort = props => {
  const { min, max } = props
  const sort = parseInt(Math.random() * (max - min)) + min

  return (
    <Cards title='Sort' purple>
      <div className='Sort'>
        <span>
          <span>Sort:</span>
          <strong>{sort}</strong>
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

export default connect(mapStateToProps)(Sort)