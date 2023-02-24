import './sass/style.scss';
import Layout from './components/Layout/Layout';
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Clients from './components/Home/Clients';
import Testimonial from './components/Home/Testimonial';
import Faq from './components/Home/Faq';
import DownloadApp from './components/Home/DownloadApp';


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
