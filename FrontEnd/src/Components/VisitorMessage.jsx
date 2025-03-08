import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import sente from "../assets/Images/sente.png";
import { useTranslation } from 'react-i18next';

const VisitorMessage = () => {
  const { t } = useTranslation();
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
      img: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Visitor 3",
      title: "Actor",
      message:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
      img: "/placeholder.svg?height=400&width=400",
    },
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? visitors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === visitors.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gradient-to-b from-[#399918]/10 to-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#399918] mb-4">
           {t('visitor_message')}
          </h2>
          <div className="w-24 h-1 bg-[#FCCD2A] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative ">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 lg:ml-20 mt-44 w-14 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white p-3 rounded-full shadow-lg text-[#399918] hover:text-[#FCCD2A] transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 lg:mr-20 top-1/2 mt-44 w-14 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white p-3 rounded-full shadow-lg text-[#399918] hover:text-[#FCCD2A] transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative aspect-square md:aspect-auto">
                  <img
                    src={visitors[activeIndex].img || "/placeholder.svg"}
                    alt={visitors[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#399918]/80 to-transparent"></div>
                </div>
                <div className="md:w-2/3 p-8 md:p-12 relative">
                  <FaQuoteLeft className="text-6xl text-[#FCCD2A] opacity-20 absolute top-8 left-8" />
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-[#399918] mb-2">
                      {visitors[activeIndex].name}
                    </h3>
                    <p className="text-[#FCCD2A] font-semibold mb-6 flex items-center">
                      {visitors[activeIndex].title}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed italic">
                      "{visitors[activeIndex].message}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {visitors.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3  rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#399918] w-8"
                    : "bg-[#399918]/20 hover:bg-[#399918]/40"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Visitor Thumbnails */}
        <div className="flex justify-center space-x-4 mt-8">
          {visitors.map((visitor, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveIndex(index)}
              className="relative group"
            >
              <div
                className={`absolute inset-0  rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "border-4 border-[#399918] scale-110"
                    : "border-4 border-transparent group-hover:border-[#]"
                }`}
              />
              <img
                src={visitor.img || "/placeholder.svg"}
                alt={visitor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitorMessage;