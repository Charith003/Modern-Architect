import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import InstagramFeed from './components/InstagramFeed';
import Enquiry from './components/Enquiry';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileContactBar from './components/MobileContactBar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Projects />
        <Services />
        <Process />
        <About />
        <InstagramFeed />
        <Enquiry />
        <Contact />
      </main>
      <Footer />
      <MobileContactBar />
    </>
  );
}

export default App;
