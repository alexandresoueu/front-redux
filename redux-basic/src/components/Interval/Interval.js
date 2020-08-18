import './Interval.css'

import React from 'react'
import Cards from '../Cards/Cards'

const Interval = props => {
  const { min, max } = props

  return (
    <Cards title='Numbers Interval' red>
      <div className='Interval'>
        <span>
          <strong>Min:</strong>
          <input type='number' value={min} onChange={e => props.onMinChanged(+e.target.value)}/>
        </span>
        <span>
          <strong>Max:</strong>
          <input type='number' value={max} onChange={e => props.onMaxChanged(+e.target.value)} />
        </span>
      </div>

    </Cards>
  )
}

export default Interval
