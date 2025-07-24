import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#495E57] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Little Lemon</h1>
          <h2 className="text-2xl font-medium mb-4">Chicago</h2>
          <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="bg-[#F4CE14] text-black px-6 py-3 rounded-lg font-semibold">Reserve a Table</button>
        </div>
        <div>
          <div className="bg-gray-200 h-64 w-full rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;