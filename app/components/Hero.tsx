import React from 'react';
import {HERO_CONTENT} from '@/app/constants'

const Hero = () => {
  return (
    
    <section className="bg-mtlNeighborhood bg-no-repeat bg-gray-900 bg-opacity-75 flex justify-center items-center text-white py-20 px-10 h-screen bg-cover bg-center">    
    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}

      <div className="container mx-auto text-left relative z-10">
        <h1 className="text-4xl font-bold mb-6">Welcome to Make Transparency Live</h1>
        <p className="text-lg mb-8">{HERO_CONTENT}</p>
        <button className="px-6 py-3 bg-black text-white font-semibold rounded shadow-md hover:bg-gray-700 focus:outline-none">
          Getting Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
