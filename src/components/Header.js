import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
      <img className='social' src={`${process.env.PUBLIC_URL}/github.png`} alt="Login" />
    </div>
  )
}

export default Header
