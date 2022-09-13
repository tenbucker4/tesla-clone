import React from 'react'
import Header from '../components/Header'
import "../styles/Home.css"

const Home = () => {
  return (
    <div className='home-page'>
        <Header />
        <div className='section-header'>
          <h1>Model S</h1>
          <p>Order Online for <span className='touchless-delivery-link'>Touchless Delivery<span className='text-underline'></span></span></p>
        </div>
        <div className='home-buttons'>
          <button className='custom-order-btn'>Custom Order</button>
          <button className='existing-inventory-btn'>Existing Inventory</button>
        </div>
        <section className='first-section'>
        </section>
        <section className='second-section'></section>
        <section className='third-section'></section>
        <section className='fourth-section'></section>
    </div>
  )
}

export default Home