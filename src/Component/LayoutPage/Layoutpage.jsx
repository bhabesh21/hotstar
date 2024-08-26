
import React from 'react'
// import Sidebar from '../Sidebar'
import SidebarPage from '../../Sidebar/sidebar'
import { Outlet } from 'react-router-dom'


const LayoutDesign = () => {
  return (
  
    <div >
      <div style={{ display: 'flex' }}>
        <div>
          <SidebarPage /> 
        </div>
        <div style={{ width: "100%" }}> 
          <div>
          </div>
          <div> <Outlet /></div>

        </div>
<h1>this is for testing purpose</h1>
      </div> 
    </div>
  )
}

export default LayoutDesign