import React from 'react';
import FooterLinks from '../Global/FooterLinks';
const categoriesData = [
  {
      footerItemName:"Product Management",
      footerItemLink:"/"
  },
  {
      footerItemName:"Design / Creatives",
      footerItemLink:"/"
  },
  {
      footerItemName:"Education & Training",
      footerItemLink:"/"
  },
  {
      footerItemName:"UI/UX Designers",
      footerItemLink:"/"
  },
  {
    footerItemName:"Development",
    footerItemLink:"/"
  },
  {
    footerItemName:"Customer Support",
    footerItemLink:"/"
  }
]

const aboutData = [
  {
      footerItemName:"About Us",
      footerItemLink:"/"
  },
  {
      footerItemName:"Partnerships",
      footerItemLink:"/"
  },
  {
      footerItemName:"Finance Experts",
      footerItemLink:"/"
  },
  {
      footerItemName:"Project Management",
      footerItemLink:"/"
  },
  {
    footerItemName:"Product Manager",
    footerItemLink:"/"
  },
  {
    footerItemName:"The Team",
    footerItemLink:"/"
  }
]

const followusData = [
  {
      footerItemName:"Facebook",
      footerItemLink:"/"
  },
  {
      footerItemName:"Twitter",
      footerItemLink:"/"
  },
  {
      footerItemName:"Instagram",
      footerItemLink:"/"
  },
  {
      footerItemName:"Linkedin",
      footerItemLink:"/"
  },
]

// const footerData = [
//   {
//     title: 'CATEGORIES',
//     links: 
//   },
//   {
//     authorDesc: 'our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions',
//     authorAvatar: "/images/Home/avatar.png",
//     authorName: 'Cham',
//     authorDesignation: 'Product designer',
//   },
//   {
//     authorDesc: 'our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions',
//     authorAvatar: "/images/Home/avatar.png",
//     authorName: 'Cham',
//     authorDesignation: 'Product designer',
//   },
//   {
//     authorDesc: 'our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions',
//     authorAvatar: "/images/Home/avatar.png",
//     authorName: 'Cham',
//     authorDesignation: 'Product designer',
//   },
// ];

const Footer = () => {
  return (
    <section className='sh-footer'>
      <div className='container'>
        <div className='sh-footer__container'>
          <div className='d-flex flex-column sh-footer__about-sec sh-footer__about-special'>
            <h3 className='sh-footer__cat-link'>smartHome</h3>
            <p className='sh-footer__about'>Automate your entire healthcare hiring, onboarding and compliance with a true technology platform.</p>
            <div className='sh-footer__email-wrapper d-flex justify-content-center align-items-center'>
              <input className='sh-footer__email' placeholder='Email Address'/>
              <button className='btn sh-footer__register-btn'>Register</button>
            </div>
          </div>
          <div className='d-flex flex-column sh-footer__about-sec'>
            <FooterLinks title="CATEGORIES" linksData={categoriesData}/>
            {/* <h3 className='sh-footer__head'>CATEGORIES</h3>
            <div className='sh-footer__cat-links-wrapper d-flex flex-column'>
                <a className='sh-footer__link'>Product Management</a>
                <a className='sh-footer__link'>Design / Creatives</a>
                <a className='sh-footer__link'>Education & Training</a>
                <a className='sh-footer__link'>UI/UX Designers</a>
                <a className='sh-footer__link'>Development</a>
                <a className='sh-footer__link'>Customer Support</a>
            </div> */}
          </div>
          <div className='d-flex flex-column sh-footer__about-sec'>
            <FooterLinks title="ABOUT" linksData={aboutData}/>
            {/* <h3 className='sh-footer__head'>ABOUT</h3>
            <div className='sh-footer__cat-links-wrapper d-flex flex-column'>
                <a className='sh-footer__link'>About Us</a>
                <a className='sh-footer__link'>Partnerships</a>
                <a className='sh-footer__link'>Finance Experts</a>
                <a className='sh-footer__link'>Project Management</a>
                <a className='sh-footer__link'>Product Manager</a>
                <a className='sh-footer__link'>The Teama</a>
            </div> */}
          </div>
          <div className='d-flex flex-column sh-footer__about-sec'>
            <FooterLinks title="Follow Us" linksData={followusData}/>
            {/* <h3 className='sh-footer__head'>Follow Us</h3>
            <div className='sh-footer__cat-links-wrapper d-flex flex-column'>
                <a className='sh-footer__link'>Facebook</a>
                <a className='sh-footer__link'>Twitter</a>
                <a className='sh-footer__link'>Instagram</a>
                <a className='sh-footer__link'>Linkedin</a>
            </div> */}
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Footer