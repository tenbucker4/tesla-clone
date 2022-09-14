import React from 'react'
import Header from '../components/Header'
import SideMenu from '../components/SideMenu'
import MenuCover from '../components/MenuCover'
import "../styles/Home.css"

const Home = ({ sideMenuDisplay, setSideMenuDisplay }) => {
  return (
    <>
      <MenuCover sideMenuDisplay={sideMenuDisplay} setSideMenuDisplay={setSideMenuDisplay}/>
      <SideMenu sideMenuDisplay={sideMenuDisplay} setSideMenuDisplay={setSideMenuDisplay}/>
      <div className='home-page' style={{ overflowY: sideMenuDisplay ? "hidden" : "scroll", filter: sideMenuDisplay ? "blur(4px)" : "none" }}>
          <Header sideMenuDisplay={sideMenuDisplay} setSideMenuDisplay={setSideMenuDisplay}/>
          <div className='section-header'>
            <h1>Model S</h1>
            <p>Order Online for <span className='touchless-delivery-link'>Touchless Delivery<span className='text-underline'></span></span></p>
          </div>
          <div className='home-buttons'>
            <button className='custom-order-btn'>Custom Order</button>
            <button className='existing-inventory-btn'>Existing Inventory</button>
          </div>
          <section className='first-section'></section>
          <section className='second-section'></section>
          <section className='third-section'></section>
          <section className='fourth-section'></section>
      </div>
    </>
    
  )
}

export default Home