import './Interval.css'

import React from 'react'
import Cards from '../Cards/Cards'

const Interval = props => {
  return (
    <Cards title='Numbers Interval' red>
      <div className='Interval'>
        <span>
          <strong>Min:</strong>
          <input type='number' value={0} />
        </span>
        <span>
          <strong>Max:</strong>
          <input type='number' value={0} />
        </span>
      </div>

    </Cards>
  )
}

export default Interval
