import React from 'react';
import About_card from '../Global/About_card';

const About = () => {
  return (
    <section className='sh-about'>
        <div className='container sh-about__wrapper'>
            <div className='row'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='sh-about__heading'>About Us</h2>
                    <About_card />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About