import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>15 Users Profile</h1>
            <nav className='nave-menu'>
                <a href="home/">Home</a>
                <a href="users/">Users</a>
                <a href="contact/">Contact</a>
            </nav>
        </div>
    );
};

export default Header;