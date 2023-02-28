import React from 'react'
// import Header from './Header';
import Header1 from './Header1';
import Footer from './Footer';
// import Hero from '../Home/Hero';
// import About from '../Home/About';
// import Clients from '../Home/Clients';
// import Testimonial from '../Home/Testimonial';
// import Faq from '../Home/Faq';
// import DownloadApp from '../Home/DownloadApp';

const Layout = ({children}) => {
  return (
    <div>
        {/* <Header /> */}
        <Header1 />
        <main>
        {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout