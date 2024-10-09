import React from 'react';

const About = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 via-white to-white-50 py-16 px-4 sm:px-6 lg:px-8 sm:pt-32">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-8">About Our Mission</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-6">
          Our mission is to raise global awareness about the devastating impact of plastic pollution on our environment.
          Every year, millions of tons of plastic end up in our oceans, threatening marine life and disrupting ecosystems.
          We believe it's time to take action and make a change.
        </p>
        <p className="text-xl text-gray-600 leading-relaxed mb-12">
          By sharing knowledge, promoting sustainable practices, and supporting environmental initiatives, we can 
          reduce plastic waste and help create a cleaner, healthier planet for future generations.
        </p>
      </div>

      {/* Image Documentation Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="relative">
          <img 
            className="w-full h-64 object-cover rounded-lg shadow-lg" 
            src="/botol.png" 
            alt="Plastic waste on a beach"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
            Plastic waste on a beach
          </div>
        </div>

        <div className="relative">
          <img 
            className="w-full h-64 object-cover rounded-lg shadow-lg" 
            src="/sampah.png" 
            alt="Marine life affected by plastic"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
            Marine life affected by plastic
          </div>
        </div>

        <div className="relative">
          <img 
            className="w-full h-64 object-cover rounded-lg shadow-lg" 
            src="/sampah-2.png" 
            alt="Plastic recycling efforts"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
            Plastic recycling efforts
          </div>
        </div>
        <div className="relative">
          <img 
            className="w-full h-64 object-cover rounded-lg shadow-lg" 
            src="/sampah-2.png" 
            alt="Plastic recycling efforts"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
            Plastic recycling efforts
          </div>
        </div>
        <div className="relative">
          <img 
            className="w-full h-64 object-cover rounded-lg shadow-lg" 
            src="/sampah-2.png" 
            alt="Plastic recycling efforts"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
            Plastic recycling efforts
          </div>
        </div>
        <div className="relative">
          <img 
            className="w-full h-64 object-cover rounded-lg shadow-lg" 
            src="/sampah-2.png" 
            alt="Plastic recycling efforts"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
            Plastic recycling efforts
          </div>
        </div>
      </div>
      
      <div className="text-center mt-16">
        <p className="text-xl font-semibold text-gray-700">
          Together, we can turn the tide against plastic pollution.
        </p>
      </div>
    </div>
  );
};

export default About; 