import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './footer.css'

function Footer() {
    return (
        <nav className='footer'>
            <p id='developed-by'>Developed By: Aaron Short</p>
            <a id='git-linkd' href='https://github.com/GoodWillHunting11/CabinGo'><i class="fab fa-github"></i></a>
            <a id='git-linkd' href='https://www.linkedin.com/in/aaron-short-780446179/'><i class="fab fa-linkedin"></i></a>
        </nav>
    )
}

export default Footer;
