import React from 'react'

const Clients = () => {
  return (
    <section className='sh-client'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='sh-client_heading'>Our Clients</h2>
                    <p className='sh-client_content'>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                    <div className='sh-client_main-img-container d-flex flex-column pt-4'>
                        <div className='sh-client_img_row d-flex align-items-center justify-content-center g-4'>
                            <div className='sh-client_img-wrapper'>
                                <img className='sh-client_img' src='/images/Home/travel.png' />
                            </div>
                            <div className='sh-client_img-wrapper'>
                                <img className='sh-client_img' src='/images/Home/octane.png' />
                            </div>
                            <div className='sh-client_img-wrapper'>
                                <img className='sh-client_img' src='/images/Home/Life fitness.png' />
                            </div>
                            <div className='sh-client_img-wrapper'>
                                <img className='sh-client_img' src='/images/Home/smile.png' />
                            </div>
                        </div>
                        <div className='sh-client_img_row d-flex align-items-center justify-content-center g-4'>
                            <div className='sh-client_img-wrapper'>
                                <img className='sh-client_img' src='/images/Home/True.png' />
                            </div>
                            <div className='sh-client_img-wrapper'>
                                <img className='sh-client_img' src='/images/Home/cyber.png' />
                            </div>
                            <div className='sh-client_img-wrapper'>
                                <img className='sh-client_img' src='/images/Home/mockup.png' />
                            </div>
                            <div className='sh-client_img-wrapper'>
                                <img className='sh-client_img' src='/images/Home/Precor.png' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Clients