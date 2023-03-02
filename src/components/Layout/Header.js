import React from 'react'
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {

    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle("sh-header__responsive-nav");
    }

  return (
    <section className='sh-header'>
        <div className='sh-header__container'>
                <header className='sh-header__wrapper'>  
                    <nav className='sh-header__nav sh-header__nav-links-wrapper' ref={navRef}>
                        <a className='sh-header__nav-link' href='/'>Home</a>
                        <a className='sh-header__nav-link' href='#sh-about'>About</a>
                        <a className='sh-header__nav-link' href='#sh-testimonial'>Testimonial</a>
                        <a className='sh-header__nav-link' href='#sh-footer'>Contact</a>
                        <button className='sh-header__nav-btn sh-header__nav-close-btn' onClick={showNav}>
                            <FaTimes />
                        </button>
                    </nav>
                    
                    <button className='sh-header__nav-btn' onClick={showNav}>
                        <FaBars />
                    </button>
                    <div>
                        <a className='sh-header__nav-login' href='/'>Login</a>
                        <button><a className='sh-header__nav-signup' href='/'>Sign up</a></button>
                    </div>
            </header>
        </div>
    </section>
  )
}

export default Header