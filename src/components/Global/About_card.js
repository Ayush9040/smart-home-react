import React, { useRef } from 'react'
import { useIntersection } from 'react-use';
import gsap from 'gsap';



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

const About_card = (props) => {


  const a = props.anim;

  const aboutImg = gsap.utils.toArray(".fadeIn");

  // let image = useRef(null);

  // useEffect(() => {
  //   TweenMax.from(image, 0.8, {opacity: 0, x: 40, ease: Power3.easeOut})
  // }, [])
  // const app = useRef();
  // // const circle = useRef();
  
  // useLayoutEffect(() => {
  //   let aboutImg = gsap.utils.toArray(".box");
  //   var tl = gsap.timeline({repeat: -1,yoyo:true});
    // tl.to(".box", {y: -100, y:0, duration: 1});
    // tl.to(".box", {y: 0, x: 0, duration: 1});
    // tl.to(".box", {opacity: 0, duration: 1});

    // aboutImg.forEach(box => {
    //   tl.to(box, {
    //     x: function(){ return getRand(-20,20) },
    //     y: function(){ return getRand(-40,40) },
    //     // transformOrigin:'50% 50%',
    //     ease:"sine.inOut",
    //      y: -20,
    //      y: 20,
    //     // //  x:300,
    //     scrollTrigger: {
    //       trigger: box,
    //       y: -20,
    //       y: 20,
    //       scrub: true
    //     }
    //   })

    //   function getRand(min,max){
    //     return Math.random() * (max - min) + min;
    //   }
    // })

    // aboutImg.forEach((item, index) => {
    //   let ctx = gsap.context(() => {
    //     // use scoped selectors
    //     gsap.to(".box", { rotation: 360, y: -100, y: 0 });      
    //   }, app);

    //   ctx.to(item, {
    //     rotation: 360, y: -100, y: 0 
    //   })
    // })
    
    
    // return () => ctx.revert();
  // }, []);

  
  return (
    AboutData.map((data, index) => {
        return (
            <div className='sh-about-card' ref={a} key={index}>
                <div className='container'>
                    <div className={index%2!==0 ? 'sh-about-card__odd-card row d-flex align-items-center justify-content-center fadeIn' : 'row d-flex align-items-center justify-content-center fadeIn'}>
                        <div className='col-12 col-md-6 sh-about-card__left'>
                            <img className='sh-about-card__img box moveImg' src='/images/Home/about.png' alt='' />
                            <div className="sh-about-card__element"></div>
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