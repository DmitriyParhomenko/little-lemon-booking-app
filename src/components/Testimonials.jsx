import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((_, idx) => (
            <div key={idx} className="p-4 border rounded-xl text-center bg-white">
              <div className="bg-gray-300 h-16 w-16 rounded-full mx-auto mb-2"></div>
              <p className="text-sm mb-1 font-medium">Rating</p>
              <p className="font-semibold">Name</p>
              <p className="text-xs mt-2">Review text</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;