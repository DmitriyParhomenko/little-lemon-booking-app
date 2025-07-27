import React from 'react';
import review1 from '../assets/review1.png';
import review2 from '../assets/review2.png';
import review3 from '../assets/review3.png';
import review4 from '../assets/review4.png';

const testimonials = [
  {
    id: 1,
    rating: '⭐️⭐️⭐️⭐️⭐️',
    name: 'James T.',
    text: 'Absolutely delicious! The food tastes like it came straight from the Mediterranean coast. Cozy place and amazing staff.',
    image: review1
  },
  {
    id: 2,
    rating: '⭐️⭐️⭐️⭐️⭐️',
    name: 'Sophia R.',
    text: 'The Greek salad was so fresh and full of flavor. Loved the homemade bread and garlic croutons!',
    image: review2
  },
  {
    id: 3,
    rating: '⭐️⭐️⭐️⭐️⭐️',
    name: 'Liam W.',
    text: 'A hidden gem in Chicago! The dishes are authentic and made with love. Will definitely be back!',
    image: review3
  },
  {
    id: 4,
    rating: '⭐️⭐️⭐️⭐️⭐️',
    name: 'Maria K.',
    text: 'Great atmosphere, perfect date night spot. The lemon chicken was juicy and the flavors were incredible!',
    image: review4
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#495E57]">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="p-6 border rounded-xl text-center bg-white shadow-sm hover:shadow-md transition">
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 object-cover rounded-full mx-auto mb-3"
              />
              <p className="text-yellow-500 mb-1">{item.rating}</p>
              <p className="font-semibold text-[#333]">{item.name}</p>
              <p className="text-sm mt-2 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;