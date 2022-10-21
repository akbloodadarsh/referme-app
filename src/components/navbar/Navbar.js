import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/navbar/nav-bar.css'

export default function Navbar() {
  return (
    <div className='nav-bar'>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/refermefor">ReferMeFor</NavLink>
        <NavLink to="/profile">Profile</NavLink>
    </div>
  )
}
