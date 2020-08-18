import React from 'react'
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

export default Average