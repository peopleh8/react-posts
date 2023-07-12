import React from 'react'
import '../../styles/UI/ErrorTitle.css'

const ErrorTitle = ({ children }) => {
  return (
    <div className='err-title'>
      {children}
    </div>
  )
}

export default ErrorTitle