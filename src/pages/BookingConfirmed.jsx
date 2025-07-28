import React from 'react';

const BookingConfirmed = () => {
  return (
    <div className="max-w-xl mx-auto py-20 m-20 px-6 text-center bg-white shadow-lg rounded-xl">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Booking Confirmed!</h1>
      <p className="text-lg text-gray-700">Thank you for reserving a table at <span className="font-semibold text-[#495E57]">Little Lemon</span>. We look forward to serving you!</p>
    </div>
  );
};

export default BookingConfirmed;