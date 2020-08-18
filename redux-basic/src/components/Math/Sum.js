import React from 'react'
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

export default Sum