import React from 'react';
import HeroImage from '../HeroSection/HeroImage';

const JoinImpactPlastic = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-transparent to-transparent flex items-center justify-center sm:pt-32 mb-28">
      <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Why You Should Join Impact Plastic</h1>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Impact Plastic is a growing community committed to reducing plastic waste. By joining, you become part of a
          global effort to protect the environment, raise awareness, and create sustainable solutions to the plastic
          crisis.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Connect with like-minded individuals who care about the planet</li>
          <li>Participate in campaigns and projects that reduce plastic waste</li>
          <li>Access to resources and tools to help you live more sustainably</li>
          <li>Be a part of a positive change that impacts both local and global communities</li>
        </ul>
        <p className="text-lg text-gray-700 text-center">
          Together, we can create a world with less plastic and more sustainability.
          Join us today and make a real difference!
        </p>
      </div>
      <HeroImage></HeroImage>
    </div>
  );
};

export default JoinImpactPlastic;
