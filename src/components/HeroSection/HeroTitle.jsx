import React from 'react';
import Typewriter from '../Typewriter/Typewriter';

const HeroTitle = () => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Typewriter></Typewriter>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fadeIn">
        Plastic
        <span className="text-blue-600"> Impact </span>
      </h1>
      <h2 className="mt-6 text-lg leading-8 text-gray-600 animate-fadeIn">
        Making a Cleaner Tomorrow, One Less Plastic at a Time..
      </h2>
    </div>
  );
};

export default HeroTitle;
