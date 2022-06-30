import React from 'react';
import './Header.css'

const Header = () => {

    return (
        <div>
            <nav>
                <h1>NH</h1>
                <input type='checkbox' id='check' />
                <label for='check' className='checkbtn'>
                    <i className='fas fa-bars'></i>
                </label>
                <ul>
                    <li><a className='active' href=''>Home</a></li>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Servics</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;