import React from 'react'
import "../styles/Header.css"

const Header = () => {
  return (
    <header>
        <img className='company-logo' src={require("../images/tesla-title.png")}></img>
    </header>
  )
}

export default Header