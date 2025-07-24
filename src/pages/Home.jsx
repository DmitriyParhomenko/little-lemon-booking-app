import React from 'react';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Specials />
      <Testimonials />
    </main>
  );
};

export default Home;
