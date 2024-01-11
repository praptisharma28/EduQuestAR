import { BrowserRouter } from "react-router-dom";

import { About, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import VideoCarousel from "./components/VideoCarousel";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='relative z-0 bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
       
        <div>
        
        <VideoCarousel/>
        </div>
       
        <Tech />
        <Works />
        <Experience />
        <Feedbacks />
        <div className='relative z-0'>
         
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
