import React from 'react'
import Cards from '../Cards/Cards'

const Sum = props => {
  return (
    <Cards title='Sum' blue>
      <div className='Sum'>
        <span>
          <span>Sum:</span>
          <strong>5</strong>
        </span>
      </div>
    </Cards>
  )
}

export default Sum