import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/UI/Button.css'

const Button = props => {
  return (
    <>
      {
        props?.to
          ? <Link
              {...props}
              className='btn'
            >
              {props.children}
            </Link>
          : <button
              {...props}
              className='btn'
            >
              {props.children}
            </button>
      }
    </>
  )
}

export default Button