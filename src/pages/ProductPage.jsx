import React from 'react'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import "../styles/ProductPage.css"

const ProductPage = ({ sideMenuDisplay, setSideMenuDisplay }) => {
    // React framer motion for animations

    return (
        <>
            <SideMenu sideMenuDisplay={sideMenuDisplay} setSideMenuDisplay={setSideMenuDisplay}/>
            <div className='product-page'>
                <Header sideMenuDisplay={sideMenuDisplay} setSideMenuDisplay={setSideMenuDisplay}/>
                <div className='product-page-hero'> 
                    <div className='section-header'>
                        <h1>Model 3</h1>
                    </div>
                    <div className='product-page-hero-details'>
                        <div className='hero-grid'>
                            <div className='hero-grid-item'>
                                <h2>3.3s</h2>
                                <p>0-100 km/h</p>
                            </div>
                            <div className='hero-grid-item'>
                                <h2>576 km</h2>
                                <p>Range (EPA est.)</p>
                            </div>
                            <div className='hero-grid-item'>
                                <h2>AWD</h2>
                                <p>Dual Motor</p>
                            </div>
                        </div>
                        <button className='hero-grid-button'>Order Now</button>
                    </div>
                </div>
                <div className='vehicle-chassis hero'>
                    <div className='chassis-image'>
                        <img src={require("../images/tesla-close.jpg")}></img>
                    </div>
                </div>
                <div className='safety summary'>
                    <p>Safety</p>
                    <h1>Built for Safety</h1>
                    <p>Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards.</p>
                    <h4>5-Star Safety Rating</h4>
                    <p>Model 3 achieved NHTSA 5-star safety ratings in every category and subcategory.</p>
                    <h4>Top Safety Pick+</h4>
                    <p>Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.</p>
                    <div>
                        <button></button>
                        <p>Learn More</p>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className='vehicle-speed hero'>
                    <div className='product-page-hero-details'>
                        <div className='hero-grid'>
                            <div className='hero-grid-item'>
                                <h2>3.3s</h2>
                                <p>Quickest acceleration - from zero to 100 km/h in as little as 3.3 seconds</p>
                            </div>
                            <div className='hero-grid-item'>
                                <h2>261 km/h</h2>
                                <p>Improved handling and aerodynamics allow for a top speed of 261 km/h</p>
                            </div>
                            <div className='hero-grid-item'>
                                <h2>AWD</h2>
                                <p>Dual Motor All Wheel Drive instantly controls traction and torque, in all weather conditions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage