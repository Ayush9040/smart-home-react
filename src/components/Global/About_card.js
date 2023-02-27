import React from 'react'


const AboutData = [
    {
      aboutHeading: 'Smart Home’s  Smart Services',
      aboutDesc: 'Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.',
      aboutBtn: 'Learn More',
    },
    {
        aboutHeading: 'Smart Services  Smart Services',
        aboutDesc: 'Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.',
        aboutBtn: 'Learn More',
      },
      {
        aboutHeading: 'Services Smart Home’s  Smart Services',
        aboutDesc: 'Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.',
        aboutBtn: 'Learn More',
      }
  ];

const About_card = () => {
  return (
    AboutData.map((data, index) => {
        return (
            <div className='sh-about-card' key={index}>
                <div className='container'>
                    <div className={index%2!==0 ? 'sh-about__odd-card row d-flex align-items-center justify-content-center' : 'row d-flex align-items-center justify-content-center'}>
                        <div className='col-12 col-md-6 sh-about-card__left'>
                            <img className='sh-about-card__img' src='/images/Home/about.png' />
                            <div className="element"></div>
                            <span className="pseudo-class"></span>
                        </div>
                        <div className='col-12 col-md-6 sh-about-card__right'>
                            <div className='sh-about-card_right__content-wrapper'>
                                <h3 className='sh-about-card__heading'>{data.aboutHeading}</h3>
                                <p className='sh-about-card__content'>{data.aboutDesc}</p>
                                <button className='btn btn-primary sh-about-card__btn'>{data.aboutBtn}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
  )
}

export default About_card