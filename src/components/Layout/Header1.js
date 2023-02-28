import React from 'react'
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header1 = () => {

    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <header className='sh-header1'>
        
        <nav className='sh-header__nav' ref={navRef}>
            <a className='sh-header1__links' href='/'>Home</a>
            <a className='sh-header1__links' href='/'>About</a>
            <a className='sh-header1__links' href='/'>Testimonial</a>
            <a className='sh-header1__links' href='/'>Contact</a>
            <button className='nav-btn nav-close-btn' onClick={showNav}>
                <FaTimes />
            </button>
        </nav>
        
        <button className='nav-btn' onClick={showNav}>
            <FaBars />
        </button>
        <div>
            <button>Login</button>
            <button>Sign</button>
        </div>
    </header>
  )
}

export default Header1