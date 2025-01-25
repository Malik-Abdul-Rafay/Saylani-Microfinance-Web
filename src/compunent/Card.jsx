import React from "react";

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
      
      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
