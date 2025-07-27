import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/greek_salad.jpg';

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Little Lemon</h2>
          <h2 className="text-2xl font-medium mb-4">A taste of the Mediterranean in the heart of Chicago</h2>
          <p className="mb-6">
            At Little Lemon, we don’t just serve food — we serve connection.
            Bright ingredients, bold traditions, and a dash of soul in every dish.
            Whether you're stopping in for lunch or celebrating something special,
            you’re always welcome at our table.
          </p>
          <Link
            to="/about"
            className="border border-[#F4CE14] bg-[#F4CE14] text-black px-6 py-3 rounded-lg font-semibold hover:text-[#495E57] hover:bg-[#fff] transition"
          >
            <span>About Us</span>
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

export default AboutSection;
