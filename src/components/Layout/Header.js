import React, { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutLineClose} from "react-icons/ai";

const Header = () => {

  const [header, setHeader] = useState(false);

  return (
    <>
        <header className='sh-header'>
            <div className='container'>
                <div className='sh-header__content position-relative'>
                    <nav className='sh-header__content-nav'>
                        {header && 
                          <ul className='d-flex gap-2 py-4'>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/'>About</a>
                            </li>
                            <li>
                                <a href='/'>Testimonials</a>
                            </li>
                            <li>
                                <a href='/'>Contact</a>
                            </li>
                        </ul>  
                        }
                    </nav>
                    
                    <button type='button' className='bg-transparent border px-5 py-2 position-absolute sh-header__btn-ham' onClick={()=> setHeader(prev=>!prev)}>{header ? "Close" : "Open"}</button>
                    {/* <div className='sh-header__btn'>
                            <button className='sh-header__btn-login'>Login</button>
                            <button className='sh-header__btn-signup'>Sign up</button>
                        </div>
                    <div className='sh-header__content-toggle'>
                        <BiMenuAltRight />
                    </div> */}
                </div>
            </div>
        </header>
        </>
  )
}

export default Header