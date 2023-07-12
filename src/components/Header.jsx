import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo' to="/">Logo</Link>
      <nav>
        <Link to='/about'>About</Link>
        <Link to='/posts'>Posts</Link>
      </nav>
    </div>
  )
}

export default Header