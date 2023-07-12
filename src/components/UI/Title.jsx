import React from 'react'
import '../../styles/UI/Title.css'

const Title = ({ children }) => {
  return (
    <h1 className='page-title'>
      {children}
    </h1>
  )
}

export default Title