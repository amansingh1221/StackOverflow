import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/world.png'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
<nav className='side-nav'>
<NavLink to='/' className='side-nav-links' activeClass='active'>
<p>
  Home
</p>
</NavLink>
<div className='side-nav-div'>
<div>
  <p>
    Public
  </p>
</div>
<NavLink to='/Questions' className='side-nav-links' activeClassName='active' style={{paddingLeft:'2px'}}>
  <img src={Globe} alt='Globe' style={{width:'30px'}} />
  <p style={{padding:'6px'}}>Questions</p>
</NavLink>
<NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}>
  <p>Tags</p>
</NavLink>
<NavLink to='/Users' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}>
  <p>Users</p>
</NavLink>
</div>
</nav>
    </div>
  )
}

export default LeftSidebar