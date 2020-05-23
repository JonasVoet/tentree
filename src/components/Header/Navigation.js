import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import logoTop from '../../images/logo-top.png';
import logoButtom from '../../images/logo-buttom.png';

 const Navigation = () => {


    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/women">WOMEN</NavLink>
                    <NavLink to="/women">MEN</NavLink>
                    <NavLink to="/women">ACCESSORIES</NavLink>
                    <NavLink to="/women">ABOUT</NavLink>
                </li>

                <li className="logo">
                <NavLink exact to="/">
                    <img alt="top logo 10" src={logoTop} className="logo-top"></img>
                    <img alt="buttom logo Tentree" src={logoButtom} className="logo-buttom"></img>
                </NavLink>
               
                </li>

                <li>
                    <NavLink to="/women">REGISTER YOUR TREES</NavLink>
                    <NavLink to="/women">SEARCH</NavLink>
                    <NavLink to="/women">ACCOUNT</NavLink>
                    <NavLink to="/women">BASKET [0]</NavLink>
                </li>
            </ul>
            
        </nav>
    )
}

export default withRouter(Navigation);
