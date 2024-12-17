import React from 'react'
import {HERO_CONTENT} from '@/app/constants'
import Link from 'next/link';
import CalculationForm from '../calculation-form/page';

const Hero = () => {
  return (
    <div className="container mx-auto text-left relative z-10">
        <h1 className="text-4xl font-bold mb-6">Welcome to Make Transparency Live</h1>
        <p className="text-lg mb-8">{HERO_CONTENT}</p>
        <Link href='/calculation-form'> 
          <button className="px-6 py-3 bg-black text-white font-semibold rounded shadow-md hover:bg-gray-700 focus:outline-none">
            Getting Started
          </button>
        </Link>
      </div>
  )
}

export default Hero