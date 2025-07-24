import React from 'react';
import aboutImage1 from '../assets/restaurant-chef.jpg';
import aboutImage2 from '../assets/restaurant.jpg';

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12">

        <div className="flex-1">
          <h1 className="text-5xl font-extrabold text-black mb-2">Little Lemon</h1>
          <h2 className="text-2xl text-gray-600 mb-6">Chicago</h2>
          <p className="text-black font-medium mb-4 leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <p className="text-black font-medium leading-relaxed mb-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit.
          </p>
          <button className="bg-[#495E57] text-white px-6 py-2 rounded-lg hover:bg-[#3c4f48] transition duration-300">
            Learn More
          </button>
        </div>

        <div className="flex-1 relative w-full md:w-[400px] h-[400px]">
          <img
            src={aboutImage1}
            alt="Little Lemon Interior"
            className="absolute top-16 left-16 w-[200px] h-[200px] object-cover rounded-lg shadow-md"
          />
          <img
            src={aboutImage2}
            alt="Little Lemon Chef"
            className="absolute top-0 left-0 w-[300px] h-[300px] object-cover rounded-lg shadow-lg z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
