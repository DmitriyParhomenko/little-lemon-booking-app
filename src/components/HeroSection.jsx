import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/greek_salad.jpg';

const HeroSection = () => {
  return (
    <section className="bg-[#495E57] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Little Lemon</h1>
          <h2 className="text-2xl font-medium mb-4">A taste of the Mediterranean in the heart of Chicago</h2>
          <p className="mb-6">Fresh, vibrant, and rooted in tradition — experience delicious moments inspired by authentic recipes and warm hospitality.</p>
          <Link
            to="/reservations"
            className="border border-[#F4CE14] bg-[#F4CE14] text-black px-6 py-3 rounded-lg font-semibold hover:text-[#495E57] hover:bg-[#fff] transition"
          >
            <span>Reserve a Table</span>
          </Link>
        </div>
        <div className="hero-image">
          <img
            src={heroImage}
            alt="Little Lemon Restaurant"
            className="h-64 w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;