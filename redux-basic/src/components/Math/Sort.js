import React from 'react'
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

export default Sort