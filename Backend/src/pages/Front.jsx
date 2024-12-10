import React from 'react';

const Front = () => {
  return (
    <div className="relative flex items-center justify-center h-64"> {/* Adjust height to avoid overlap */}
      <h1 className="text-4xl font-bold text-center text-[#752220]">
        Welcome To Reeva <span className="ml-2">👋</span>
      </h1>
    </div>
  );
};

export default Front;
