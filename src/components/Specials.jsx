import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/greek_salad.jpg';
import img2 from '../assets/bruchetta.jpg';
import img3 from '../assets/lemon_dessert.jpg';

const specials = [
  {
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: img1
  },
  {
    title: 'Bruschetta',
    price: '$5.00',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: img2
  },
  {
    title: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image: img3
  },
];

const Specials = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Specials</h2>
          <Link
            to="/menu"
            className="border border-[#F4CE14] bg-[#F4CE14] text-black px-6 py-3 rounded-lg font-semibold hover:text-[#495E57] hover:bg-[#fff] transition"
          >
            <span>Online Menu</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {specials.map((item, index) => (
            <div key={index} className="border rounded-xl p-4">
              <Link
                to="/reservations"
                className="mt-auto text-sm font-medium text-green-800 hover:underline transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 mb-4 w-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <div className="flex justify-between mb-2">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <span className="text-[#EE9972] font-medium">{item.price}</span>
              </div>
              <p className="text-sm mb-2 min-h-[80px]">{item.description}</p>
              <Link
                to="/reservations"
                className="mt-auto text-sm font-medium text-green-800 hover:underline transition"
              >
                <span>Order a delivery ➜</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;