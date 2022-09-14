import React from 'react'
import "../styles/Header.css"

const Header = ({ setSideMenuDisplay }) => {
  return (
    <header>
        <img className='company-logo' src={require("../images/tesla-title.png")}></img>
        <button className='menu-btn' onClick={() => setSideMenuDisplay(prev => !prev)}>Menu</button>
    </header>
  )
}

export default Header