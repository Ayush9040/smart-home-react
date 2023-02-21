import React from 'react'

const Footer = () => {
  return (
    <section className='sh-footer'>
      <div className='container sh-footer__container'>
        <div className='row'>
          <div className='col-12 col-md-3 d-flex flex-column sh-footer__about-sec'>
            <h3 className='sh-footer__cat-link'>smartHome</h3>
            <p className='sh-footer__about'>Automate your entire healthcare hiring, onboarding and compliance with a true technology platform.</p>
            <div className='sh-footer__email-wrapper d-flex justify-content-center align-items-center'>
              <input className='sh-footer__email' placeholder='Email Address'/>
              <button className='btn sh-footer__register-btn'>Register</button>
            </div>
          </div>
          <div className='col-12 col-md-3 d-flex flex-column sh-footer__about-sec'>
            <h3 className='sh-footer__head'>CATEGORIES</h3>
            <div className='sh-footer__cat-links-wrapper d-flex flex-column'>
                <a className='sh-footer__link'>Product Management</a>
                <a className='sh-footer__link'>Design / Creatives</a>
                <a className='sh-footer__link'>Education & Training</a>
                <a className='sh-footer__link'>UI/UX Designers</a>
                <a className='sh-footer__link'>Development</a>
                <a className='sh-footer__link'>Customer Support</a>
            </div>
          </div>
          <div className='col-12 col-md-3 d-flex flex-column sh-footer__about-sec'>
            <h3 className='sh-footer__head'>ABOUT</h3>
            <div className='sh-footer__cat-links-wrapper d-flex flex-column'>
                <a className='sh-footer__link'>About Us</a>
                <a className='sh-footer__link'>Partnerships</a>
                <a className='sh-footer__link'>Finance Experts</a>
                <a className='sh-footer__link'>Project Management</a>
                <a className='sh-footer__link'>Product Manager</a>
                <a className='sh-footer__link'>The Teama</a>
            </div>
          </div>
          <div className='col-12 col-md-3 d-flex flex-column sh-footer__about-sec'>
            <h3 className='sh-footer__head'>Follow Us</h3>
            <div className='sh-footer__cat-links-wrapper d-flex flex-column'>
                <a className='sh-footer__link'>Facebook</a>
                <a className='sh-footer__link'>Twitter</a>
                <a className='sh-footer__link'>Instagram</a>
                <a className='sh-footer__link'>Linkedin</a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Footer