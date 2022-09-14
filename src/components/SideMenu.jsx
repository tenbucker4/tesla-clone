import React from 'react'
import "../styles/SideMenu.css"
import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react'

const SideMenu = ({ sideMenuDisplay, setSideMenuDisplay }) => {
  return (
    <aside style={{ right: sideMenuDisplay ? "0" : "-300px", opacity: sideMenuDisplay ? "1" : "0"  }}>
        <div className='hide-menu' >
            <Icon path={mdiClose}
            onClick={() => setSideMenuDisplay(prev => !prev)}
            title="User Profile"
            size={1}
            color="#393c41"/>
        </div>
        <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
        </ul>
    </aside>
  )
}

export default SideMenu