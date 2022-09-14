import React, { useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../components/Header'
import SideMenu from '../components/SideMenu'
import "../styles/Home.css"

const Home = ({ sideMenuDisplay, setSideMenuDisplay }) => {
  const navigate = useNavigate();

  const viewSecondPage = () => {
    navigate("/model3");
  }

  return (
    <>
      <SideMenu sideMenuDisplay={sideMenuDisplay} setSideMenuDisplay={setSideMenuDisplay}/>
      <div className='home-page' style={{ pointerEvents: sideMenuDisplay ? "none" : "auto", filter: sideMenuDisplay ? "blur(4px)" : "none" }}>
          <Header sideMenuDisplay={sideMenuDisplay} setSideMenuDisplay={setSideMenuDisplay}/>
          <section className='first-section'>
            <div className='section-header'>
              <h1>Model S</h1>
              <p>Order Online for <span className='touchless-delivery-link'>Touchless Delivery<span className='text-underline'></span></span></p>
            </div>
            <div className='home-buttons'>
              <button className='custom-order-btn' onClick={viewSecondPage}>Custom Order</button>
              <button className='existing-inventory-btn' onClick={viewSecondPage}>Existing Inventory</button>
            </div>
          </section>
          <section className='second-section'>
            <div className='section-header'>
              <h1>Model 3</h1>
              <p>Order Online for <span className='touchless-delivery-link'>Touchless Delivery<span className='text-underline'></span></span></p>
            </div>
            <div className='home-buttons'>
              <button className='custom-order-btn' onClick={viewSecondPage}>Custom Order</button>
              <button className='existing-inventory-btn' onClick={viewSecondPage}>Existing Inventory</button>
            </div>
          </section>
          <section className='third-section'>
            <div className='section-header'>
              <h1>Model X</h1>
              <p>Order Online for <span className='touchless-delivery-link'>Touchless Delivery<span className='text-underline'></span></span></p>
            </div>
            <div className='home-buttons'>
              <button className='custom-order-btn' onClick={viewSecondPage}>Custom Order</button>
              <button className='existing-inventory-btn' onClick={viewSecondPage}>Existing Inventory</button>
            </div>
          </section>
          <section className='fourth-section'>
            <div className='section-header'>
              <h1>Solar and Powerwall</h1>
              <p>Power Everything</p>
            </div>
            <div className='home-buttons'>
              <button className='custom-order-btn' onClick={viewSecondPage}>Learn More</button>
            </div>
          </section>
          <section className='fifth-section'>
            <div className='section-header'>
              <h1>Accesories</h1>
            </div>
            <div className='home-buttons'>
              <button className='custom-order-btn' onClick={viewSecondPage}>Shop Now</button>
            </div>
            <img src={require("../images/tesla-charger.webp")}></img>
          </section>
      </div>
    </>
    
  )
}

export default Home