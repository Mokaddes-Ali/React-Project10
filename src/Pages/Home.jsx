import React from 'react';
import Blog from './Blog';
import Portfolio from './Portfolio';
import Client from './Client';
import Services from './Services';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import Darkmode from '../Components/Darkmode';
import ChangeDirectionButton from '../Components/ChangeDirectionButton';
import About from './About';




const Home = () => {
  return (
    <div id="home" className='dark:bg-black'>
      <div className="fixed mt-24">
        <Darkmode />
      </div>
      <div className="fixed mt-32">
      <ChangeDirectionButton />
      </div>
      <HeroSection />
      <About />
      <Blog />
      <Client />
      <Portfolio />
      <Services />
      <Footer />
      </div>
  );
};

export default Home;