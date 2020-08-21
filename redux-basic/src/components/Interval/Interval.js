import './Interval.css'

import React from 'react'
import { connect } from 'react-redux'

import Cards from '../Cards/Cards'

const Interval = props => {
  const { min, max } = props

  return (
    <Cards title='Numbers Interval with Redux' red>
      <div className='Interval'>
        <span>
          <strong>Min:</strong>
          <input type='number' value={min} />
        </span>
        <span>
          <strong>Max:</strong>
          <input type='number' value={max} />
        </span>
      </div>

    </Cards>
  )
}

const mapStateToProps = state => {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  }
}

export default connect(mapStateToProps)(Interval)
