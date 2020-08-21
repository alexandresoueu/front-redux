import './Interval.css'

import React from 'react'
import { connect } from 'react-redux'

import Cards from '../Cards/Cards'
import { putNumberMin, putNumberMax } from '../../store/actions/numbersAction'

const Interval = props => {
  const { min, max } = props

  return (
    <Cards title='Numbers Interval with Redux' red>
      <div className='Interval'>
        <span>
          <strong>Min:</strong>
          <input type='number' value={min} onChange={event => props.actionMin(+event.target.value)} />
        </span>
        <span>
          <strong>Max:</strong>
          <input type='number' value={max} onChange={event => props.actionMax(+event.target.value)} />
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

const mapDispatchToProps = dispatch => {
  return {
    actionMin(newMin) {
      const action = putNumberMin(newMin)
      dispatch(action)
    },

    actionMax(newMax) {
      const action = putNumberMax(newMax)
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Interval)
