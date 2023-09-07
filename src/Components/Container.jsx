import React from 'react'
import Body from './Body/Body'
import SideMenu from './SideMenu/SideMenu'
import '../././index.css'

function Container() {
  return (
    <div className='flex h-[90vh] items-center justify-center w-[100vw] my-10 rounded-xl overflow-hidden'>
        <SideMenu/>
        <Body/>
    </div>
  )
}

export default Container