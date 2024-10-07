import React, { useState } from "react";
import sente from '../assets/Images/sente.png';

const VisitorMessage = () => {
  // State to track the currently active message
  const [activeIndex, setActiveIndex] = useState(0);

  const visitors = [
    {
      name: "Sentayehu Kefle",
      title: "Comedian",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: sente,
    },
    {
      name: "Visitor 2",
      title: "Musician",
      message:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "path-to-image-2.jpg", // Replace with actual image path
    },
    {
      name: "Visitor 3",
      title: "Actor",
      message:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
      img: "path-to-image-3.jpg", // Replace with actual image path
    },
  ];

  // Handle image click to change the active message
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="flex my-5 justify-between">
      <p className='max-md:mx-5 text-2xl mt-16 text-gray-600 font-bold'>Message from visitors</p>
      <div className="flex space-x-4 mb-6">
        {/* Display clickable images */}
        {visitors.map((visitor, index) => (
          <img
            key={index}
            src={visitor.img}
            alt={visitor.name}
            onClick={() => handleImageClick(index)}
            className={`cursor-pointer w-10 mt-16 h-10 rounded-full border-2 ${
              activeIndex === index ? "border-blue-500" : "border-gray-300"
            }`}
          />
        ))}
      </div>
      </div>


      {/* Display the active message */}
      <div className="flex shadow-lg rounded-lg p-5 bg-white">
        <div className="flex w-full">
          <img
            src={visitors[activeIndex].img}
            alt={visitors[activeIndex].name}
            className="w-1/3 rounded-lg"
          />
          <div className="lg:w-2/3 max-md:mx-5 w-full lg:ml-5 flex flex-col justify-center">
            <h2 className="text-2xl font-bold">{visitors[activeIndex].name}</h2>
            <p className="text-gray-500 mb-4">{visitors[activeIndex].title}</p>
            <p className="text-gray-600 leading-relaxed">{visitors[activeIndex].message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorMessage;
