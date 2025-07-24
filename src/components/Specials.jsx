import React from 'react';

const specials = [
  {
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    title: 'Bruschetta',
    price: '$5.00',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    title: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];

const Specials = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Specials</h2>
          <button className="bg-[#F4CE14] text-black px-6 py-2 rounded-lg font-semibold">Online Menu</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {specials.map((item, index) => (
            <div key={index} className="border rounded-xl p-4">
              <div className="bg-gray-200 h-40 rounded-lg mb-4"></div>
              <div className="flex justify-between mb-2">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <span className="text-[#EE9972] font-medium">{item.price}</span>
              </div>
              <p className="text-sm mb-2">{item.description}</p>
              <button className="mt-auto text-sm font-medium text-green-800">Order a delivery ➜</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;