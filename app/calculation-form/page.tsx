"use client";

import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const CalculationForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    monthlyRent: "",
    bedrooms: "",
    bathrooms: "",
    yearOfEstablishment: "",
    squareFeet: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add additional functionality here, such as API calls or validation feedback.
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/30 text-gray-900 shadow-md rounded px-8 py-6 w-full max-w-lg z-30 backdrop-blur-md"
    >
      {/* Address */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-gray-300" />
          <label
            htmlFor="address"
            className="block text-gray-300 font-medium"
          >
            Address
          </label>
        </div>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter address"
          className="w-full border rounded px-4 py-2 mt-1"
          required
        />
      </div>

      {/* Monthly Rent and Year of Establishment */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="monthlyRent"
            className="block text-gray-300 font-medium mb-2"
          >
            Monthly Rent ($)
          </label>
          <input
            type="number"
            id="monthlyRent"
            name="monthlyRent"
            value={formData.monthlyRent}
            onChange={handleChange}
            placeholder="1500"
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="yearOfEstablishment"
            className="block text-gray-300 font-medium mb-2"
          >
            Year of Establishment
          </label>
          <input
            type="number"
            id="yearOfEstablishment"
            name="yearOfEstablishment"
            value={formData.yearOfEstablishment}
            onChange={handleChange}
            placeholder="2004"
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
      </div>

      {/* Bedrooms and Bathrooms */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="bedrooms"
            className="block text-gray-300 font-medium mb-2"
          >
            Number of Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            placeholder="4"
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="bathrooms"
            className="block text-gray-300 font-medium mb-2"
          >
            Number of Bathrooms
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            placeholder="2"
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
      </div>

      {/* Square Feet */}
      <div className="mb-4">
        <label
          htmlFor="squareFeet"
          className="block text-gray-300 font-medium mb-2"
        >
          Square Feet
        </label>
        <input
          type="number"
          id="squareFeet"
          name="squareFeet"
          value={formData.squareFeet}
          onChange={handleChange}
          placeholder="800"
          className="w-full border rounded px-4 py-2"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none"
      >
        Analyze My Rent
      </button>
    </form>
  );
};

export default CalculationForm;
