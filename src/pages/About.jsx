import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => (
  <>
    <Helmet>
      <title>About Us | Little Lemon</title>
      <meta
        name="description"
        content="Learn more about Little Lemon, a family-owned Mediterranean restaurant in Chicago offering fresh, traditional dishes with a modern twist."
      />
    </Helmet>
    <section className="max-w-7xl mx-auto bg-white text-gray-800 py-16 px-4">
      <div className="mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>

        <p>
          We are a family-owned Mediterranean restaurant focused on traditional recipes with a modern twist. Located in the heart of Chicago, our mission is to bring authentic flavors and excellent service to every guest.
        </p>

        <p>
          At <span className="font-semibold">Little Lemon</span>, food is more than a meal — it's a celebration of heritage, connection, and creativity. Our recipes are inspired by generations of family cooking, using fresh ingredients, bold spices, and vibrant herbs that capture the essence of the Mediterranean.
        </p>

        <div>
          <p className="mb-2 font-semibold">We believe in simplicity done well:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Handmade sauces, warm breads, and seasonal vegetables</li>
            <li>Locally sourced ingredients whenever possible</li>
            <li>Friendly service that makes you feel at home</li>
          </ul>
        </div>

        <p>
          Whether you're joining us for a casual lunch, a romantic dinner, or a special event, you'll find a space that's cozy, welcoming, and full of flavor.
        </p>

        <p>
          Our team is passionate about every detail — from the olive oil we drizzle to the playlist in the background. We pour our heart into every dish, because sharing good food with good people is what we love most.
        </p>

        <p className="text-[#495E57]">
          Come experience a slice of the Mediterranean — right here in Chicago.
        </p>
      </div>
    </section>
  </>
);

export default About;