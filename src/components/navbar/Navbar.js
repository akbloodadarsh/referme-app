import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/refermefor">ReferMeFor</NavLink>
        <NavLink to="/profile">Profile</NavLink>
    </div>
  )
}
