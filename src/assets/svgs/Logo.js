import React from 'react'
import logo from './logo.svg'
function Logo() {
  return (
    <div style={{color: 'whitesmoke', cursor: 'pointer' }} className = "header__logo">
        <img src={logo} alt="" height="32px" width="32px"/>
        <i className='mx-1'>Phim Lậu.com</i>
    </div>
  )
}

export default Logo