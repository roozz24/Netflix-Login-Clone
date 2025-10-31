import React from 'react';

export default function Success() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('./images/Netflix bg.jpg')" }}
    >

      <div className="flex items-center justify-between p-6 max-w-6xl mx-auto w-full">
        <img
          src="./images/netflix-logo.svg"
          alt="Netflix Logo"
          className='w-48 h-36'
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/80"></div>

      <h1 className="relative z-10 text-4xl font-bold text-white flex justify-center items-center h-72 md:text-7xl">
        Welcome to Netflix!
      </h1>
    </div>
  );
};
