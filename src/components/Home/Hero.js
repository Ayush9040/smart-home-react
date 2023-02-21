import React from 'react';

const Hero = () => {
  return (
    <section className='sh-hero'>
        <div className='container sh-hero__wrapper'>
            <div className='row'>
                <div className='col-12 d-flex flex-column align-items-center justify-content-center'>
                    <h3 className='sh-hero__top-heading'>smartHome</h3>
                    <h1 className='sh-hero__main-heading'>Smart Home Application</h1>
                    <p className='sh-hero__content'>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon 
                        him call mile. An pasture he himself believe ferrars besides cottage.</p>
                    <div className='sh-hero__img-container'>
                        <img className='sh-hero__main-img' src='/images/Home/hero-phone.png' />
                    </div>
                    <div className='sh-hero__download-container'>
                        <a className="sh-hero__download-img" href='/'><img src='/images/Home/app-store.png' /></a>
                        <a className="sh-hero__download-img" href='/'><img src='/images/Home/download.png' /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero