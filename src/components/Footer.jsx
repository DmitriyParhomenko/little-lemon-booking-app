import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#495E57] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Little Lemon</h3>
          <p>Chicago</p>
          <p className="mt-4 text-sm">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Doormat Navigation</h4>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Social Media</h4>
          <ul className="space-y-1 text-sm">
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;