import React from 'react';
import { Helmet } from 'react-helmet-async';

const Menu = () => (
  <>
    <Helmet>
      <title>Menu | Little Lemon</title>
      <meta
        name="description"
        content="Explore Little Lemon’s full Mediterranean-inspired menu. Fresh, flavorful dishes crafted with authentic ingredients in the heart of Chicago."
      />
    </Helmet>
    <section className="max-w-7xl mx-auto bg-white text-gray-800 py-16 px-4">
      <div className="mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Our Menu</h1>

        <p>
          At <span className="font-semibold">Little Lemon</span>, every dish is a tribute to Mediterranean culinary traditions. From vibrant salads and grilled meats to warm, rustic breads and seasonal sides — our menu is crafted to nourish and delight.
        </p>

        <p>
          We focus on fresh, locally sourced ingredients and time-honored techniques. Whether you're craving something light or looking to indulge, you'll find something memorable on our menu.
        </p>

        <div>
          <p className="mb-2 font-semibold">Menu Highlights:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Greek salad with Chicago-style feta and house vinaigrette</li>
            <li>Chargrilled lamb skewers with lemon herb marinade</li>
            <li>Homemade hummus with warm pita</li>
            <li>Fresh seafood specials rotating weekly</li>
            <li>Decadent baklava and traditional desserts</li>
          </ul>
        </div>

        <p className="text-[#495E57]">
          Come explore the full experience — from appetizers to dessert — and taste the Mediterranean difference at Little Lemon.
        </p>
      </div>
    </section>
  </>
);

export default Menu;
