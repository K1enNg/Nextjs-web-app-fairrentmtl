import React from 'react';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Brand Name</h1>
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
