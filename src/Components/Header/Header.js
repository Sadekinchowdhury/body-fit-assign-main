
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

import './Header.css';


const Header = () => {
    return (
     <div className='main-header'>
            <nav className='header'>
                <div className='fitness-brand'>

                    <FontAwesomeIcon className='icon' icon={faDumbbell}></FontAwesomeIcon>
                    <h1 style={{ fontSize: '30px' }}>Body-fitness</h1>

                </div>


                <div className='link-header'>
                    <a href="/">Home</a>
                    <a href="/">Registration</a>
                    <a href="/">About Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;