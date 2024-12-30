import React from 'react';

export function Hero() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Professional Profile Analytics
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Compare LinkedIn profiles, track career growth, and gain valuable insights into professional trends.
        </p>
        <div className="mt-10">
          <button className="bg-[#0a66c2] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#004182] transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}