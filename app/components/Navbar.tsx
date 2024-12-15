import React from 'react';
import logo from '@/assets/mtl-logo.png'
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-black text-white z-30">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="Logo" className="h-8 w-8 object-cover" />
        <h1 className="text-xl font-bold">MTL</h1>
      </div>
      <nav className="flex gap-6">
        <p className="cursor-pointer hover:underline">Section1</p>
        <p className="cursor-pointer hover:underline">Section2</p>
        <p className="cursor-pointer hover:underline">Section3</p>
        <p className="cursor-pointer hover:underline">Section4</p>
      </nav>
    </header>
  );
};

export default Navbar;
