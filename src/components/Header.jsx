import React from 'react'
import "../styles/Header.css"

const Header = ({ setSideMenuDisplay }) => {
  return (
    <header>
        <img className='company-logo' src={require("../images/tesla-title.png")}></img>
        <ul className='header-icons'>
          <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Powerwall</li>
        </ul>
        <button className='menu-btn' onClick={() => setSideMenuDisplay(prev => !prev)}>Menu</button>
    </header>
  )
}

export default Header