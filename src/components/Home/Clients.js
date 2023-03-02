import React from 'react'


const clientsImg = [
    {
        img: '/images/Home/travel.png',
    },
    {
        img: '/images/Home/octane.png',
    },
    {
        img: '/images/Home/lifefitness.png',
    },
    {
        img: '/images/Home/smile.png',
    },
    {
        img: '/images/Home/true.png',
    },
    {
        img: '/images/Home/cybex.png',
    },
    {
        img: '/images/Home/mockup.png',
    },
    {
        img: '/images/Home/precor.png',
    }
  ];

const Clients = () => {
  return (
    <section className='sh-client'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='sh-client__heading sh-main-heading'>Our Clients</h2>
                    <p className='sh-client__content'>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                    <div className='sh-client__main-img-container d-flex flex-column pt-4'>
                        <div className='row g-4'>

             {
                            clientsImg.map((data, index) => {
                                return (
                                    // <div className='col-12 sh-client__img-wrapper' key={index}>
                                    //     <img className='sh-client__img' src={data.img} />
                                    // </div>
                                  <div className='col-6 col-lg-3 ' key={index}>
                                      <div  className='sh-client__logos-outwrap w-100 d-flex align-items-center justify-content-center'>
                                         <div className='sh-client__logos-inwrap d-flex align-items-center justify-content-center' >
                                        <img className='sh-client__img' src={data.img} />
                                    </div>
                                    </div>
                                  </div>
                                    

                                )
                            })
            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Clients