import React from 'react';
import { Helmet } from 'react-helmet-async';

const OrderOnline = () => (
  <>
    <Helmet>
      <title>Order Online | Little Lemon</title>
      <meta
        name="description"
        content="Enjoy Little Lemon from the comfort of your home. Order online for fast delivery or easy pickup in Chicago."
      />
    </Helmet>
    <section className="max-w-7xl mx-auto bg-white text-gray-800 py-16 px-4">
      <div className="mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Order Online</h1>

        <p>
          Bringing the flavors of <span className="font-semibold">Little Lemon</span> straight to your doorstep. Whether you're planning a cozy dinner at home or hosting a gathering, our online ordering makes it easy to enjoy our Mediterranean favorites wherever you are.
        </p>

        <p>
          Choose from our full menu of fresh, handcrafted dishes — from starters and mains to sides and desserts — and customize your order with just a few clicks.
        </p>

        <div>
          <p className="mb-2 font-semibold">Why order with us?</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Fast and reliable local delivery</li>
            <li>Easy curbside pickup available</li>
            <li>Secure online payment</li>
            <li>Exclusive online-only specials</li>
          </ul>
        </div>

        <p className="text-[#495E57]">
          Craving something fresh and flavorful? Place your order online now and enjoy the taste of Little Lemon — anytime, anywhere.
        </p>
      </div>
    </section>
  </>
);

export default OrderOnline;
