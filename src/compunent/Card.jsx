import React from "react";

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <img src='https://th.bing.com/th/id/R.1d55575f99ae3d0d625b07932e6a1000?rik=f4rcov5kzqmdDw&pid=ImgRaw&r=0' alt={title} className="w-full h-48 object-cover" />
      
      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
