import React from 'react'
import '../../styles/UI/Input.css'

const Input = props => {
  return (
    <div>
      <input 
        {...props}
        className='inp' 
      />
    </div>
  )
}

export default Input