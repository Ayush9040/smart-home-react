import React from 'react'
import TestimonialCard from "../Global/TestimonialCard";


const testimonailsData = [
    {
      authorDesc: 'our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions',
      authorAvatar: "/images/Home/avatar.png",
      authorName: 'Cham',
      authorDesignation: 'Product designer',
    },
    {
      authorDesc: 'our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions',
      authorAvatar: "/images/Home/avatar.png",
      authorName: 'Cham',
      authorDesignation: 'Product designer',
    },
    {
      authorDesc: 'our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions',
      authorAvatar: "/images/Home/avatar.png",
      authorName: 'Cham',
      authorDesignation: 'Product designer',
    },
    {
      authorDesc: 'our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions',
      authorAvatar: "/images/Home/avatar.png",
      authorName: 'Cham',
      authorDesignation: 'Product designer',
    },
  ];

const Testimonial = () => {
  return (
    <section className='sh-testimonial'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='sh-testimonial__heading'>Testimonial</h2>
                    <p className='sh-testimonial__content'>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon 
                        him call mile. An pasture he himself believe ferrars besides cottage.</p>
                </div>



                <div className="row g-2 sh-Testimonial-card-wrapper">
                    {testimonailsData.map ((data, index) => {
                    return (
                        <div className="col-12 col-md-6 sh-Testimonial__card" key={index}>
                        <TestimonialCard
                            authorTestimonails={data.authorDesc}
                            authorAvatar={data.authorAvatar}
                            authorName={data.authorName}
                            authorDesignation={data.authorDesignation}
                        />
                        </div>
                    );
                    })}

                </div>
                

            </div>
        </div>
    </section>
  )
}

export default Testimonial