import './sass/style.scss';
import Layout from './components/Layout/Layout';
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Clients from './components/Home/Clients';
import Testimonial from './components/Home/Testimonial';
import Faq from './components/Home/Faq';
import DownloadApp from './components/Home/DownloadApp';

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
  return (
        <Layout>
                <Hero />
                <About />
                <Clients />
                <Testimonial />
                <Faq />
                <DownloadApp />
          </Layout>
  );
}

export default App;
