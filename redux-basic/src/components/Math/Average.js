import React from 'react'
import Cards from '../Cards/Cards'

const Average = props => {
  return (
    <Cards title='Average' green>
      <div className='Average'>
        <span>
          <span>Result:</span>
          <strong>10</strong>
        </span>
      </div>
    </Cards>
  )
}

export default Average