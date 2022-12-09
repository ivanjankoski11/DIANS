import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-inline'>
            <div className='nav-logo'>
                <h1>Click N Go</h1>
            </div>
            <div className='links' >
                <Link to="/" ><h3>Home</h3></Link>
                <Link to="/atm" ><h3>ATM's</h3></Link>
                <Link to='/blog' ><h3>Blog</h3></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar