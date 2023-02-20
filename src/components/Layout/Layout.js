import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Hero from '../Home/Hero';
import About from '../Home/About';
import Clients from '../Home/Clients';

const Layout = () => {
  return (
    <div>
        <Header />
        <main>
          <Hero />
          <About />
          <Clients />
        </main>
        <Footer />
    </div>
  )
}

export default Layout