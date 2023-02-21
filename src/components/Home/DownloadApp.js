import React from 'react'

const DownloadApp = () => {
  return (
    <section className='sh-download'>
        <div className='container'>
        <div className='row d-flex align-items-center justify-content-center'>
                
                <div className='col-12 col-md-6'>
                    <div >
                        <h3 className='sh-download__title'>Download App</h3>
                        <p className='sh-download__caption'>Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                        <div className=''>
                           <a className='sh-download__link'><img src='/images/Home/app-store.png' /></a>
                           <a className='sh-download__link'><img src='/images/Home/download.png' /></a>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-6 sh-download__Screen-wrapper'>
                    <img className='sh-download__screen' src='/images/Home/download-app.png' />
                </div>
            </div>

            <div className='row d-flex align-items-center justify-content-center sh-download__subs'>
                
                <div className='col-12 col-md-7'>
                    <h3 className='sh-download__subs-heading'>Subscribe to get updated</h3>
                    <p className='sh-download__subs-desc'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque .</p>
                </div>

                <div className='col-12 col-md-5 sh-download__subs-btn-wrapper'>
                    <button className='btn sh-download__subs-btn'>Get start</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DownloadApp