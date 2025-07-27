import React from 'react';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import HeroSection from '../components/HeroSection';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Little Lemon | Mediterranean Restaurant in Chicago</title>
        <meta name="description" content="Experience traditional Mediterranean flavors with a modern twist. Located in the heart of Chicago." />
      </Helmet>
      <main>
        <HeroSection />
        <Specials />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
