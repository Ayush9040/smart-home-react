import React from 'react';
import About_card from '../Global/About_card';

const About = (props) => {
  const name = props.name;
  // const cl = props.class;

  // console.log(name + " " + cl);
  return (
    <section ref={name} className='sh-about' id='sh-about'>
        <div className='container sh-about__wrapper'>
            <div className='row'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='sh-about__heading sh-main-heading fadeIn'>About Us</h2>
                    <About_card anim={name} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About