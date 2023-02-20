import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Hero from '../Home/Hero';

const Layout = () => {
  return (
    <div>
        <Header />
        <main>
          <Hero />
        </main>
        <Footer />
    </div>
  )
}

export default Layout