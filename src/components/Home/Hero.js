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
                    <div className='sh-hero__img-wrapper'>
                        <img className='sh-hero__main-img' src='/images/Home/hero-phone.png' />
                    </div>
                    <div className='sh-hero__download-wrapper'>
                        <a className="sh-hero__download-img" href='https://www.apple.com/in/app-store/'><img src='/images/Home/app-store.png' /></a>
                        <a className="sh-hero__download-img" href='https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026385_creativeid_535350509687_device_c&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIgdNemelHhLywGS_YP-WyvL7SHTpI4SxU0GBE8tvTNlXVRmp6mS7NRoC7ZUQAvD_BwE&gclsrc=aw.ds'><img src='/images/Home/download.png' /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero