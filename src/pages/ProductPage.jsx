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
            </div>
        </>
    )
}

export default ProductPage