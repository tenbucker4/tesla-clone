import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import Header from '../components/Header'
import SideMenu from '../components/SideMenu'
import "../styles/Home.css"

const Home = ({ sideMenuDisplay, setSideMenuDisplay }) => {

  return (
    <>
      <SideMenu sideMenuDisplay={sideMenuDisplay} setSideMenuDisplay={setSideMenuDisplay}/>
      <div className='home-page' style={{ pointerEvents: sideMenuDisplay ? "none" : "auto", filter: sideMenuDisplay ? "blur(4px)" : "none" }}>
          <Header sideMenuDisplay={sideMenuDisplay} setSideMenuDisplay={setSideMenuDisplay}/>
          <div className='section-header'>
            <h1>Model S</h1>
            <p>Order Online for <span className='touchless-delivery-link'>Touchless Delivery<span className='text-underline'></span></span></p>
          </div>
          <div className='home-buttons'>
            <Link to="/model3"><button className='custom-order-btn'>Custom Order</button></Link>
            <button className='existing-inventory-btn'>Existing Inventory</button>
          </div>
          <section className='first-section'></section>
          <section className='second-section'></section>
          <section className='third-section'></section>
          <section className='fourth-section'></section>
          <section className='fifth-section'>
            <img src={require("../images/tesla-charger.webp")}></img>
          </section>
      </div>
    </>
    
  )
}

export default Home