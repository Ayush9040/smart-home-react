import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Hero from '../Home/Hero';
import About from '../Home/About';
import Clients from '../Home/Clients';
import Testimonial from '../Home/Testimonial';

const Layout = () => {
  return (
    <div>
        <Header />
        <main>
          <Hero />
          <About />
          <Clients />
          <Testimonial />
        </main>
        <Footer />
    </div>
  )
}

export default Layout