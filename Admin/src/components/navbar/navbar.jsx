import React from 'react'
import './navbar.css'
import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <a href="/">
        <img className="logo" src={assets.logo} alt="" />
        </a>
        <img className="profile" src={assets.profile_image} alt="" />
    </div>
    <hr />
    </>
    
  )
}

export default Navbar