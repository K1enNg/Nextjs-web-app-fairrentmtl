import React from 'react';

const Hero = () => {
  return (
    <div 
      className="bg-gray-100 text-gray-800 py-16 px-8 h-screen bg-cover bg-center" 
      style={{backgroundImage : 'url(app/assets/mtl-neighborhood.png)'}}
    >    
      <div className="container mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6">Welcome to Fair Rent MTL</h1>
        <p className="text-lg mb-8">
          Bringing transparency to the people, by the people. 
          Empowering renters to make informed decisions for a better renting experience.
        </p>
        <button className="px-6 py-3 bg-black text-white font-semibold rounded shadow-md hover:bg-gray-700 focus:outline-none">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
