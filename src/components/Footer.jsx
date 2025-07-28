import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#495E57] text-white pt-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Little Lemon</h3>
          <p>Chicago, IL</p>
          <p className="mt-4 text-sm">
            A family-owned Mediterranean restaurant serving authentic flavors with a modern twist — right in the heart of Chicago.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Doormat Navigation</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-[#F4CE14]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#F4CE14]">About</Link></li>
            <li><Link to="/menu" className="hover:text-[#F4CE14]">Menu</Link></li>
            <li><Link to="/reservations" className="hover:text-[#F4CE14]">Reservations</Link></li>
            <li><Link to="/order-online" className="hover:text-[#F4CE14]">Order Online</Link></li>
            <li><Link to="/login" className="hover:text-[#F4CE14]">Login</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li>123 Lemon St, Chicago, IL</li>
            <li>
              <a href="tel:+13125557890" className="hover:text-[#F4CE14]">
                (312) 555-7890
              </a>
            </li>
            <li>
              <a href="mailto:hello@littlelemon.com" className="hover:text-[#F4CE14]">
                hello@littlelemon.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Social Media</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4CE14]">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4CE14]">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4CE14]">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 p-10">
        &copy; {currentYear} Little Lemon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
