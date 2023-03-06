import './sass/style.scss';
import React, { useRef } from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Clients from './components/Home/Clients';
import Testimonial from './components/Home/Testimonial';
import Faq from './components/Home/Faq';
import DownloadApp from './components/Home/DownloadApp';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

// const parallax = document.querySelector(".parallax");
// const speed = parallax.getAttribute("data-speed");
// console.log(speed);

// // On scroll
// window.addEventListener("scroll", () => {
//   // Calculate the distance scrolled from top
//   const distance = window.pageYOffset;

//   // Calculate the transform value for the parallax effect
//   const transform = `translate3d(0, ${distance * speed}px, 0)`;

//   // Apply the transform to the element
//   parallax.style.transform = transform;
// });


function App() {
  const sectionRef = useRef(null);

  const interSection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  });

  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    });
  };

  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out"
    });
  };

  interSection && interSection.intersectionRatio < 0.3 ? fadeOut(".fadeIn") : fadeIn(".fadeIn")


  return (
          <Layout>
                <Hero />
                <About name={sectionRef} class=".fadeIn" />
                <Clients />
                <Testimonial />
                <Faq />
                <DownloadApp />
          </Layout>
  );
}

export default App;
