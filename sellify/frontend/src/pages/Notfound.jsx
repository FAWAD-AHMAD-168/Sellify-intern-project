import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center items-center p-6">
      <img
        src="../images/404-emoji.png"
        alt="Page Not Found"
        className="w-32 h-32 mb-6"/>

      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-2 font-semibold">Page Not Found</p>
      <p className="mb-6 text-center max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900 active:bg-gray-800 transition-all duration-200"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
