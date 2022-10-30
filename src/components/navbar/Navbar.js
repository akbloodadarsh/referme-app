import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/navbar/nav-bar.css'
import Cookies from 'universal-cookie';

export default function Navbar() {
  const cookies = new Cookies();

  return (
    <div className='nav-bar'>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/refermefor">ReferMeFor</NavLink>
        {
          cookies.get('jwt-token') === undefined && <NavLink to="/login-signup/login">Login</NavLink>
        }
        {
          cookies.get('jwt-token') === undefined && <NavLink to="/login-signup/signup">Signup</NavLink>
        }
        {
          !(cookies.get('jwt-token'))===undefined && <NavLink to="/profile">Profile</NavLink>
        }
    </div>
  )
}
