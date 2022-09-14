import React from 'react'

const MenuCover = ({ sideMenuDisplay }) => {
  return (
    <div className='menu-cover' style={{ display: sideMenuDisplay ? "block" : "none" }}></div>
  )
}

export default MenuCover