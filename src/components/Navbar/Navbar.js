import React from 'react';
import The_FITGEN from '../image/The_FITGEN.png'
import './Navbar.css'

const Bar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <a href='/'>
                    <img src={The_FITGEN} alt='logo' />
                </a>
            </div>
            <div className='navigation'>
            <input type="checkbox" className='toggle-menu' />
            <div className='hamburger'></div>



                <ul className='menu'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About Us</a></li>
                    <li><a href='/'>Overview</a></li>
                    <li><a href='/'>Profile</a></li>
                    <li><a href='/'>Log out</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Bar;