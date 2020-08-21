import './Interval.css'

import React from 'react'
import { connect } from 'react-redux'

import Cards from '../Cards/Cards'
import putNumberMin from '../../store/actions/numbersAction'

const Interval = props => {
  const { min, max } = props;
  props.actionFunc(1000)

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

const mapActionToProps = dispatch => {
  return {
    actionFunc(newNumber) {
      const action = putNumberMin(newNumber)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(Interval)
