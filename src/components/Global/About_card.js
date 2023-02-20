import React from 'react'

const About_card = () => {
  return (
    <div className='sh-about-card'>
        <div className='container'>
            <div className='row d-flex align-items-center justify-content-center'>
                <div className='col-12 col-md-6 sh-about-card_left'>
                    <img className='sh-about-card_img' src='/images/Home/about.png' />
                    <div class="element"></div>
                    <span class="pseudo-class"></span>
                </div>
                <div className='col-12 col-md-6 sh-about-card_right'>
                    <div className='sh-about-card_right_content-wrapper'>
                        <h3 className='sh-about-card_heading'>Smart Home’s  Smart Services</h3>
                        <p className='sh-about-card_content'>Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                        <button className='btn btn-primary sh-about-card_btn'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About_card