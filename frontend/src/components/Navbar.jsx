import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../styles/Navbar.css"

const navbar = () => {


    const guestLinks = (
        <Fragment>
            <Link className='navbar__top__auth__link' to='/login'>Login</Link>
            <Link className='navbar__top__auth__link' to='/register'>Sign Up</Link>
        </Fragment>
    );

    return (
        <Fragment>
            <nav className='navbar'>
                <div className='navbar__top'>
                    <div className='navbar__top__logo'>
                        <Link className='navbar__top__logo__link' to='/'>E-Commerce</Link>
                    </div>
                    <div className='navbar__top__auth'>
                        {  (<Fragment>{ guestLinks }</Fragment>) }
                    </div>
                   
                </div>
                <div className='navbar__bottom'>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/'>Home</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/listings'>ProductList</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/profile'>Profile</NavLink>
                    </li>
                    
                </div>
            </nav>
            
        </Fragment>
    );
};



export default navbar;