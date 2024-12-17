import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg text-white mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-black text-white font-semibold rounded shadow-md hover:bg-gray-700 focus:outline-none"
      >
        Back to Home page
      </a>
    </div>
  );
};

export default NotFound;
