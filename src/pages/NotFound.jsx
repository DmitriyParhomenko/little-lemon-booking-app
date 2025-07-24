import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-bold text-[#495E57] mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Page not found</p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#495E57] text-white rounded-md hover:bg-[#3e4e4a] transition"
      >
        Go back home
      </Link>
    </div>
  );
}
